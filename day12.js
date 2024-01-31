// function hello(){
//     console.log('hello');

// }
// setTimeout(hello,5000);
// //callback hell
// function getdata(data,nextdata){
//      setTimeout(()=>{
//         console.log("data ",data);
//         if(nextdata){

//             nextdata();
//         }


//      },2000);

// }

// getdata(1,()=>{
//     getdata(2);
// });

//promise

// let promise= new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     resolve(123);
// });

// function getdata1(dataid,nextdata){
// return new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         console.log("done",dataid);
//         reslove("success");
//         if(nextdata){
//             nextdata();
//         }
//     },5000);
 
// });


// }


//then catch 

// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("reolved");
//         resolve("success");
//     });
// };

// let promise=getpromise();
// promise.then(()=>{
//     console.log("done");
// });

// const getpromise2=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log(" not reolved");
//         reject("failed")
//     });
// };
// let promise2=getpromise2();
// promise2.catch(()=>{
//     console.log(" not done");
// });


//promise chaining

// function aysnc1(){
//     return new Promise((reslove, reject)=>{
//       setTimeout(()=>{  
//         console.log("data 1");
//         reslove("done");

//     },2000);
// });
// }
// function aysnc2(){
//     return new Promise((reslove, reject)=>{
//       setTimeout(()=>{  
//         console.log("data 2");
//         reslove("done");

//     },2000);
// });
// }

// console.log("fetching data 1");
// aysnc1().then((res)=>{
//     //operation
//     console.log("fetching data 2");
//     aysnc2().then((res)=>{
//         //operation
       
//     });
// });

// async await 

function weatherdata(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          console.log("data");
          resolve("ok");
          
      },2000);

    });
}

async function data(){
    await weatherdata();
    await weatherdata();
}
