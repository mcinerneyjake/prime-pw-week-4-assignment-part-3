console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// ## Assignment - Cart System

// In this section we will write some functions that might be used in a simple cart system for a store.

// ### Required Features
// Update the `cart.js` file to do the following:

// - Create a global variable named `basket` and set it to an empty array.

let basket = []; // DONE

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`.
//   - return `true` indicating the item was added

function addItem(item) {
  let check = false;
  basket.push(item);
  check = true;
  return check;
}

console.log(`Basket is an empty array: ${basket}`);
console.log('Adding orange (expect true)', addItem('orange'));
console.log('Adding apple (expect true)', addItem('apple'));
console.log('Adding toyota tacoma (expect true)', addItem('toyota tacoma'));
console.log(`Basket is now ${basket}`); // DONE

// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

function listItems(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return item;
    }
  }
}

console.log(
  'Should list item of orange in basket,',
  listItems('orange', basket)
);
console.log('Should list item of apple in basket,', listItems('apple', basket));
console.log(
  'Should list item of toyota tacoma in basket,',
  listItems('toyota tacoma', basket)
);
// This is a test to check if other elements will be logged in the console:
console.log(
  'TEST - Should NOT list item of banana in basket,',
  listItems('banana', basket)
); // DONE

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array

function empty() {
  basket = [];
}

empty();

console.log('basket should be assigned to an empty array:', basket); // DONE

// ### Stretch Goals
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

// __Using functions in other functions!__

// 1. Add a global `const` named `maxItems` and set it to 5.

const maxItems = 5; // DONE

addItem('donut');
addItem('coffee');
addItem('Al Green vinyl');
addItem('headphones');
addItem('bacon');

console.log(basket);

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

function isFull() {
  if (basket.length < maxItems) {
    return false;
  }
  return true;
}

console.log(isFull()); // DONE

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

function addItemMaxLimit(item) {
  let check = false;
  if (isFull() === false) {
    basket.push(item);
    check = true;
  }
  return check;
}

console.log(addItemMaxLimit('granny smith'));
console.log(addItemMaxLimit('granny blacksmith'));
console.log(addItemMaxLimit('granny goldsmith'));
console.log(basket); // DONE

// __Using Array built-in functions!__

// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found
