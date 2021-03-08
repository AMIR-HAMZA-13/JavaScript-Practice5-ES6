//   1 nong way
// import { text, setText } from './myModule.js'
// console.log(text);

// setText("goodbye From es6")
// console.log(text);

//   2 nong way
// import { message } from './myModule.js'
// console.log(message)


//3 no way
// import { text as message } from './myModule.js'
// console.log(message);




// es6 class 


// class Student {
//     constructor(id,name){
//         this.id = id;
//         this.name = name;
//     }
//     set studentName(name){
//         this.name = name;
//     }
//     get studentInfo(){
//         return this.id + " " + this.name;
//     }
// }

// let s1 = new Student(101, "Anisul Islam");
// console.log(s1.id);
// console.log(s1.name);
// console.log(s1.studentInfo);




// synchronous programming


//   callback and higher order function

// function square(x){
//     console.log(`square of ${x} : ${x*x}`);
// }
// // square(6);

// // const y = square;
// // y(7);


// function higherOrderFunction(num, callback){
// callback(num)
// }
// higherOrderFunction(8, square)


// callback function er kisu udhaharon
// const taskOne = (callback) => {
//     console.log("Task 1");
//     callback();
// };

// const taskTwo = (callback) => {
//     setTimeout(() => {
//         console.log("Task 2. Data Loading");
//         callback();
//     }, 3000);

// };

// const taskThree = (callback) => {
//     console.log("Task 3");
//     callback();
// };

// const taskFour = (callback) => {
//     console.log("Task 4");
//     callback();
// };

// const taskFive = (callback) => {
//     console.log("Task 5");
//     callback();
// };

// const taskSix = () => {
//     console.log("Task 6");
    
// };


// taskOne(() => {
//     taskTwo(() => {
//         taskThree(() => {
//             taskFour(() => {
//                 taskFive(() => {
//                     taskSix(() => {

//                     });
//                 });
//             });
//         });
//     });
// });



// console.log("HI");

// document.querySelector("button").addEventListener('click', ()=>{
//     console.log('button is clicked');
// })

// console.log("Bye")


