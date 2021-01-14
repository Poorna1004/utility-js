const reduce = require('./reduce')

describe('Reduce',() => {
    it('Reduce of empty array with callback function (x,y) => x+y is undefined', () => {
        expect(reduce([],(x,y) => x+y)).toBeUndefined();
    });

    it('Reduce of empty array without callback function is undefined', () => {
        expect(reduce([])).toBeUndefined();
    });

    it('Reduce of array [1,2,3] without callback function is [1,2,3]', () => {
        expect(reduce([1,2,3])).toEqual([1,2,3]);
    });

    it('Reduce of array [1,2,3] with callback function (x,y) => x+y is [1,2,3]', () => {
        expect(reduce([1,2,3],(x,y) => x+y)).toEqual(6);
    });

    it('Reduce of array [a,b,c] with callback function (x,y) => x+y is "abc"', () => {
        expect(reduce(['a','b','c'],(x,y) => x+y)).toEqual('abc');
    });

    it('Reduce of array [a,b,c] with callback function (x,y) => x+y with the initial value "z" is "zabc"',() => {
        expect(reduce(['a','b','c'],(x,y) => x+y,'z')).toEqual('zabc')
    });

    it('Reduce of array [] with callback function (x,y) => x+y with the initial value 10 is 10',() => {
        expect(reduce([],(x,y) => x+y,10)).toEqual(10)
    });

    it('Reduce of array [] with callback function (x,y) => x+y with the initial value 10 is 10',() => {
        expect(reduce([1,2,3],(x,y) => x-y,12)).toEqual(6)
    });

     it('Reduce of array [1,2,3] without callback function with the initial value 12 is [1,2,3]',() => {
        expect(reduce([1,2,3],null,12)).toEqual([1,2,3])
     });
});