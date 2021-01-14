const isArrayDefined = require('./isArrayDefined')
const head = require('./head')
const tail = require('./tail')

const reduce = (array, callBack, initialValue) => {
    let arrayDefined = isArrayDefined(array);

    if(arrayDefined && callBack == null)
        return array;

    if(arrayDefined && callBack != null){

        if(initialValue == null)
            return reducer(tail(array,2), callBack, callBack(head(array), array[1]))

        return reducer(tail(array),callBack, callBack(initialValue, head(array)));
    }

    if(callBack != null && initialValue != null)
        return initialValue;

    return undefined;
}

const reducer = (array, callBack, initialValue) => {
    if(head(array) === undefined){
        return initialValue;
    }

    return reducer(tail(array),callBack, callBack(initialValue, head(array)));
}

module.exports = reduce;