const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto']

}

const restaurantName = restaurant.name;
console.log("🚀 ~ restaurantName:", restaurantName)
const restaurantLocation = restaurant.location;
console.log("🚀 ~ restaurantLocation:", restaurantLocation)


const { name: restaurantName2, location: restaurantLocation2 } = restaurant;

console.log("🚀 ~ restaurantLocation2:", restaurantLocation2)
console.log("🚀 ~ restaurantName2:", restaurantName2)
