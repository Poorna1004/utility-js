const reduce = require('./reduce')
const isArrayDefined = require('./isArrayDefined')

const min = (array) => {
    let arrayDefined = isArrayDefined(array);

    if(arrayDefined){
        conditionCallback = (x,y) => (x < y) ? x : y;
        return reduce(array, conditionCallback)
    }

    return undefined;
}
module.exports = min