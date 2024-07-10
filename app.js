// Exercise 1
const foods = [];  
console.log('Exercise 1 result:', foods);

// Exercise 2
const foods2 = [];
foods2.push('pizza');
foods2.push('cheeseburger');
console.log('Exercise 2 result:', foods2);

// Exercise 3
const foods3 = [];
foods3.push('pizza');
foods3.push('cheeseburger');
foods3.unshift('taco');
console.log('Exercise 3 result:', foods3);

// Exercise 4
const foods4 = ['taco', 'pizza', 'cheeseburger'];
const favFood = foods4[1];
console.log('Exercise 4 result:', favFood);

// Exercise 5
const foods5 = ['taco', 'pizza', 'cheeseburger'];
foods5.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods5);

// Exercise 6
const foods6 = ['taco', 'pizza', 'tofu', 'cheeseburger'];
foods6.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods6);

// Exercise 7
const foods7 = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];
const yummy = foods7.slice(1, 3);
console.log('Exercise 7 result:', yummy);

// Exercise 8
const foods8 = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];
const soyIdx = foods8.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

// Exercise 9
const foods9 = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];
const allFoods = foods9.join(' -> ');
console.log('Exercise 9 result:', allFoods);

// Exercise 10
const foods10 = ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger'];
const hasSoup = foods10.includes('soup');
console.log('Exercise 10 result:', hasSoup);

// Exercise 11
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
nums.forEach(num => {
    if (num % 2 !== 0) {
        odds.push(num);
    }
});
console.log('Exercise 11 result:', odds);

// Exercise 12
const nums12 = [1, 3, 5, 7, 9, 10, 12, 15, 18, 20, 30];
const fizz12 = [];
const buzz12 = [];
const fizzbuzz12 = [];
nums12.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz12.push(num);
    } else if (num % 3 === 0) {
        fizz12.push(num);
    } else if (num % 5 === 0) {
        buzz12.push(num);
    }
});
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz12);
console.log('  buzz:', buzz12);
console.log('  fizzbuzz:', fizzbuzz12);

// Exercise 13
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[numArrays.length - 1];
console.log('Exercise 13 result:', numList);

// Exercise 14
const numArrays14 = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const num = numArrays14[2][1];
console.log('Exercise 14 result:', num);

// Exercise 15
const numArrays15 = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
let total = 0;
numArrays15.forEach(innerArray => {
    innerArray.forEach(num => {
        total += num;
    });
});
console.log('Exercise 15 result:\n', total);
