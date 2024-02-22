// .reduce() = reduce the elements of an array 
//             to a single value

const prices = [5,30,10,25,15,20];

const sumPrices = prices.reduce(sum);
console.log(`your total Rp.${sumPrices.toFixed(3)}`)

function sum(accumulator, elements){
    return accumulator + elements;
}

const grades = [75, 50, 80, 65, 95];
const maximum = grades.reduce(getMax);

console.log(maximum)

const minimum = grades.reduce((accumulator, elements) => {
    return Math.min(accumulator, elements);
})
function getMax(accumulator ,elements){
    return Math.max(accumulator ,elements);
}

console.log(minimum);

const myArray = [
    {
        nama: "iqbal",
        nilai: [5,10]
    },
    {
        nama : "Fachmi",
        nilai: [9,10]
    },
    {
        nama: "Ramadhan",
        nilai: [8,7]
    }];

const initialValue = ["semua nilai"];

const reduces = myArray.reduce((accumulator, elements) => {
                                return [...accumulator, ...elements.nilai]
}, initialValue);

console.log(reduces);
