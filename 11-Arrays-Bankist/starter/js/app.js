'use strict';

/////////////////////////////////////////////////
// BANKIST APP
// Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/*====================================
FUNCIONES
====================================*/

function displayMovements(movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplayBalance(account) {
  account.balance = account.movements.reduce((acc, curr) => acc + curr, 0);

  labelBalance.textContent = `${account.balance}€`;
}

function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter(value => value > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(value => value < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(value => value > 0)
    .map(value => (value * account.interestRate) / 100)
    .filter(value => value > 1) //Filtrar valores mayores 1 euro
    .reduce((acc, curr) => acc + curr, 0);

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
}

function updateUI(acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
}

const createUsernames = function (accs) {
  //Iterar el array
  accs.forEach(function (acc) {
    //Agregar la propiedad accs del array que se pasa como parametro
    acc.username = acc.owner
      .toLowerCase() //Convertir a minuscula
      .split(' ') //Dividir el array en subcandenas usando el espacio como separador
      .map(name => name[0]) //Obtener el primer caracter
      .join(''); //Unir en una cadena
  });
};
createUsernames(accounts);

/*====================================
 IMPLEMENTING LOGIN
====================================*/
let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    //Show UI
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

/*====================================
IMPLEMENTAR TRANSFERENCIA
====================================*/

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const receiverAccount = accounts.find(
    account => account.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  console.log(amount, receiverAccount);

  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    //Hacer la transferencia
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

/*====================================
CLOSE ACCCOUNT -> Find Index
====================================*/
btnClose.addEventListener('click', e => {
  e.preventDefault();
  console.log('hola');
  console.log(currentAccount);

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log('Usuario confirmado');

    const indexAccount = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    
    //Delete account
    accounts.splice(indexAccount, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";


});
