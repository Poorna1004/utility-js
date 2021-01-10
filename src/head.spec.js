const head = require('./head');

describe('Head', () => {

    it('Head of empty Array ([]) is undefined', () => {
        expect(head([])).toBeUndefined();
    });

    it('Head of null is undefined', () => {
        expect(head(null)).toBeUndefined();
    });

    it('Head of undefined is undefined', () => {
       expect(head(undefined)).toBeUndefined();
    });

    it('Head of Array [1] is 1', () => {
        expect(head([1])).toEqual(1)
    });

    it('Head of Array [2,1] is 2', () => {
        expect(head([2,1])).toEqual(2)
    });

    it('Head of Array [3,4,5,6] is 3', () => {
            expect(head([3,4,5,6])).toEqual(3)
    });

})
