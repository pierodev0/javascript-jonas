'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

function formatearFecha(fecha, mostrarHora = 0) {
  fecha = new Date(fecha);
  const year = fecha.getFullYear();
  const month = `${fecha.getMonth() + 1}`.padStart(2, 0);
  const day = `${fecha.getDay() + 1}`.padStart(2, 0);
  const hour = fecha.getHours();
  const minute = fecha.getMinutes();

  const fechaFormateada = `${day}/${month}/${year}`;

  return !mostrarHora ? fechaFormateada : `${fechaFormateada} ${hour}:${minute}`;
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const fecha = formatearFecha(acc.movementsDates[i]);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${fecha}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//SIEMPRE LOGIN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    labelDate.textContent = `${formatearFecha(new Date)}`

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    
    //Add transfer date
    currentAccount.movementsDates.push((new Date).toISOString())
    receiverAcc.movementsDates.push((new Date).toISOString())

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push((new Date).toISOString())

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*====================================
170. Converting and Checking Numbers
====================================*/
// console.log(0.1 + 0.2) //Trabaja con Bynario base 2
// console.log(0.1 + 0.3 == 0.3) //false

// //Conversion a numero
// console.log(Number('23'));
// console.log(+'23');

//Parsing -> Debe empezar con un numero
//Entero
// console.log(Number.parseInt("30px")) //30px
// console.log(Number.parseInt("e45")) //Nan

// //Decimal
// console.log(Number.parseFloat("2.5rem")) //2.5

//Verificar is el valor is NaN
//  console.log(Number.isNaN(20)) //false
//  console.log(Number.isNaN("20")) //false
//  console.log(Number.isNaN(+"20x")) //true
//  console.log(Number.isNaN(23 / 0)) //false

//Verificiar si es un numero
//  console.log(Number.isFinite(20)) //true
//  console.log(Number.isFinite("20")) //false
//  console.log(Number.isFinite("20")) //false
//  console.log(Number.isFinite("20x")) //false
//  console.log(Number.isFinite(23/0)) //false

//  console.log(Number.isInteger(23)) //true

/*====================================
171. Math and rounding
====================================*/
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3)); //Al cubo

// console.log(Math.max(5, 18, 23, 11, 12)); // 23
// console.log(Math.max(5, 18, '23', 11, 12)); //23
// console.log(Math.max(5, 18, 'px', 11, 12)); //NaN

// console.log(Math.min(5, 18, 23, 11, 12)); //5

// console.log(Math.trunc(Math.random() * 6) + 1);

//Funcion para obtener un numero aleatorio
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

//Redondear enteros
// console.log(Math.trunc(23.4))

// console.log(Math.round(23.3)) //23
// console.log(Math.round(23.7)) // 24

// console.log(Math.ceil(23.2)) // 24
// console.log(Math.ceil(23.9)) // 24

// console.log(Math.floor(23.1)) // 23
// console.log(Math.floor(23.9)) // 23

// console.log(Math.trunc(-23.3)) // 23
// console.log(Math.floor(-23.3)) // 24

//Redondear decimales
// console.log(+(2.1587).toFixed(2))

/*====================================
172. REMINDER OPERATOR
====================================*/

// console.log(5 % 2);

//Es par
// console.log(6 % 2 === 0) //true

const esPar = n => n % 2 === 0;

labelBalance.addEventListener('click', e => {
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.background = '#ffd968';
    }

    if (i % 3 === 0) {
      row.style.background = '#8ddb63';
    }
  });
});

/*====================================
175. DATES AND TIMES
====================================*/
// //Crear fechas
// const now = new Date(); // Thu Aug 03 2023 22:02:03 GMT-0500 (hora estándar de Colombia)
// console.log(new Date("Aug 03 2023 "))
// console.log(new Date(account1.movementsDates[0]))
// console.log(new Date(2023,7,3,22,8,10))

// //Milisecond UNIX time
// console.log(new Date(0))
// console.log(new Date(3 * 24 * 60 * 60 * 1000))

// //Trabajando con fechas
// const future =new Date(2023,7,3,22,8);
// console.log(future)
// console.log(future.getFullYear())
// console.log(future.getMonth())
// console.log(future.getDate())
// console.log(future.getDay())
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())
// console.log(future.toISOString()) //2023-08-04T03:08:00.000Z
// console.log(future.getTime())

// console.log(new Date(1691118480000))

// console.log(Date.now())

// future.setFullYear(2040) //Cambiar el año

/*====================================
177. OPERATION WITH DATES
====================================*/