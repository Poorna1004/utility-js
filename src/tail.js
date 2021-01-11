const tail = (array) => {

    if(typeof array != "undefined" && array != null && array.length != 0)
        return array[array.length - 1];

    return undefined;
}

module.exports = tail;