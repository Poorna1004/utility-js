const isArrayDefined = require('./isArrayDefined')

const tail = (array, startIndex) => {
    arrayDefined = isArrayDefined(array)

    if(startIndex == 0)
        return array

    if(arrayDefined)
        return startIndex == null ? array.slice(1) : array.slice(startIndex);

    return undefined;
}

module.exports = tail;