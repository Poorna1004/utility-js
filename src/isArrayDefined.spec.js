const isArrayDefined = require('./isArrayDefined')

describe('isArrayDefined',() => {
    it('isArrayDefined of array [1,2,3] is true', () => {
        expect(isArrayDefined([1,2,3])).toBeTruthy();
    });

    it('isArrayDefined of array [] is false', () => {
        expect(isArrayDefined([])).toBeFalsy();
    });
});