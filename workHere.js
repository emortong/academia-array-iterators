var billionaires = require('./billionaires.json');

/*
    Get the names of the billionaires that are in their 20s
*/

let twentyYearOldBillionaires = billionaires.filter(x => {
    if (x.demographics.age > 19 && x.demographics.age < 30) {
        return x.name
    };
});

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
        worth: Math.round(x.wealth['worth in billions'])
    }
});
// console.log(roundedWorth);

/*
    sum the rounded worth of all the billionaires
*/

let aggregatedWorth = billionaires.reduce((prev, curr) => {
    return Math.round(prev + curr.wealth['worth in billions']);
}, 0);
// console.log(aggregatedWorth)

/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = billionaires.filter(x => {
    if (x.rank == 1) {
        return x.rank
    }
})

/*
    find the poorest billioanire, make sure the result is in an array
*/

let poorest = billionaires.sort((a, b) => {
    return a.rank - b.rank; 
}).lastIndexOf(billionaires.name)


/*
    make a new array containing the richest and the poorest billionaire
*/

let richAndPoor = [richest,poorest];

module.exports = {
    twentyYearOldBillionaires,
    roundedWorth, 
    aggregatedWorth,
    richest,
    poorest,
    richAndPoor
}