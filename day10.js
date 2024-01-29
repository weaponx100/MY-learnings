let win=0;
let lose=0;
let tie=0;
const choices=document.querySelectorAll(".img");

let computersMove=(choiceid,)=>{
    let move=null;
     let num=Math.random()*3;
     if(num<1&&num>0){
         move="rock";
     }
     else if(num>1&&num<2){
       move="paper";
     }else{
         move="scissors";
     }
console.log(move);

if(move==choiceid){
    alert("TIE===> computer choose "+move);
    tie++;
    let t=document.querySelector("#tie");
   console.log(t.innerText=tie);
}
else if((move=="paper"&&choiceid=="rock")||(move=="rock"&&choiceid=="scissors")||(move=="scissors"&&choiceid=="paper")){
    alert("LOSE===> computer choose "+move);
    lose++;
    let t=document.querySelector("#lose");
   console.log(t.innerText=lose);
}
else{
    alert("WIN===> computer choose "+move);
    win++;
    let t=document.querySelector("#win");
   console.log(t.innerText=win);
}

}

choices.forEach(choice => {
    choice.addEventListener("click",()=>{
     let choiceid=choice.getAttribute("id");
        console.log("clicked "+choiceid);
computersMove(choiceid,);

    })
    
});