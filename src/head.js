const isArrayDefined = require('./isArrayDefined')

const head = (array) => {

    if(isArrayDefined(array))
        return array[0];

    return undefined;
}

module.exports = head;
