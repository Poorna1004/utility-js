const head = require('./head')
const tail = require('./tail')
const isArrayDefined = require('./isArrayDefined')


const filter = (array, callback) => {
    let arrayDefined = isArrayDefined(array);

    if(arrayDefined && callback == null)
        return array;

    return filterArray(array,callback, [])
}

const filterArray = (array, callback, resultArray) => {
    let firstElement = head(array);
    let callbackResult = callback(firstElement);

    if(!isArrayDefined(array)){
        return resultArray;
    }

    if(callbackResult) {
        resultArray.push(firstElement);
    }

    return filterArray(tail(array), callback, resultArray);
}

module.exports = filter;