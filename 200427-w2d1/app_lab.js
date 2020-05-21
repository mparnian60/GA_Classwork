// The battle should play out automatically.
// The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.
// The ogre's attacks should have random damage value, but the adventurer should always attack with the same value.
// Whenever someone's hitpoints go below zero, the other person wins the battle.

const Human={
    name: "Mona",
    hitpoint: 100,
    damage: 6,
    //this needs to be a function- how many extra times human can fight
    takeDamage: function(damageTaken){
        console.log(this.hitpoint-=damageTaken);
    }
}

const ogre= {
    name:"BadGuy",
    hitpoint: 87,
    damage: 5
    takeDamage: function(damageTaken){
        console.log(this.hitpoint-=damageTaken);
    }
}

function getRandInteg(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;

    //just gives random number of damage to each player while playing
function fightRound(playerOne, playerTwo){
    // const playerOneDamageAmount = getRandInteg(0,playerOne.damage);//ignore as human doesnt have random number
    const playerTwoDamageAmount = getRandInteg(0,playerTwo.damage);
}

//game starts here
playerOne.takeDamage(playerTwoDamageAmount);//human- we pass the value of math.random
playerTwo.takeDamage(Human.damage);//orge- we pass human damage

while(Human.hitpoint>0 && ogre.hitpoint>0){
    fightRound(Human,ogre);
}


