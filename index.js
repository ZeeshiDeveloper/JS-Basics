//this is my first java script code
console.log('Hello World')

let name = 'Zeeshan';
console.log(name);
                            // VARIABLES
console.log(`
VARIABLES`)
//Rules for naming variables 
//the variable name cannot be a reserved keyword name like if let etc    // let if = 'zeeshan'
// And variable name also should be meaningfull like a, b, x, y, a1, b1 thess are not meaning full variables
//variable name cannot start with a number like (1name) etc
//variable name cannot contain  spaces and hyphen (-)
//long name should be written in camel notation
// we can also define multiple variables in on line
let firstName = 'Zeeshan', lastName = 'Ali';  
console.log(firstName,lastName)

                            // CONSTANT
console.log(`
CONSTANT`)
let intrestRate = 0.5;
intrestRate = 1;
console.log(intrestRate);
// if you change value of variable the last updated value would be should and previous value would be terminated
const intrestPrice = 0.5;
// intrestPrice = 1;
console.log(intrestPrice);
// but if you use constant then you cant change its value

                            //PRIMITIVE/VALUE TYPEs
//what kind of value you can assign to the variable String,Number,boolean,undefined,null
let myName = 'Zeeshan';       //string literal
let age = 20;                 //Number Literal
let isApproved = true;       //Boolean
let fname = undefined;       //if you dont give it value it also undefined
let lNmae = null;

// Another Example of VAlue type and refrence type
// Value Type
console.log(`
Value Type`)
let objt = 10;
function increace(objt){
    objt++;
}
increace(objt)
console.log(objt)

// Refrence type
console.log(`
Refrence type`)
objt = {value : 10};
function increace(objt){
    objt.value++;
}
increace(objt)
console.log(objt)



//REFRENCE TYPE   Objects, Array and Functions
console.log('REFRENCE TYPE')
// Objects       //{}  this bracket is object literal
 let person = {
    perName: 'Waqas',
    perAge: '22'
};
// to change the name we have two properties
// 1 : Dot Notation
person.perName = 'Adeel';

// 2: Bracket Notation
// person['perName'] = 'Ahmad';  //2.1
let selected = 'perName';           //2.2
person[selected] = 'Ahmad';
console.log(person);
console.log(person.perName);

// Array     //[] this bracket is array literal
let selectedColor = ['red', 'green'];
selectedColor[2] = 'yellow'
selectedColor[3] = 1
console.log(selectedColor);     //each item have index number that determines the position of element in the array 
console.log(selectedColor[1]);   //color in index one is green and index 0 is red

console.log('Length of Array is ',selectedColor.length);   // this property returns number of items and length in a array

// Another EXample of Array
const numbers = [1, -1, 2, 3];
let sum = 0;
for(let n of numbers)
    sum += n;
console.log('Sum = ', sum)
// OR
const add = numbers.reduce(
    (accumilator, currentValue) => accumilator +currentValue
);
console.log("(Using Reduce function) Sum = ", add)

// Filtering an Array
console.log('Filtering an Array');
const filtered = numbers.filter(n => n >= 0);  
console.log('Filter Array (PositiveValus) = ' , filtered)
//filter function is use in reasl life like if you search opened resturents of all available returents available in array then if filter the timing of all resturents and display all opened resturents

// Mapping An Array
console.log('Mapping An Array')
const mappedItems= numbers
        .filter(n => n >= 0)
        .map(n => ({value: n}))
        .filter(obj => obj.value > 1)
        .map(obj => obj.value);
console.log('Mapping an array = ', mappedItems)

// FUNCTIONS
console.log('FUNCTIONS');
//This function performing a task
console.log('This function performing a task')
function greet(friendName, fatherName){       //friendName is parameter of this function
    console.log('Hello ' + friendName + ' ' + fatherName)
}
greet('Mohsin','Shahid')    //mohsin is argument
greet('Hassan','Shahid')    //hassan is argument

//This Function Calculating a value
console.log('This Function Calculating a value')
function square(numberSquare){
    return numberSquare * numberSquare;
}
console.log(square(3))   //here 2 functions defines one is cnsole and second is square

