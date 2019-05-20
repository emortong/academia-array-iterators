/*
    Get the names of the billionaires that are in their 20s
*/
var billionaires = require('./billionaires.json');
	let edad = billionaires.map( x => {
        if(x.demographics.age >=20 && x.demographics.age <30) {
           return x.name;  
        }        
      } 
    )
/*let
    create a new object with the billionairse year, name and worth rounded to the newarest integer
    {
        year: 1996,
        name: Bernardo Garza Sada,
        worth: 2
    }
*/
let roundedWorth = billionaires.map(x => {
    console.log ({
    year: x.year,
    name: x.name,
    wealth: Math.round(x.wealth["worth in billions"])
    })   
});

/*
    sum the rounded worth of all the billionaires
*/
let aggregatedWorth = billionaires.reduce((prev,curr)=>{
   return prev + Math.round (curr.wealth["worth in billions"]);
},0);
console.log(aggregatedWorth);


let richest = ;
console.log(aggregatedWorth)

/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = null

/*
    find the poorest billioanire, make sure the result is in an array
*/

let poorest = null;

/*
    make a new array containing the richest and the poorest billionaire
*/

let richAndPoor = null;

//module.exports = {
   // twentyYearOldBillionaires,
    //roundedWorth,
    //aggregatedWorth,
   // richest,
   // poorest,
   // richAndPoor
//}