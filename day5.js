function p(msg){
    console.log(msg);
}
p("hello");

const x=(a,b)=>{
    p(a+b);
};
x(3,4);

//practice question
function vowel(str){
    let counter=0;
    for(let i of str){
           if(i==="a"){
            counter++;

           }
           if(i==="e"){
            counter++;

           }
           if(i==="i"){
            counter++;

           }
           if(i==="o"){
            counter++;

           }
           if(i==="u"){
            counter++;

           }
           else{
            p("no vowel found");
           }

    }
    p(counter);
}
vowel("europian is doing nothing in America");

//for each loop
p("for each loop");
let arr=[4,5,6,7,8,9,0];
arr.forEach((element) => {
   p(element*element); 
});
 
//map method
let newarr=arr.map((elements)=>{
    return (elements**elements);
});
p(newarr);

//filter method
let neww=arr.filter((elements)=>{
    return (elements%3==0);
});
p(neww);

//reduce method

let final=newarr.reduce((pre,curr)=>{
    return pre*curr;
});
p(final);

//practice 
let marks=[87,95,63,98,99,12,37,86,90.2];
let highm=marks.filter((elements)=>{
    return elements>90;
});
p(highm);

//practice 2
let n=5;
let array=[];

function createarr(n){
 
         for(let i=1;i<=n;i++){
            array[i]=i;

         }
return array;
}
array=createarr(10);
p(array);
let sum=array.reduce((current,previous)=>{
return current+previous;
});

let pro=array.reduce((current,previous)=>{
    return current*previous;
});
p("sum is = "+sum+" product is = "+pro);
