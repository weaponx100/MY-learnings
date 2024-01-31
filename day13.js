const Url="https://cat-fact.herokuapp.com/facts";

const getFact= async () => {
    console.log("getting data.....");
    let response = await fetch(Url);
    console.log(response);
    let data= await response.json();
    for (let d of data){

        console.log(d.text);
    }
};