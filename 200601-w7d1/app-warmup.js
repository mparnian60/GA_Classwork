const numbers = [1,2,3,4,5,155,6,7,8,9,10];

function sum(numberArray){
    let total =0;
    numberArray.forEach((number)=>{
        total += number;
    });

    return total;
};

console.log(`Sum: ${sum(numbers)}`);

function findMax(numberArray){
    let max = 0;
    numberArray.forEach((number)=>{
       if(number > max){
           max = number;
       };
    });

    return max;
}

console.log(`Max is: ${findMax(numbers)}`);

function countEven(numberArray){
    let even = 0;
    numberArray.forEach((number)=>{
        if(number % 2 === 1){
            even ++;
        };
     });

     return even;

}

console.log(`Count of even is: ${countEven(numbers)}`);

