//TASK 1
/*let sum = 0;

for (let i = 0; i < 5; i++) {
    let a = parseFloat(prompt("Введіть число: "));
    
    if (a < 0) {
        sum+=a;
    }
}
alert(sum); */  

//TASK4
/*let sum = 0;
let x;
let i = 0;
do {
    x = parseFloat(prompt("Введіть число: "));
    if (x < 0) {
        i = 1;
    } else {
        sum += x;
    }
} while (i == 0);
alert(sum);*/

//TASK 3
/*let a = true;
confirm("Хочеш вивести зірочку?");
while (a) {
    alert("*");
    a = confirm("Продовжити виводити зірочку?");
}
alert("Кінець зорепаду!");*/


//TASK 2
    let a = parseFloat(prompt('Як хочеш побачити зірочки? 1 - горизонтально, 2 - вертикально, 3 - ніяк'));
    let k = parseFloat(prompt('Скільки зірочок хочеш побачити?'));
    
    if (a==1) {
        for (let i = 0; i < k; i++) {
            document.write('*');
        }
    }
    if (a==2) {
        for (let i = 0; i < k; i++) {
            document.write('<p>*</p>');
        }
    }
    if (a == 3) {
    }                       