const isArrayDefined = (array) => {
    return (typeof array != "undefined" && array != null && array.length != 0);
}

module.exports = isArrayDefined;