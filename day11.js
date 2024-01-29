class animal{
  
constructor(name){

    this.name=name;
    console.log("animal class used "+ this.name+" for animal.");
}


}
class tiger extends animal{
  
        constructor(color){
            super();
            this.color=color;
            console.log(this.color);
        }
}



let cat=new animal("meow");

let lion=new tiger("black");