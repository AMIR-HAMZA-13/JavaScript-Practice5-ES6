
/*

console.log("welcome");
 //how to create a promise

 const promise1 = new Promise((resolve,reject) =>{
    let completedPromise = false; //true;
    if(completedPromise){
        resolve("completed promise 1");
    }else{
        reject("not conmpleted promise 1");
    }
 });


promise1.then((res) => {
    console.log(res);
}).catch((err)=>{
console.log(err);
});

 console.log(promise1);
 console.log("end");
*/



// promise chaining function diye multipull task make.

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve('task 1 is completed');
    });
};



const taskTwo = () => {
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        resolve('task 2 is completed');
       },2000);
    });
};

const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve('task 3 is completed');
    });
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('task 4 is completed');
           },5000);
    });
};

const taskFive = () => {
    return new Promise((resolve, reject) => {
        reject('task 5 is  not completed');
    });
};


const taskSix = () => {
    return new Promise((resolve, reject) => {
        resolve('task 6 is completed');
    });
};

// taskOne()
// .then((res) => console.log(res))
// .then(taskTwo)
// .then((res) => console.log(res))
// .then(taskThree)
// .then((res) => console.log(res))
// .then(taskFour)
// .then((res) => console.log(res))
// .then(taskFive)
// .then((res) => console.log(res))
// .then(taskSix)
// .then((res) => console.log(res))

// .catch((err) => console.log(err));

// asink await ... .then er poriborte use kora jay.



 //async function callAllTasks(){}
const callAllTasks = async () => {
    try{
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo();
        console.log(t2);
        const t3 = await taskThree();
        console.log(t3);
        const t4 = await taskFour();
        console.log(t4);
        const t5 = await taskFive();
        console.log(t5);
        const t6 = await taskSix();
        console.log(t6);
    
    } catch (err){
        console.log(err);
    }
   
};
    

callAllTasks();