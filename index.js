const randomInteger = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
    randomInteger
}
console.log(randomInteger(5, 10));