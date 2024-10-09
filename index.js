console.log(96745);

//indexOf vs findIndex vs find
//main diff are the parameters of these functions

//index of : when you want to find the index of the first occurence of the specified element

const bea = ["ant", "bison", "camel", "duck", "bison"];

console.log(bea.indexOf("bison"));

//findIndex : returns the index of the first element that satisfies the condition

const array1 = [5, 12, 8, 130, 44]; //3rd index is greater than 13

const isLarge = (element) => element > 13; //cb

console.log(array1.findIndex(isLarge));

//find : returns the first element that satisfies the condition

const array2 = [5, 12, 8, 130, 44]; //3rd index is greater than 13

const isLarge2 = (element) => element > 13; //cb

console.log(array1.find(isLarge2));

//some : returns boolean :

const array3 = [5, 12, 8, 130, 44]; //3rd index is greater than 13

const isLarge3 = (element) => element > 200; //cb

console.log(array1.some(isLarge3));

//The some() method checks if any array elements pass a test (provided as a callback function).
//The some() method checks if any array elements pass a test (provided as a callback function).
