let a = prompt("Please input a number");

if (a >= 0) {
    alert(`Congratulation! You did it!`);
} else if (a < 0) {
    alert(`Please input a positive number!`);
} else {
    alert(`Please input a number!`);
}

let b = prompt("Please input your email")
let c = b.length;
if (b.search("@") === -1 || bLength < 8 || b.charAt(0) === "@" || b.charAt(bLength - 1) === "@") {
    alert("Your email is not valid");
}