
function sum(limit) {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;

        }
    }
    return sum;
}
const result = sum(1000);
console.log("Sum of all the multiples of 3 or 5 below 1000:", result);