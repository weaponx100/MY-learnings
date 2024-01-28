let boxes=document.querySelectorAll(".container");
let reset=document.querySelector("#reset");

const winarr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let trun0=true;


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
      
        if (trun0===true && box.innerText!="X"){
           
        box.innerText="0";
        trun0=false;
            
        }else if(box.innerText!="0"){
            box.innerText="X";
            trun0=true;
          
        }
  
    box.ariaDisabled=true;
    });
});
let checkwinner=()=>{
if(boxes[0]==X&&boxes[x]==X&&boxes[2]==X){

alert("X winner");

}



}