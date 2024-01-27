function p(msg){
    console.log(msg);
}
function pd(msg){
    console.dir(msg);
}
// let a=prompt("enter b to enter dark mode");
// if (a=="b"||a=="B"){
//     window.document.body.style.background="black";
//     window.document.body.style.color="white";
    
// }
let headin=document.getElementsByClassName("a");
pd(headin);
let txt=document.querySelector("div");
txt.innerText=txt.innerText+" from apna college";

let txtbox =document.querySelectorAll(".box");
txtbox.innerText="hell";
p(txtbox);
for(let div of txtbox){div.innerText="hell";}
