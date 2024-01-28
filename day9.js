let boxes=document.querySelectorAll(".container");
let reset=document.querySelector("#reset");

const winarr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let trun0=true;


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
      
        if (trun0===true && box.innerText!="X"){
           
        box.innerText="0";
        trun0=false;
        box.style.color="yellow" ;
            
        }else if(box.innerText!="0"){
            box.innerText="X";
            trun0=true;
            box.style.color="green" ;
          
        }
  
checkwinner();
    });
});
let checkwinner=()=>{
for(let val of winarr){
    let val1=boxes[val[0]].innerText;
    let val2=boxes[val[1]].innerText;
    let val3=boxes[val[2]].innerText;
console.log(val[0],val[1],val[2]);
console.log(boxes[val[0]].innerText,boxes[val[1]].innerText,boxes[val[2]].innerText);

if(val1===val2&&val2===val3&&val1!=""){
    alert("winner is "+val1);
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }
    console.log("clicked reset");
};
}

}


reset.onclick = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }
    console.log("clicked reset");
};


