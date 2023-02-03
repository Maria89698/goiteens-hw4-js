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
    let num = num + 1;
    console.log(21);
    console.log(22);
    console.log(23);
    console.log(24);
    console.log(25);
    console.log(26);
    console.log(27);
    console.log(28);   
}

// # 4
let name = prompt("Please, enter your name");
for (let name; name.length < 6;) {
    console.log(name);
}