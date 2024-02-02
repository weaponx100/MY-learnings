document.querySelector("#center").addEventListener("mousemove",(details)=>{
    if(details.clientX%12==0){
    console.log(details.clientX+" " +details.clientY);
    let div=document.createElement("div");
    
    }
});
//throttling decreasing the number of execution of a code 
