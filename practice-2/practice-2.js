let array = [1, 50, 28, 2, 5, 103, 496, 105, 108, 25, 36, 6, 50, 53, 289, 1003, 472, 105, 3, 899, 692, 1000, 289, 103];

let newArray = [];
for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i]);
    }
}

console.log(newArray);
let a = 0;
for (let i = 0; i < newArray.length; i++) {
    a += newArray[i];
}
console.log("sum" + a);

let newArr = array.filter(function(item) {
    return item % 2 === 0

})
console.log(newArr);
let b = array.filter(function(item) {
    return item % 2 === 1

})
console.log(b);

array.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(array);