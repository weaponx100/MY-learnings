let newb=document.createElement("button");
newb.innerText="click me";

newb.style.color="white";
newb.style.backgroundColor="red";

let ar=document.querySelector("body");

ar.append(newb);


let nwp=document.createElement("p");
nwp.setAttribute("class","para");
nwp.innerText="hello";
nwp.style.color="white";
ar.append(nwp);
console.dir(nwp);
console.log(nwp);