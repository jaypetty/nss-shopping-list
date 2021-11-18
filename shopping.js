const groceryList = [
    milk = {
        id: 1,
        name: "milk",
        price: 4.50
    },
    eggs = {
        id: 2,
        name: "eggs",
        price: 3.99
    },
    pizzaRolls = {
        id: 3,
        name: "pizza rolls",
        price: 7
    },
    chicken = {
        id: 4,
        name: "chicken",
        price: 13
    },
    strawberries = {
        id: 5,
        name: "strawberries",
        price: 2.50
    },
    buns = {
        id: 6,
        name: "sandwich buns",
        price: 3.50
    },
    ranch = {
        id: 7,
        name: "ranch",
        price: 6
    }
]

console.log(groceryList);

const addToShoppingList = (names, prices,) => {

const newItem = {
    id: groceryList.length + 1,
    name: names,
    price: prices,
    dateCreated: new Date()
}

groceryList.push(newItem);

return newItem;
}

addToShoppingList("soap", 3,);
addToShoppingList("sprite", 2);
addToShoppingList("steak", 15);
addToShoppingList("chips", 4);
addToShoppingList("salmon", 16);

console.log(groceryList);
