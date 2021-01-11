const isArrayDefined = require('./isArrayDefined')

const tail = (array) => {
    arrayDefined = isArrayDefined(array)

    if(arrayDefined)
        return array.slice(1);;

    return undefined;
}

module.exports = tail;