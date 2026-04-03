// let cars=["BMW","Audi","xuv,","PORCEHE","bently","hyundai"]
// console.log(cars);


// (6) ['BMW', 'Audi', 'xuv,', 'PORCEHE', 'bently', 'hyundai']
// cars.splice(0,1)
// ['BMW']
// cars
// (5) ['Audi', 'xuv,', 'PORCEHE', 'bently', 'hyundai']

// cars.splice("verna","thar")
// []
// cars
// (5) ['Audi', 'xuv,', 'PORCEHE', 'bently', 'hyundai']

// cars.splice(0,1,"kia""verna","thar")
// VM758:1 Uncaught SyntaxError: missing ) after argument listUnderstand this error
// cars.splice(0,1,"kia","verna","thar")
// ['Audi']
// cars
// (7) ['kia', 'verna', 'thar', 'xuv,', 'PORCEHE', 'bently', 'hyundai']

// cars.push("neno")
// 8
// cars
// (8) ['kia', 'verna', 'thar', 'xuv,', 'PORCEHE', 'bently', 'hyundai', 'neno']

// cars.pop()
// 'neno'
// cars.pop()
// 'hyundai'
// cars.pop()
// 'bently'
// cars.pop()
// 'PORCEHE'
// cars.pop(2)
// 'xuv,'


// cars
// (3) ['kia', 'verna', 'thar']
// cars.splice(0,1,"XUV","velar","jeep","porche","BMW","audi","hyundai","neno")
// ['kia']
// cars.push("kia")
// 11
// cars
// (11) ['XUV', 'velar', 'jeep', 'porche', 'BMW', 'audi', 'hyundai', 'neno', 'verna', 'thar', 'kia']

// cars.pop(2)
// 'kia'
// cars
// (10) ['XUV', 'velar', 'jeep', 'porche', 'BMW', 'audi', 'hyundai', 'neno', 'verna', 'thar']

// cars.pop()
// 'thar'
// cars.pop()
// 'verna'
// cars.pop()
// 'neno'
// cars.pop()
// 'hyundai'
// cars.pop()
// 'audi'

// cars
// (5) ['XUV', 'velar', 'jeep', 'porche', 'BMW']
// cars.splice(0,0,"Audi","neno","verna")
// []
// cars
// (8) ['Audi', 'neno', 'verna', 'XUV', 'velar', 'jeep', 'porche', 'BMW']

// let ar =[ 'a','b','c']
// undefined
// let arcopy = ar;
// undefined
// arcpoy

// ar
// (3) ['a', 'b', 'c']
// arcopy
// (3) ['a', 'b', 'c']
// ar.push('d')
// 4
// arcopy
// (4) ['a', 'b', 'c', 'd']


// let Myarray =[["x",null,"o"],["o","x","o"],["x",null,"o"]];
// undefined

// console.log(Myarray)
// VM323:1 
// (3) [Array(3), Array(3), Array(3)]
// 0
// : 
// (3) ['x', '', 'o']
// 1
// : 
// (3) ['o', 'x', 'o']
// 2
// : 
// (3) ['x', '', 'o']
// length
// : 
// 3
//Myarray[0][1]="0"
// '0'
// Myarray[0]
// (3) ['x', '0', 'o']
