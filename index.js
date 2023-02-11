// # 1, 2
for (let i; i <= 5; i += 1) {
    if (i % 2 === 0) {
        console.log('Число парне');
    } else {
        console.log('Число непарне');
    }
}

// # 3
let num = 20;
if (num < 28) {
    num = num += 1;
    console.log(21);
}

// # 4
for (let name; name.length < 6;) {
    let name = prompt("Please, enter your name");
    console.log(name);
}