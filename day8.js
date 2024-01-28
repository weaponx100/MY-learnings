let btn=document.querySelector("#btn1");
let bdy=document.querySelector("body");
let counter=0;
btn.onclick=()=>{
    counter++;
    if(counter%2!=0){
        bdy.style.backgroundColor="black";
        btn.innerText="Click to turn off DM";
        btn.style.backgroundColor="white";
        btn.style.color="black";
    }
    if(counter%2==0&&counter>0){
        bdy.style.backgroundColor="white";
        btn.innerText="Click to turn on DM";
        btn.style.backgroundColor="black";
        btn.style.color="white";
    }
    
    
};
