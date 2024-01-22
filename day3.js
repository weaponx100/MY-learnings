//for of loop
let abc ="subham swain";
let length =0;
for(let i of abc){
  length ++;
}
console.log("letter length =",length);

//for in loop
let student={
    name:"subham",
    cgpa:9.5,
    roll:102,

}

for(let i in student){
    console.log(i,"=",student[i]);
}
//practice
for(let i=0;i<=100;i++){
    if(i%2==0){
    console.log(i);}
    else{
        console.log("odd");
    }
}
//string interpolation
let strx=`hello my age is ${2024-2003}`;
console.log(strx.toUpperCase());