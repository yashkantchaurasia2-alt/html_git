// const form=document.querySelector("form")
// form.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     console.log("button clicked")
// })
//  var a=3453
//  let b=456;

//  console.log(a)
//  console.log(b)

//  function print(){
//     console.log("inside fn")
//  }
 
//  print()

// console.log("This is the beginning of the code.")
// setTimeout(() =>{console.log("After 2 seconds")},2000);
// console.log("This is the end of the code.")


// setTimeout(()=>{console.log("Tring tring tringg, times up")},5000)

// const interval=setInterval(()=>{console.log("Printing at every twoo seconds...")},2000)
// console.log(interval)

// const interval2=setInterval(()=>{console.log("Printing at every twoo seconds...")},2000)
// console.log(interval2)

// const interval=setInterval(()=>{console.log("Printing at every twoo seconds...")},2000)
// setTimeout(()=>{clearInterval(interval)},10000)

// const timeout=setTimeout(()=>{console.log("after 2 seconds...")},2000)
// clearTimeout(timeout)

// let count=0;
// const value=setInterval(()=>{
//     count+=1
//     console.log(count)
//     if(count===10){
//         clearInterval(value)
//     }
// },1000)

// console.log("first line")
// setTimeout(() => {
//     console.log("inside timeout")
// },0);
// console.log("last line")

// console.log("starting homework")

// setTimeout(() => {
//     console.log("homework completed");
//     console.log("dinner is ready");
//     setTimeout(() => {
//         console.log("dinner done");
//         console.log("getting ready to go out");
    
//         setTimeout(() => {
//            console.log("going out") 
//         },1000);
//     }, 1500);
// }, 2000);

// function finishhomework(callback){
//     console.log("starting homework...");
//     setTimeout(()=>{
//         console.log("homework completed");
//         callback();
//     },2000);
// }
// function eatdinner(callback){
//     console.log("dinner is ready")
//     setTimeout(() => {
//       console.log("dinner is done")  
//     },1500);
// }
// function goOut(){
//     console.log("getting to go out");
// }
// finishhomework(()=>{
//     eatdinner(()=>{
//         goOut();
//     });
// })

// const p=new Promise((resolve, reject) => {
//     console.log("I promise to do my homework by tomorrow.");
//     setTimeout(() => {
//         const didhomework=true;
//         if(didhomework){
//             resolve("i completed my homework and submitted it.")
//         }
//         else{
//             reject("I forgot to do my homework.")
//         }
//     }, 2000);
// })
// console.log("waiting for the homework to finish...")
// console.log(p);

// p.then((a)=>{
//     console.log(a);
// })
// .catch((err)=>{
//     console.log(err);
// })