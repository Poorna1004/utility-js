const reduce = require('./reduce')

const min = (array) => {

    conditionCallback = (x,y) => (x < y) ? x : y;

    return reduce(array, conditionCallback)
}
module.exports = min