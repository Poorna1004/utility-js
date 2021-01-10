const head = (array) => {

    if(typeof array != "undefined" && array != null && array.length != 0)
        return array[0];

    return undefined;
}

module.exports = head;
