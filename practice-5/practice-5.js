let a = parseFloat(prompt("math mark"))
let b = parseFloat(prompt("Physical mark"))
let c = parseFloat(prompt(" Chemistry mark"))

let averageMark = (a + b + c) / 3;
console.log(averageMark);

if (averageMark >= 8) {
    alert("Your rank is: A")

} else if (averageMark >= 6.5) {
    alert("Your rank is: B")

} else if (averageMark >= 5) {
    alert("Your rank is: C")
} else(
    alert("Your rank is: D")
)