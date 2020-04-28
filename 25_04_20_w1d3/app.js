function createCharacterName (name, age, isAus) {
   return {
        name: name,
        age: age,
        isAus: isAus
    };
}

function printInfor (character) {
    console.log("character name is "+ character.name+ " and age is "+ character.age +" and lives in Au? "+ character.isAus);

}

let blinky = createCharacterName ("blinky",26,true);
let skippy = createCharacterName ("skippy",13,false);
let bingo = createCharacterName ("bingo",3,true);

printInfor(blinky);
printInfor(skippy);
printInfor(bingo);