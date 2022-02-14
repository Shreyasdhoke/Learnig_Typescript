// / It's Superset OF JS.
// Benefit is like - easy Code MAnagement
// support ECMAscript,
// we can use datatype,class,interface


export {}
// let a="shreyas";
// console.warn(a);

// Duplicate Identifier 
// export{}

// watch module
// write 
// tsc Aap.ts --watch

//if we use let then it will be converted into var in .js file reason is we have doifferent different browser

//------------------ Types in Typescripts-----------------
// let x:number =10
// console.warn(x)
// let y:string ="10"
// console.warn(y)
// let z:boolean =true
// console.warn(z)

// -----------------------------array---------------------
// array is collection of data type.(either string or int)

// let data = ['shreyas','mario','game',10]
// data.push(1500)
// console.warn(data)
// data[2]='true'


// data:string[]:[list element]


// -----------------------Typed Object------------------

// let users:any={
//     name:'shreyas',
//     age: 22,
//     city:'nagpur'
// }

// console.warn(users)

// interface usertyped{
//     name:string,
//     age:number,
//     city:any     //it cam take any value

// }

// let user:usertyped={
//     name:'shreyas',
//     age: 22,
//     city:'nagpur'
// }

// console.log(user)

// -------------------------------Union--------------------------

// let data:string | number | boolean ="shreyas"
// data=30;
// data=true
// console.warn(data)

// we can multiple value of different arg.



// ----------------------------Function---------------------------------

// function calc(a:number,b?:number):number{       //it cannot return string
//     return b?a+b:a;
// }

// console.warn(calc(100,50))

// -----------------------------------Class--------------------
