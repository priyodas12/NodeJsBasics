const x = 1;
const y = 2;

console.log(x, y);

//%s format for String
//%d
//%i
//%o

//console.clear();

console.count('test');
console.count('test');
console.count('test');

const func1 = () => { console.trace() }
const func2 = () => func1();

//func2();

const sum = (a, b) => console.log(`Sum: ${a + b}`);

const multiply = (a, b) => console.log(`Multiplication : ${a * b}`);

const mesaureTime = () => {
	console.time("sum()");
	sum(1292997812, 239293);
    console.timeEnd("sum()");
    console.time('multply()');
    multiply(1292991212, 239293);
	console.timeEnd("multply()");
};

mesaureTime();