// Bitwise OPerator
console.log(`
BITWISE OPERATOR`)
// console.log(1 || 2); //logical OR
console.log('Bitwise OR = ' , 1 | 2); //bitwise OR
// 1 = 00000001
// 2 = 00000010
// Bitwise Or(Plus) = 00000011   (that is equal to 3)

console.log('Bitwise AND = ' , 1 & 2); //bitwise AND
// 1 = 00000001
// 2 = 00000010
// Bitwise Or(mul) = 00000000   (that is equal to 0)

// Real Life Example
// Read(00000100 = 4), Write(00000010 = 2), Execute(00000001 = 1)
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
let message = (myPermission & readPermission) ? 'Yes' : 'No';
console.log(message)

// Let vs Var
//var => function-scoped
//let, const => block-scoped
function start(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    // console.log(i)    if we use var instead of let these two console will work bcz var is global/function scoped
}
start();

// Strings
console.log(`
String`)
// String Primitives
const stringPrimitives = 'This is String Primitive';
console.log(stringPrimitives);

// string Object
const stringObject = new String('typeof this string is object');
console.log(stringObject);

// escape Notations
console.log('Escape Notation in String')
console.log('This is how using \'Single Quote\'')
console.log('This is how using \"Double Quote\"')
console.log('This is how using \\BackSlash')
console.log('This is how using \tTab')
console.log('This is how using \nNew Line')

// Template Literals
console.log(`
Template Literals`)
//object Literal  : {}
// Boolean Literal : true, false
// string Literal : '' , ""
// Template Literal : ``

// in template literal there is no need to use \n for new line just press enter for new line
const templateLiteral = `This is how using 
Template literal for new line. We can use every notation by using original
sign like 'Single quote', "Double Quote" etc.`;
console.log(templateLiteral);

console.log('Another Example of template Literal')
const templateName = 'Waqas';
const anotherTemplate = `
Hi ${templateName},

Thank you for Loading my mailing list.

regards,
Zeeshan.`;
console.log(anotherTemplate);

// Using this Keyword here
console.log(`
            Using this Keyword here`)
const video = {
    title: 'a',
    tags : ['a','b','c'],
    showTag(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);
    }
};
video.showTag()

// Local vs Global Scope
console.log(`
Local vs Global Scope`)
const messageGlobal = `this is global variable and can use everywhere inside code`
function localStart() {
    const messageLocal = `This message only use inside this function block
so this have local scope`;
    console.log(messageLocal)
    console.log(messageGlobal)
}
localStart()
// console.log(messageLocal)     local variable can only use inside block where it is defined


// Getters And Setters
console.log(`
Getters And Setters`);
// by  using get get rid of using functionName() inside console use functioName like an property not like a function
// getter => access properties
// setter => change and mutate them

const per = {
    perFirstname : 'Mosh',
    perLastname : 'Hamedani',
    get fullName(){
        return `${per.perFirstname} ${per.perLastname}`
    },
    set fullName(val){
        const part = val.split(' ');
        this.firstName = part[0];
        this.lastName = part[1];
    }
}

per.fullName = 'Zeeshan Ali'
// console.log(per.fullName())
console.log(per.fullName)   //by using get before func name inside per object it access fullname like a property not like a function
console.log(per) //whenever you want to change full name you can use setter property


// Loops
console.log(`
Loops`)
// For
console.log("For Loop");
for(let i = 1; i <= 5; i++){
    console.log('let i = 1; (intialExpresion) , i <= 5; (Condition) and i++ (incrementExpresion)',i)
}
console.log(`
Reverce for loop`)
for(let i = 5; i >= 1; i--){
    console.log('For Loop in reverse Order',i)
}
console.log(`
Odd number `)
for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0) console.log(i);   //if the reminder of i/2 is not 0 that means i is an odd number   
}
console.log(`
Even number `)
for(let i = 1; i <= 5; i++){
    if(i % 2 == 0) console.log(i);   //if the reminder of i/2 is equal to 0 that means i is an even number   
}

