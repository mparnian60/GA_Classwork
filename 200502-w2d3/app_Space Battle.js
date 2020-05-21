class Ship{
    constructor(hull,firePower,accuracy){
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
        this.alive = true;
    }
    //get the value of the attack
    attack(){
        const randomAccu= Math.random();
        if(randomAccu>=this.accuracy){
            return (this.firePower*randomAccu).toFixed(2);
        }
        return 0;
    }
    //calculate the amount of damage
    damageTaken(damageAmount){
        this.hull -= damageAmount;
        if(this.hull<=0){
            //means that's end of the game
            this.alive = false;
        }
    }
}

class Aliens extends Ship{
    constructor(hullMin,hullMax,fPowerMin,fPowerMax,accMin,accMax){
        super(0,0,0);
        this.hull = Math.floor(Math.random()*(hullMax-hullMin)+hullMin);
        this.firePower = Math.floor(Math.random()*(fPowerMax-fPowerMin)+fPowerMin);
        this.accuracy = (Math.random()*(accMax-accMin)+accMin).toFixed(2);
    }
}

//make game manager
class GameMan {
    constructor(alienCou){
    this.player1 = new Ship(20,5,0.7);
        //that makes the array of aliens, each alien consists of objects
    this.alien = [];
    //act like the while loop
    this.gameAct = true;
    for(let i=0; i<alienCou;i++){
        this.alien.push(new Aliens(3,6,2,4,0.6,0.8));
    }
    }  
    attackAllien(currentAllien){
        console.log("Alien hull is "+currentAllien.hull);
        console.log("play1 hull is "+this.player1.hull);
        const playerStrike = this.player1.attack();
        console.log("player1 hit for "+playerStrike)
        currentAllien.damageTaken(playerStrike);
    
    }
    update(){
        //this starts from the last allien in the array
        let currentAllien = this.alien[this.alien.length-1];
        console.log(currentAllien);
        this.attackAllien(currentAllien);
        //this is the main portion of the game, this will handle alien & person attacking
        if(!currentAllien.alive){//current alien is false
            this.handleAllienDeath();// handleAllienDeath method needs to come here
        }else{
            this.alienStrike();
            }
        //if player1 loses, game is over and alien win
        if(this.player1.alive === false){
            console.log("Game over, the aliens win");
            this.gameAct = false;// to come out of the game or finish the game
        }
        //if all alien (alien .length) loss, then player1 win
        if (this.alien.length === 0){
            console.log("No more aliens left, Player one won");
            this.gameAct = false;// to come out of the game or finish the game
        }
    }
    //this will handle alien death which will remove dead alien from the array
    handleAllienDeath(){
        this.alien.pop();
        console.log("Alien died and "+this.alien.length+ " left.");
    }
    //this method calls the current alien to attack, when alien dies, next alien become current alien
    alienStrike(currentAllien){
        const alienStrike = currentAllien.attack();
        console.log("Alien hit for "+alienStrike);
        this.player1.damageTaken(alienStrike);
    }
}

const game = new GameMan(6);
game.update();