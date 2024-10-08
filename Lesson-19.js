1
function sum (l, k) {
    return console.log(l + k)
}
sum(7, 7)

// 2
function proz (p, h) {
    return console.log(p * h)
}
proz(4, 8)

// 3
function zero (z) {
    let message = (z > 0) ? "Положительное число" : "Отрицательное число";
    return console.log(message)
}
zero(-7)
zero(5)

// 4
let a1 = 47;
let b1 = 13;

let c1 = a1 + b1;
let d1 = c1 / 2;
let e1 = d1 * 3;
let f1 = e1 - a1;
let g1 = f1 % 15;
console.log(c1, d1, e1, f1, g1)

// 5
let x = true;
let y = false;
console.log(x > y, x < y, x == y, x != y,)

// 6
let age = 17;
function ageContr(age, old){
    if(age <= 18){
        console.log("Вы подросток")
    }else if(age >= 18){    
        console.log("Вы взрослый")
    }
    if(old >= 50){
        console.log("Вы пожилой")
    }
}
ageContr(17, 60)

//  7
function step (v, m) {
    return console.log(v ** 2, m ** 2)
}
step(4, 7)

// 8
let ctr = 0;

ctr += 5;
ctr -= 2;
ctr *= 3;
ctr /= 2;

console.log(ctr)

// 9
let text = "ну как бы да, но как бы нет";
let danet = text != "ну как бы нет но как бы да";
let netda = text == "ну как бы нет но как бы да";
console.log(danet, netda)

//10 
function arrsum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
       sum += arr[i]
    }
    return console.log(sum)
}
arrsum([10, 20, 30])

//11 
let isAge = 25;
let isAdult = (isAge >= 18);
console.log(isAdult)

//2-1
let agever = prompt("Введите ваш возраст");
if(agever >= 18){
    console.log("Пользователь совершеннолетний и может пройти тестирование на вождение")
} else{
    console.log("Пользователь несовершеннолетний и не может пройти тестирование на вождение")
}
//2-2
let emptystr = prompt("Введите строку");
if(emptystr == ""){
    console.log("Пустая строка")
} else{
    console.log("Строка не пустая")
}

//3-2
function strLength(str){
    return console.log(str.length)
}

strLength("welcome home")

//3-3
function res(su, us,){
    return console.log(su / us)
}
res(35, 7)
