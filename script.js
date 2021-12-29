// Exercise 1---------------------------------------------------------------------------------
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
// The function should not modify the array. It should return the new array. For instance:


const arr = [5, 3, 8, 1] 

function filterRange(arrayname, a, b){
    var newArr = arrayname.slice(a, b);
    console.log(newArr);
}

filterRange(arr, 1, 4)



// Exercise 2---------------------------------------------------------------------------------
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// For instance:

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 } 
// let mary = { name: "Mary", age: 28 }
// let users = [ john, pete, mary ]
// let names = /* ... your code */
// alert( names ) // John, Pete, Mary




// Exercise 3---------------------------------------------------------------------------------
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }
// let arr = [ john, pete, mary ]
// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28




