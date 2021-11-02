let a = prompt(" nhập 1 số lớn hơn 3")

if (a < 3) {
    alert("Please retry again!")
} else {
    let b = "*";
    let c = "";
    for (i = 1; i < a; i++) {

        c = c.concat(b);
        console.log(c + "<br/>")

    }

}