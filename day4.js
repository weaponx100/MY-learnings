let arry=[1,5,6,"hi",45];
for(let i=0;i<arry.length;i++){
    console.log(arry[i]);
}
for(let number of arry){
    console.log(number);
}

let marks =[45,68,92,63,75,98];
let sum=0;
for(let i of marks){
    sum=sum+i;
}
console.log(`avg is = ${sum/marks.length}`);

//practice question

let price=[250,645,300,900,500];
let counter =0;
for (let i of price){
    
    let discount=(i*10/100);
    console.log(price[counter]=i-discount);
    counter++;
}
console.log("new array is");
for(let j of price){
    console.log(j);
}
//push()

let items=["apple","orange","lemon","litchi","banana","mango"];
items.push("AVOCADO");
console.log(items)

//pop()
let a =items.pop();
console.log(a,"&",items);

let x= items.concat(price);
console.log(x);

//unshift and shift
items.unshift("a");
let ab=items.shift();
console.log(items);

//slice 
let ac=items.slice(3,5);
console.log(ac);

//splice
items.splice(3,2,"avocada","nada");
console.log(items);

//practice 
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
//a shift at first
let ca=companies.shift();
console.log(ca,companies);
//b replace uber with ola
companies.splice(1,1,"Ola");
console.log(companies);
//c amazon at the end
companies.push("Amazon");
console.log(companies);