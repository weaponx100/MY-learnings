
//check if the mouse goes inside rectangle
var rect=document.querySelector("#center");

function p(msg){
    console.log(msg);
}

rect.addEventListener("mousemove",(details)=>{
//  p("mouse");
 //check if the mouse is at left or right of the center
 var rectLoca=(rect.getBoundingClientRect());
//  p(rect.getBoundingClientRect())
//  p(details.clientX-340);

 var insideRecVal=details.clientX-340;
if(insideRecVal<rectLoca.width/2){
    p("left");
    var redcolor=gsap.utils.mapRange(0,170 ,255,0,details.clientX-340);
    p(redcolor);
         gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
           
         });
}
else {
    p("right");
    var redcolor=gsap.utils.mapRange(170 ,340,255,0,details.clientX-340);
    p(redcolor);
         gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},${redcolor},255)`,
            ease:Power4,
           
         });
}
});

rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor:`rgb(255,255,255)`,
        ease:Power4,
       
     });
})

