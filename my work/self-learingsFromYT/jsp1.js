let rect=document.querySelector("#rect");




function p(msg){
    console.log(msg);

}

window.addEventListener("mousemove",(details)=>{
    let valx=gsap.utils.mapRange(0,window.innerWidth,50,window.innerWidth-50,details.clientX);
    let valy=gsap.utils.mapRange(0,window.innerHeight,50,window.innerHeight-50,details.clientY);
p(details.clientX+" "+ valy);
gsap.to(rect,{
     left:valx +"px",
     top:valy+"px",
     ease:"power4",
     height: 30+"px",
    width: 30+"px",
});

});

rect.addEventListener("click",()=>{

  gsap.to(rect,{
    left: window.innerWidth / 2 + "px",
        top: window.innerHeight / 2 + "px",
        ease: "power1",
  })

})


