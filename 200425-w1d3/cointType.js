//set the value of the dollars
const cents = 11.5; // 11.5
// function for the calculation
function calculateCoinChange(cents) // cents are passed as a parameter
{
  //instead of an standard array we are using an array of object of coins we types and values.
    const coinTypes = [          
        {type: "Two Dollars",   value:  2},
        {type: "One Dollar",    value:  1},
        {type: "Fifty Cents",   value: .50},
        {type: "Twenty Cents",  value: .20},
        {type: "Ten Cents",     value: .10},
        {type: "Five Cents",    value: .05},
        ];
  //empty string will be used to complete the sentence.
    let coinString = "";
  // We will loop through the array of coin objects
    for (let i = 0; i < coinTypes.length; i++) {
        let allOfTypeFound = false; // all of type found will be used to break the loop.
        let countOfCoinType = 0; // start the count at 0.
      // start of the while loop with the condition that all of type found is !not the previous boolean.
        while(!allOfTypeFound)
        {            
          //if statement
            if(+cents.toFixed(2) - coinTypes[i].value >= 0)
            {
              //
                cents -= coinTypes[i].value;
                countOfCoinType++;
            }
            else
            {
              // once we hit else the state of allOfTypeFound will change to true.
                allOfTypeFound = true;
            }            
        } // end of while loop here.        
      // if countOfCoinType is greater than 0 is our condition here.
        if(countOfCoinType > 0 )
        {
            coinString += countOfCoinType + " * " +  coinTypes[i].type; // coin string is the value then we have the string concatenation with the dollar type and will run again.
            if(coinTypes[coinTypes.length -1].type !== coinTypes[i].type) 
            {
              // this line will check the condition of the type and add a , at the end e.g. 5 *Twoo DOllars "," 1 * one dollar
                coinString += ", ";
            }
            else
            {
              // final portion of string.
                coinString += ". That's the best we can do!";
            }
        }       
    }
// return the value of coinString
    return coinString;
}
let centsUsed = calculateCoinChange(cents); //  we are calling on the complete function above with the cents e.g 11.5 as the argument.
console.log("Cents used in change: " + centsUsed); // final console.log printing out the coins used. from line 55.