function isSorted(arr){
    // this function accepts an array of numbers as input
    // it returns true or false based on whether the elements are in order from smallest to largest
}


function  isPalindrome(str){
    let reverseStr = "";

    const strArray = str.split("");
    // console.log(strArray.length);
  

    for(let i=strArray.length-1; i>=0; i--){
        console.log(strArray[i]);
        reverseStr = reverseStr + strArray[i];
    }

    return reverseStr;
    // console.log("reverse Strin is" ,reverseStr);
    // this function accepts a string as input
    // it will return true or false based on whether the string is the same forwards and backwards
}

function reverseArray(arr){
    // this function accepts an array as input
    // it will return a backwards version of the same array
    // Challenge mode: Avoid making a new array, just modify the one you're given
}

isPalindrome("Hello");