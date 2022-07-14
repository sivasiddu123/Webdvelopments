// var s1=90;
// var s2=96;
// if (s1<=s2 || s1==s2){
// console.log("hello");--------------boolean operaters (&& ||)
// }
// else{
//     console.log("no man");
// }

// console.log(1>2 ? true:false);---------terinary operaters
// var weight=parseFloat(prompt("enter your age"));
// switch(weight){
    
//     case2:console.log("weight is 2");
//     break;
//     case3:console.log("weight is 3");
//     break;

// }
// var arr1=[3,4,5];
// var arr2=[1,2,...arr1,99]
// var arr3=[...arr1,...arr2]...........arrys(spread operater(unpacking & Concatination))
// console.log(arr3)
//objects{}
// var person={name:"siddu",age:20}
// var person2={...person,location:"hyd"}.......objects(spread operater(unpacking & concatination))
// console.log(person2);
// function call()........................only assigned values are added remaining ignored
// function add(a,b,c){
//     return(a+b+c);
// }
// let numbers=[5,5,5];
// console.log(add(...numbers));

// function add(a,b,c){
//     return(a+b+c);
// }
// var num=[1,2,3,4,5,6,7]
// console.log(add(...num));

// packed by using rest perameters
// function num(...arr){
//     console.log(arr);
// }
// num(1,2,3,4,56)
//   &
    // function num(a,b,c,...arr){
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    //     console.log(arr);
    // }
    // num(1,2,3,4,5,6,7)

    // Destructuring arrays............... 
    // let [a,b,c,d]=[1,2,3,4]
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // Destructuring wrt rest perameters.............
    // let [a,b,c,...rest]=[1,2,3,4,5,6,8];
    // console.log(rest);
    // Destructuring objects...............
    // let {firstname,...rest}={firstname:"siddu",age:24,location:"hyd"}
    // console.log(firstname);
    // console.log(rest);

    // Template Literals(or) Template Strings...................
    // let name="siddu";
    // console.log(`Hello ${name}`);

    // let names= `sum of 4 and 5 is $(4+5)`;
    // console.log(name);
    
    // let person={name:"siddu"}
    // console.log(`my name is ${person.name}`);

    // let man="siddu";
    // console.log(`hello ${man} food morning`);

    // operaters:terinary.............................
//    let s1=90;
//    let output=s1>=100 ? "ok" : "no-way";
//    console.log(output);

//    let w1=20;
//    let w2=30;
//    let put=w1>=w2 ? "ll": "null";
//    console.log(put);
//  operaters:switch statments...................
// let day=20;
// switch(day){
//     case 0:console.log("sunday")
//     break;
//     case 1:console.log("monday");
//     break;
//     case 2:console.log("tday");
//     break;
//     case 3:console.log("weday");
//     break;
//     default:console.log("po");
//     break;
// }
// (or);

// let a=20;
// let b=60;
// let operater="add";
// switch(operater){
//     csae "add":
//     console.log(`a+b = ${a + b}`);
//     break;
//     case "sub":
//         console.log(`a-b = ${a - b}`);
//     break; 
//     default:console.log("po");
//     break;
// }
// function defining (Arrow Functions)................................
// let sum=(a,b,c)=>a+b+c;
// console.log(sum(2,3,4)) ;

// let value=(a,b)=>a===b;
// console.log(value(4,4));

// let lone=(name)=>`hi ${name}`;
// console.log(lone("radha"));

// let mul=n=>n*n;
// console.log(mul(6));

// Factory & Constuction functions..................
// function CreateCar(color,well){
//     return{
//         color,
//         well,
//         start:function(){
//             console.log("started")
//         }
//     }
// }
// let car1=CreateCar("hed","bed");
// console.log(car1);

// function Car(color,well){
//     this.color:color;
//     this.well:well;
//     this.start:function(){
//         console.log("started")
//     }
// }
// let car1=new Car("lk","kl");
// console.log(car1);

//.............Built-in Constructor Functions

// var ss=new Date(1998,4,5);
// console.log (ss.setFullYear(1998));
///This Java Script................

// let car = {
//     color:"Blue",
//     hvhjjhj:"Sdf",
//     start:function(){
//         console.log(this);
//     }
// }
// car.start();

// primitive types:(number,string,boolean,symbol,undefined)
// Objects:(objects,arrays,functions)(muteble)
// let x=10;
// let y=x;
// y=30;
// console.log(x);
// console.log(y);

// Declaring Variable(let,const,var)
// let:initialization is not mandatory
//     variable is re assigned

// ex(let):
// let x=20;
// console.log(x);
// x=39;
// console.log(x)

// ex(const):can't Reassigned
// const x=7;
// console.log(x);
// x=90;
// console.log(x);(not-output)

// let myArray=["ad",2,true];
// myArray.push("pen");
// console.log(myArray);
// console.log(myArray.length);

// function person(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }
// let person1=new person("virat","siddu");
// console.log(person1);
class person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    displayfullname()=>{
        ...
    }
}
let person1=new person("siddu","ram");
console.log(person.prototype);