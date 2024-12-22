//



// 1-1

// let person = {
//     name: "Martin",
//     age: 25,
//     job: "driver"
// }


// 1-2

// let car = {
//     brand: "LADA",
//     model: "Granta",
//     year: 2011,
//     color: "grey"
// }


// 2-1

// function Person(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }

// let PersonObj = new Person("Annie", 19, "cashier")


// 2-2

// function Car(brand, model, age, color) {
//     this.brand = brand;
//     this.model = model;
//     this.age = age;
//     this.color = color;
// }

// let CarObj = new Car("Toyota", "Supra", 1978, "red")


//3

// person.age = 26;
// car.color = "black";
// PersonObj["job"] = "manager";
// CarObj["color"] = "powder blue";


//4 

// person.gender = "male";
// CarObj.mileage = 180000;


//5

// delete CarObj.color;



//Методы объектов

//1

// let person = {
//     name: "Martin",
//     age: 25,
//     greet: function() {
//         console.log("Hi, my name is " + this.name)
//     }
// }

// person.greet();



//2

// let calculator = {
//     add: function (a, b) {
//         console.log(a + b)
//     },
//     subtract: function (a, b) {
//         console.log(a - b)
//     },
//     multiply: function (a, b) {
//         console.log(a * b)
//     },
//     divide: function (a, b) {
//         console.log(a / b)
//     }
// }

// calculator.add(1, 3);
// calculator.subtract(5, 2);
// calculator.multiply(7, 7);
// calculator.divide(14, 7);



//3

// let car = {
//     start: function() {
//         alert("Машина запущена")
//     },
//     stop: function() {
//         alert("Машина остановлена")
//     }
// }

// car.start();
// car.stop();


//Прототипы объектов


//1

// let person = {
//     name: "",
//     age: 0,
// }

// let jhon = Object.create(person);
// jhon.name = "Jhon";
// jhon.age = 23;
// console.log(jhon);


//2

// let animal = {
//     eat: function() {
//         alert("животное кушает")
//     }
// }

// let dog = Object.create(animal);
// dog.eat()


//3

// let shape = {
//     draw: function() {
//         alert("фигура рисуется")
//     }
// }

// let rectangle = Object.create(shape);
// rectangle.draw();


//Массивы

//1

let fruits = ["orange", "apple", "peach"];


let empty = new Array();
let weapons = new Array(1, 2, 3, 4);


let str = "welcome";
let third = Array.from(str);


let objarr = {
    length: 3,
    0: "he",
    1: "she",
    2: "we"
};

let pronouns = Array.from(objarr);


fruits.push("lemon");
weapons.pop();
pronouns.shift();
third.unshift("y");


console.log(fruits);
console.log(weapons);
console.log(third);
console.log(pronouns);

//slice()

//1

let numbers = [1, 2, 3, 4, 5];

let subNumbers = numbers.slice(0, 3);

console.log(subNumbers);


//2

let string = "Hello my name is Mark";

let subString = string.slice(0, 13);

console.log(subString);


//3

let strings = ["my", "friend", "lost", "hi's", "wallet"];

let subStrings = strings.slice(2, 5);

console.log(subStrings);


//4

let syString = "dg465fd4";

let subSyString = syString.slice(2, 8)

console.log(subSyString);


//5 

let car1 = {
    brand: "haval",
}
let car2 = {
    brand: "honda",
}
let car3 = {
    brand: "mazda",
}

let carArr = [car1, car2, car3];

let subCarArr = carArr.slice(0, 2)

console.log(subCarArr);


//splice()


//1

let numArr = [1,2,3]
numArr.splice(0, 1);

console.log(numArr);

//2 split, join

let strWords = "why are you here";
let wordsArray = strWords.split(' ');

wordsArray.splice(0, 1);
strWords = wordsArray.join(' ');

console.log(strWords)

//3

let arrStr = ["one","two","three"]
arrStr.splice(1, 1);

console.log(arrStr);


//4 split, join

let strOne = "56465sdfd";
let strArr = strOne.split('');

strArr.splice(0, 3);
strOne = strArr.join('');

console.log(strOne)


//5

let car4 = {
    brand: "lamborgini",
}
let car5 = {
    brand: "BMW",
}
let car6 = {
    brand: "audi",
};

let carArrSec = [car4, car5, car6];

let subCarArrSec = carArrSec.splice(1, 2)

console.log(subCarArrSec);


//concat()

//1

let num1 = [1,2,3,4];
let num2 = [1,2,3,4];

let combineNum = num1.concat(num2);
console.log(combineNum);


//2

let lett1 = ["a","b","c"];
let lett2 = ["A","B","C"];

let combineLet = lett1.concat(lett2);
console.log(combineLet);


//3

let arrStr1 = ["i want coffee,"];
let arrStr2 = ["and my son wants tea"];

let combineArrStr = arrStr1.concat(arrStr2);
console.log(combineArrStr);


//4

let str1 = "dfjipo";
let str2 = "gf165g";

let combineStr = str1.concat(str2);
console.log(combineStr);


//5

