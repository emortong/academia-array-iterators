var billionaires = require('./billionaires.json');
 
/*
    Get the names of the billionaires that are in their 20s
*/

/*
let twentyYearOldBillionaires = (billionaires) => { return billionaires.filter( element => {
    if(element.demographics.age > 19 && element.demographics.demographics.age < 30){
        return element.name;
    }
    });
};
*/
arr = []
for(i=0; i<billionaires.length; i++){
    if(billionaires[i].demographics.age > 19 && billionaires[i].demographics.age < 30){
        arr.push(billionaires[i].name)
    }
};

let twentyYearOldBillionaires = arr;

/*
    create a new object with the billionairse year, name and worth rounded to the newarest integer
    {
        year: 1996,
        name: Bernardo Garza Sada,
        worth: 2
    }
*/

let roundedWorth = billionaires.map(x => {
    return {
        year: x.year,
        name: x.name,
        worth: Math.round(x.worth_in_billions)
    }
});

/*
    sum the rounded worth of all the billionaires
*/

let aggregatedWorth = billionaires.reduce((prev, curr) =>{
    return prev + Math.round(curr.wealth["worth in billions"])
}, 0);



// console.log(aggregatedWorth)

/*
    find the the richest billionaire, make sure the result is in an array
*/
D:
let richest = billionaires.filter(x =>{
    return x.rank === 1; 
});

/*
    find the poorest billioanire, make sure the result is in an array
*/
let minrank = billionaires.forEach(x => {
    arr.push(x.rank)
});


let poorest = billionaires.filter(x =>{
    return x.rank === minrank; 
});

/*
    make a new array containing the richest and the poorest billionaire
*/

let richAndPoor = null;

module.exports = {
    twentyYearOldBillionaires,
    roundedWorth,
    aggregatedWorth,
    richest,
    poorest,
    richAndPoor
}