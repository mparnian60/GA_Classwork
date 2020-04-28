// let details = {
//     name: "Kristyn",
//     age: 98,
//     email: "kristyn@foo.bar"
// }
// details["age"]=1000;
// details["place of birth"]="IRAN";

// // console.log(details.name);
// // console.log(details.age);
// // console.log(details);

// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something",
//     details: function(MonsterDetails){
//         console.log("my name is "+monster.name+" and i like "+monster.color+ " color and i'm a "+monster.type+ " and i'm "+monster.age+" years old.");
//     }
//  }

//  monster.type= "creature";
//  monster.age=6;
// //  console.log(monster.name);
// //  console.log(monster.type);
// //  console.log(monster);
// monster.details();


//Mama cat & Papa cat

let cat1 = {
    name:"mummy",
    bread: "persian cat",
    age: 5
}

let cat2 = {
    name:"daddy",
    bread: "persian cat",
    age: 7
}
 
function combineCat(mama,papa){
    const nameCom= mama.name+papa.name;
    const ageCom = 1;
    const breadCom =mama.bread+"-"+papa.bread;
    const combine = {
        name: nameCom,
        age: ageCom,
        bread: breadCom
    }
    return combine;

}
function test(test1){
console.log("test1", test1);
}

const combinedTest =combineCat(cat1,cat2);

console.log("combinedTest",combinedTest);
test(combinedTest);