let array1 = ["sd,","gdo", 45, 9];
let array2 = [25, 12, 64];

let combineArray = array1.concat(array2)
console.log(combineArray);


//map()

//1

let plus = [1,2,3,4]

let plusOne = plus.map(function(plus) {
    return plus + 1;
}) 

console.log(plusOne);

//2

let wordsReg = ["one", "two"]

let wordsUp = wordsReg.map(function(x) {
    return console.log(x.toUpperCase());
})

console.log(wordsUp);


//3

let humans = [
    {name: "Jonh", age: 14},
    {name: "Alex", age: 16}
];

let humanFull = humans.map(function(x) {
    return {
        name: x.name,
        age: x.age,
        fullName: x.name + " " + x.age
    }
    
})

console.log(humanFull);


//4

let toSquare = [1,2,3,4]

let square = toSquare.map(function(toSquare) {
    return toSquare  **2;
}) ;

console.log(square);


//5

let wordsReg1 = ["ONE", "TWO"]

let wordsDown = wordsReg1.map(function(x) {
    return console.log(x.toLowerCase());
})

console.log(wordsDown);

//filter()

//1

let filnum = [1,2,3,4,5,6];

let filnumEven = filnum.filter(function(nu){
    return nu % 2 === 0;
});

console.log(filnumEven);


//2

let filarr = ['dsss', 'ghgfihg', 'dpdjd'];

let filarrLen = filarr.filter(function(wo){
    return wo.length >= 5; 
});

console.log(filarrLen);


//3

let filobj1 = {
    product: "apple",
    price: 800
}
let filobj2 = {
    product: "pineapple",
    price: 1000
}

let filobjs = [filobj1, filobj2];

let filobjsPr = filobjs.filter(function(pr){
    return pr.price >= 1000;
});

console.log(filobjsPr)


//reduce()

//1 

let rednum = [5,3,4,6];

let rednumSum = rednum.reduce(function(all, inn){
    return all + inn;
}, 0);

console.log(rednumSum);


//2

let redstr = ["hello world ", "it's ", "nice to be here"];

let redstrAll = redstr.reduce(function(all, inn){
    return all + inn;
});

console.log(redstrAll);


//3

let rednumMult = rednum.reduce(function(all, inn){
    return all * inn;
});

console.log(rednumMult);


//4

let redobjs = [
    {
    name: "Lincoln",
    age: 24
    },
    {
    name: "Peter",
    age: 15
    }
];

let redobjsMid = redobjs.reduce(function(all, inn) {
    return (all.age + inn.age) / 2
})

console.log(redobjsMid)


//sort()

//1 

let soNum = [5,8,3,4,2,6,1,7]

soNum.sort()

console.log(soNum);


//2

let soObj1 = {
    name: "Lincoln",
    age: 24
};
let soObj2 = {
    name: "Peter",
    age: 15
};

let soObjs = [soObj2, soObj1];

soObjs.sort(function(a, b) {
    return b.age - a.age;
});

console.log(soObjs);


//3

let soReNum = [5,8,3,4,2,6,1,7];

soReNum.sort(function (a, b) {
    return b - a;
});

console.log(soReNum);


//4

let soWords = ["love", "death", "robots"];

soWords.sort()
soWords.reverse()

console.log(soWords);


//forEach

//1

let forNum = [13,6,65];

forNum.forEach(function(a) {
    console.log(a)
});


//2

let forWord = ['this', 'is'];

forWord.forEach(function(a) {
    console.log(a)
});


//3

let forObj1 = {
    name: "Diana",
    age: 26
};
let forObj2 = {
    name: "Maxim",
    age: 37
};

let forObjs = [forObj1, forObj2];

forObjs.forEach(function(a){
    console.log(a.name, a.age)
});


//4

let forSum = [13,6,65];
let zero = 0;

forSum.forEach(function(x) {
    zero += x;
})

console.log(zero);


//5

let forStr = ["dofn", "fodd", "ohsdugi"];

forStr.forEach(function(str) {
    console.log("Эта строка", str, "содержит", str.length, "символов");
});


//find()

//1

let findNum = [1,6,8,11,52];

let findNumTen = findNum.find(function(a) {
    return a > 10;
})

console.log(findNumTen);


//2

let findStr = ["dbui", "dsajpd", "fdgoid"]

let findStrA = findStr.find(function(a) {
    return a.includes("a");
})

console.log(findStrA)


//3

let findObj1 = {
    name: "Vika",
    age: 35
};
let findObj2 = {
    name: "Victor",
    age: 17
};

let findObjs = [findObj1, findObj2];

let findObjs30 = findObjs.find(function(a) {
    return a.age > 30;
})

console.log(findObjs30)


//4 

let findNumE = [1,7,9,11,52];

let findNumEven = findNumE.find(function(a) {
    return a % 2 === 0;
})

console.log(findNumEven);


//5

let findStr2 = ["dbui", "dsajpd", "adgoid"]

let findStrFirstA = findStr2.find(function(a) {
    return a.startsWith('a');
})

console.log(findStrFirstA)