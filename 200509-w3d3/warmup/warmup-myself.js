const games = [
    { result: "Win", score: [45, 27] } , 
    { result: "Loss", score: [28, 19] } ,
    { result: "Win", score: [32, 12] } , 
    { result: "Win", score: [14, 7] } ,
    { result: "Win", score: [52, 28] } , 
    { result: "Loss", score: [12, 10] } ,
    { result: "Loss", score: [35, 17] } , 
    { result: "Win", score: [28, 24] } ,
    { result: "Win", score: [35, 20] } , 
    { result: "Loss", score: [9, 6] } 
]

// console.log(games[0].result);
let totalWin = 0;
let totalLose = 0;
const totalRecArrWin =[];
function totalRecord (){
   for(let i=0; i<games.length; i++) {
       if (games[i].result === "Win"){
           totalWin++
           totalRecArrWin.push(games[i].score);
       }else{
           totalLose++;
       }
   }
}
totalRecord();
// console.log("totalWin is " + totalWin+ " and total lose is "+ totalLose);
console.log(totalRecArrWin);

const averagePoints = totalRecArrWin.reduce(reducer);
const reducer = (a,b)=> {a+b};

console.log(averagePoints);
