// let a=prompt("enter the number");
// let b=prompt("enter the power");

// alert("result is "+ a**b);

let marks=prompt("enter your marks");
switch(true){
    case (marks<=100&&marks>=90):
        alert("your grade is A");
        break;
        case marks<=89&&marks>=70:
        alert("your grade is B");
        break;
        case marks<=69&&marks>=60:
        alert("your grade is C");
        break;
        case marks<=59&&marks>=50:
        alert("your grade is D");
        break;
        case marks<=49&&marks>=0:
        alert("your grade is F");
        break;
        default:
            alert("no marks entered");

}