class Person {
   constructor (name,eyes,hair){
       this.legs = 2;
       this.hands = 2;
       this.name = name;
       this.eyes = eyes;
       this.hair = hair;
   }
   setHair(hairColor){
       this.hair = hairColor;
   }
   greet(otherPerson){
       console.log("hi "+otherPerson);
   }
   jump(){
       console.log("weee!");
   }
};

const me = new Person("Mona","Brown","Black");
// me.setHair("red");
// console.log(me.hair);
class SuperHero extends Person{
//below is just used if you want to add extra property to new child class
//otehrwise there is no need to call a new constructor, this class read all parent property without any new constructor
    constructor(heroName,heroEyes,heroHair,power){
        super(heroName,heroEyes,heroHair);// it's a defined function, it's a super constructor n which means parent class
        this.power = ['flight', 'superhuman strength', 'x-ray vision', 'heat vision', 'cold breath', 'super-speed', 'enhanced hearing', 'nigh-invulnerability'];
    }
    fly(){
        console.log("Up up fly!");
    }
    jump(){
        super.jump();
        console.log("Great");
        this.fly();

    }
}

const batMan = new SuperHero("clark","Blue","orange",90);
console.log(batMan);
// batMan.fly();
// batMan.jump();

class Pet{
    constructor(name,bread,age){
        this.name = name;
        this.bread = bread;
        this.age = age;
    }
    changeAge(newAge){
        this.age = newAge;
    }
}



const cat = new Pet("Bluey","Persian cat", 5);

// console.log(cat);
// cat.changeAge(8);
// console.log(cat);