// If-else Statment
console.log(`
If-else Statement `)
//Hour
//If hour is betweeen 6am to 12pm: Good Morning!
//If hour is betweeen 12pm to 6am: Good Afternoon!
//Otherwise: Good evening!

let hour = 10;
if(hour >= 6 && hour < 12)
    console.log('Good Morning!')
else if(hour >= 12 && hour < 17)
    console.log('Good Afternoon!')
else if(hour >= 17 && hour < 21)
    console.log('Good Evening!')
else
    console.log('Good Night!')


console.log(`
Cloning an Object `)
const objectClone = {
    cloneName : 'Zeeshan',
    cloneAge : '22',
    cloneFunc(){
        console.log('Clone Function')
    }
}
console.log('objectclone = ', objectClone);    
//If you want to take all properties of objectCLone object so we have different metheds
// Method 1
const cloneHere = Object.assign({},objectClone);
console.log('cloneHere = ', cloneHere);
// Method 2
const anotherCloneMethod = {...objectClone}    //... this is spread operator 
console.log('anotherCloneMethod = ', anotherCloneMethod);


//Object-Oriented Programing in JavaScript
console.log(`
Object Literals {} is the way to define a object`)
let circle = {
    radius : 1,
    location:{
        x:1,
        y:1
    },
    draw: function(){
        console.log('draw');
    }
};
circle.draw();

console.log(`
we have two move ways to define an object
1. Factory Function`)
function createCircle(radius){
    return{
        radius,
    draw: function(){
        console.log('draw using factory function');
    }
    };
}
circle = createCircle(2)
circle.draw();

console.log(`
2. Constructor Function`)
function Circle(radius){      //first word of constructor function should be uppercase
    this.radius = radius,
    this.draw = function(){
            console.log('draw using COnstructor Function')
        }   
}
const anotherCircle = new Circle(3)
console.log('Radius : ',anotherCircle.radius);
anotherCircle.draw()
//constructors
// new String(); this is built in string constructor but instead of this we are using string literals like '',"",``


// refrence type and value type call
console.log(`
refrence type and value type call`)
console.log(`1. value type call`)
let x = 10;            //premitive x
let y = x;         //premitive y

x = 20;
console.log('x = ',x);
console.log('y = ',y);
console.log(`I changed the value of x and y equals to x but value of y dont change
because x and y is completely independent to each other and value of x store inside it and assign to y`)

console.log(`
2.Refrence type call`);
let a = { value:10 };
let b = a;

a.value = 20;
console.log('a = ', a);
console.log('b = ', b);
console.log(`The value of a and b  is same now whenever I changed the value of a
because I make 'a' an Object and value of object not store in 'a' but it store in memory
and addres of that memory location store inside 'a' so when we copy 'a' into 'b' then address and refrence would be copied`)

console.log(`
Conclution : Premitives are Copied by Value & Objects are copied by refrence`)

// Adding or Removing properties
console.log(`
Adding or Removing properties`)
console.log(`Adding properties :`)
function Circle1(radius){      //first word of constructor function should be uppercase
    this.radius = radius,
    this.draw = function(){
            console.log('draw using COnstructor Function')
        }   
}
const circle1 = new Circle1(4);
circle1.location1 = { x: 4, y: 4}  //location added by using dot property
console.log('Location added by using dot property')
console.log(circle1)

// circle1.center-location = {x:1}     this type of case we use bracket notaton when preperty name is special
const propertyName = 'center-location';
circle1[propertyName] = {x:5};
console.log('propertyName added by using Bracket property')
console.log(circle1)

console.log(`
Delete Property :`)
delete circle1.location1;
console.log('Location deleted by using dot delete property property')
console.log(circle1);

delete circle1[propertyName];
console.log('propertyName deleted by using Bracket delete property property')
console.log(circle1);

// Enumirating Properties
console.log(`
Enumirating Properties`)
// using previus construction function here
console.log(`To enumirate all the members in an object we can use 'for in loop'.`) 
for(let key in circle1){
    if(typeof circle1[key] !== 'function')
    console.log(key, circle1[key])
}
console.log(`To check the axistance of the property in a method then use 'in' operator.`)
if('radius' in circle1)
    console.log('Circle has Radius.')