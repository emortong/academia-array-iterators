'use strict';

let people = [
	{ name: 'Estefania', age: 24, gender: 'female'},
	{ name: 'Monica', age: 20, gender: 'female'},
	{ name: 'Jose', age: 34, gender: 'male'},
	{ name: 'Carlos', age: 50, gender: 'male'},
	{ name: 'Maria', age: 12, gender: 'female'},
	{ name: 'Mariana', age: 54, gender: 'female'},
	{ name: 'Alejandro', age: 14, gender: 'male'},
	{ name: 'Jesus', age: 4, gender: 'male'},
	{ name: 'Carolina', age: 29, gender: 'female'}
];

// ======= imperative

let aForLoop = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

let aForLoopReturningNewArray = (arr) => {
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		newArray.push(arr[i]);
	}
	return newArray;
};

let aForLoopReturningNewArray2 = (arr) => {
	let newArray = [];
	for (let i = 0; i < arr.length; i++) {
		arr[i].favortiteColor = 'Red';
		newArray.push(arr[i]);
	}
	console.log('arr:', arr);
	console.log('newArray:', newArray);
	return newArray;
};

let aForLoopFiltering = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].gender === 'female') {
			console.log(arr[i]);
		}
	}
};

let aForLoopAggregator = (arr) => {
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		counter += arr[i].age;
	}
	console.log(counter);
};




// aForLoop(people);
// console.log(aForLoopReturningNewArray(people));
// aForLoopReturningNewArray2(people);
// aForLoopFiltering(people);
// aForLoopAggregator(people);


// ====== Declarative

let iteratorAccesor = (arr) => {
	arr.forEach( x => {
		console.log(x.name);
	});
};

let iteratorProjector = (arr) => {
	return arr.map( x => {
		console.log(x);
		return x;
	});
};

let iteratorProjector2 = (arr) => {
	let newArray = arr.map( x => {
		return {
			name: x.name,
			age: x.age,
			gender: x.gender,
			favortiteColor: 'red'
		}
	})
	console.log('arr:', arr);	
	console.log('newArray:', newArray);
};

let iteratorFiltering = (arr) => {
	return arr.filter( x => {
		return x.gender === 'female';
	});
};

let iteratorAggregator = (arr) => {
	return arr.reduce((prev, curr) => {
		return prev + curr.age;
	}, 0);
};

// iteratorAccesor(people);
// console.log(iteratorProjector(people));
// iteratorProjector2(people);
// console.log(iteratorFiltering(people));
//console.log(iteratorAggregator(people));/

// ======== chaining methods

let chainMethods = (arr) => {
	return arr.filter( x => {
		return x.gender === 'male';
	}).map( x => {
		return { ...x, favoriteColor: 'red'}
	}).map( x => {
		console.log(x);
		return x;
	}).reduce((prev, curr) => {
		return prev + curr.age;
	}, 0);
};

//console.log(chainMethods(people)); 