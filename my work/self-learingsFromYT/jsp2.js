document.querySelector("#center").addEventListener("mousemove",(details)=>{
    if(details.clientX%5==0&&details.clientY%3==0){

    console.log(details.clientX+" " +details.clientY);

    let div=document.createElement("div");
    div.classList.add("imgdiv");
    div.style.left=details.clientX+"px";
    div.style.top=details.clientY+"px";
    document.body.append(div);


    let img=document.createElement("img");
if(details.clientX%15==0){
    img.setAttribute("src","https://www.pngmart.com/files/12/The-Secret-Life-Of-Pets-PNG-Picture.png");
    div.appendChild(img);}
else{
    img.setAttribute("src","https://www.pngmart.com/files/12/The-Secret-Life-Of-Pets-Rabbit-Snowball-PNG-File.png");
    div.appendChild(img);
}



    setTimeout(()=>{
        div.remove();
    },3000);
    }
});
//throttling decreasing the number of execution of a code 
