{
    var glob = 10;  
    let loc = 15;
    const post = 20;
}

glob = 20
console.log(glob);

// Стрелочные функции, Параметры по умолчанию
fun();

function fun(){
    console.log('Function');
};

const arrow = (a = 0) => {
    console.log('Arrow function', a);
}

arrow();

// Spread / Rest оператор
const mas = (...spread) => {
    return spread;
}

console.log(mas(1, 5, 3, 9, 10, 12));

let m = [1, 2, 32, 45, 2];
// let a = [ 'scsc', 'sacsac', 'ascsa', ...m]

// console.log(a);

// Деструктуризация массивов и объектов
const foo = () => {
    return [1, 2, 3]
}

let [a, b, c] = foo();
console.log(a + 1, b - 1, c * 3);

let mar = [1, 3, 5, 7, 9];

for(elem in mar){
    console.log(mar[elem]);
}

// let a1 = mar[0];
// let a2 = mar[1];
// let a3 = mar[2];
// let a4 = mar[3];
// let a5 = mar[4];
let [a1, a2, a3, a4, a5] = mar;

console.log(a1 + 1);
console.log(a2 - 1);
console.log(a3 * 2);
console.log(a4 / 2);
console.log(a5 % 2);

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6,
    };
}
let { x: d, y: e, z: f } = bar();
console.log(d + 1, e - 2, f * 2);

let obj = {fir: 1, sec: 2, third: 3}
let {fir: fir1, sec: sec1, third: third1} = obj

console.log(fir1 + 1, sec1 - 1, third1 * 2);


// Строковые шаблоны и разделители
let num = 10;

console.log('sacasc', num, 'ascasc');

console.log(`sdjcndsv ${num} ascsacsc`);


