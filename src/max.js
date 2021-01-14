const reduce = require('./reduce')

const max = (array) => {

    conditionCallback = (x,y) => (x > y) ? x : y;

    return reduce(array, conditionCallback)
}
module.exports = max