const adventurer = {
    name: "Mona",
    hitpoint: 95,
    damage: 6,
    leftoverHitpoint: function(takeDamage){
        return this.hitpoint-=takeDamage;
    }
}

const ogre = {
    name:"Tanus",
    hitpoint:100,
    damage: 5,
    leftoverHitpoint: function(takeDamage){
        this.hitpoint-=takeDamage;
    }
}

//get random number for Ogre random damage number
function getRandInteg (min,max){
return Math.floor(Math.random()*(max-min))+min;
}

//game will start by calling leftoverhitpoint function of each player
// by considering otherplayer damage amount as takedamage
//i still don't know how each player hitpoint is get updated????
function gameOn (playerOne,playerTwo){

let playerTwoDamageAmount = getRandInteg(0,playerTwo.damage);

playerOne.leftoverHitpoint(playerTwoDamageAmount);
playerTwo.leftoverHitpoint(playerOne.damage);

console.log(playerOne.name+" hit "+playerTwo.name+" for "+playerOne.damage+" damage. "+playerTwo.name+" has "+playerTwo.hitpoint+" hitpoint left ");
console.log(playerTwo.name+" hit "+playerOne.name+" for "+playerTwoDamageAmount+" damage. "+playerOne.name+" has "+playerOne.hitpoint+" hitpoint left ");

}

//introducing while loop to have a game continue untill one player reach 0 hitpoint

while(adventurer.hitpoint>0 && ogre.hitpoint>0){
    gameOn(adventurer,ogre);
}

if(adventurer.hitpoint > 0){
    console.log(adventurer.name+ " is the winner");
}
else{
    console.log(ogre.name+" is the winner.");
}
