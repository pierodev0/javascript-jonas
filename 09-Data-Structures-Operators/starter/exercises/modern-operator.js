// Data needed for first part of the section
const restaurante = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


const weekdays = ["mon","tue","wed","thu","fri","sat","sun"];

// for(const day of weekdays){
//   const open =  restaurante.openingHours[day]?.open ? restaurante.openingHours[day]?.open : "esta cerrado";
//   console.log(`El dia ${day} esta ${open}`)
// }

const properties = Object.keys(restaurante);
const values = Object.values(restaurante);
const entries = Object.entries(restaurante);

// console.log(properties)
// console.log(values)

for(const [key,value] of Object.entries(restaurante)){
  console.log(key,value)
}