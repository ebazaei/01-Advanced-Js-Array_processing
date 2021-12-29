// let arr = ["b", "c", "d"]
// arr.push('e');
// arr.pop()
// arr.unshift("a")
// arr.shift() 
// console.log(arr)

// const arr = [1, 5, 7]
// console.log(arr)
// arr.splice(0, 0, "a", 3, 4)
// console.log(arr)
// console.log(arr)

// const arr = [{ id: 5, name: "Sam" }, { id: 7, name: "Pouyan" }]

// // arr.findIndex(x => x.id === 5)               // returns 0
// // arr.findIndex(x => x.name === "Pouyan")      // returns 1
// // arr.findIndex(x => x === 3)                  // returns -1
// // arr.findIndex(x => x.id === 17)              // returns -1

// console.log(arr.find(x => x.id === 5))

// const arr = [5, 7, 12, 15, 17]
// arr.some(x => x%2===0)              // true; 12 is even
// arr.some(x => x === 10)             // false; no match value
// arr.some(x => x%2===0)

// console.log(arr.some(x => x%2===0))


// const cart = [ { name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }] 
// // const names = cart.map(x => x.name)            // ["Widget", "Gadget"]
// //const prices = cart.map(x => x.price)          // [9.95, 22.95]
// // const discountPrices = prices.map(x => x*0.8)  // [7.96, 18.36]
// // const lcNames = names.map(String.toLowerCase)  // ["widget", "gadget"]
// console.log(prices)


// const items = ["Widget", "Gadget"] 
// const prices = [9.95, 22.95]

// const cart = items.map((x, i) => ({ name: x, price: prices[i]})) 

// // cart: [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }]

// console.log(cart)


// const arr = [5, 7, 2, 4];
// const sum = arr.reduce((a, b) => a += b, 0); //output: 18
// console.log(sum)



// const words = ["Beachball", "Rodeo", "Angel",
// "Aardvark", "Xylophone", "November", "Chocolate",
// "Papaya", "Uniform", "Joker", "Clover", "Bali"];

// const alphabetical = words.reduce((a, x) => {
//   if(!a[x[0]]){
//     a[x[0]] = [];
//   }
//   a[x[0]].push(x);
//   return a; }, {});
  
// console.log(alphabetical);
// /* output:
//          {
//           "A":["Angel", "Aardvark"],
//           "B":["Beachball", "Bali"],
//           "C":["Chocolate", "Clover"],
//           "J":["Joker"],
//           "N":["November"],
//           "P":["Papaya"],
//           "R":["Rodeo"],
//           "U":["Uniform"],
//           "X":["Xylophone"]
//         } 
// */


//Filter
// var numbers = [1, 2, 3, 4, 5];
// var oddNumbers = numbers.filter(num => num % 2 === 1)
// console.log(oddNumbers) // [1, 3, 5]


// let numbers = [29, 5, 10, 11, 35];
// let filtered = numbers.filter(item => item > 10);// [29, 11, 35]
// console.log(filtered) 


// const users = [
//     { name: 'Chris', color: 'Brown' },
//     { name: 'Napoleon', color: 'Green' },
//     { name: 'David', color: 'Blue' },
//     { name: 'Michael', color: 'Green' },
// ];
 
// const greenLovers = users.filter(
//   user => user.color === 'Green'
// )
 
// console.log(greenLovers)
 
// /*
// [
//   { name: 'Napoleon', color: 'Green' },
//   { name: 'Michael', color: 'Green' }
// ]
// */

// var arrays = [[1, 2], [3, 4], [5, 6]]
 
// var flatten = arrays.reduce((acc, arr) => {
//     return acc.concat(arr)
//     // or
//     // return [...acc, ...arr] not recommended
// }, [])
 
// console.log(flatten) // [ 1, 2, 3, 4, 5, 6 ]

