const tail = require('./tail')

describe('Tail', () => {

    it('Tail of empty Array ([]) is undefined', () => {
        expect(tail([])).toBeUndefined();
    });

    it('Tail of null is undefined', () => {
        expect(tail(null)).toBeUndefined();
    });

    it('Tail of undefined is undefined', () => {
       expect(tail(undefined)).toBeUndefined();
    });

    it('Tail of Array [1] is 1', () => {
        expect(tail([1])).toEqual([])
    });

    it('Tail of Array [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3])
    });

    it('Tail of Array [3,4,5,-6] is [4,5,-6]', () => {
        expect(tail([3,4,5,-6])).toEqual([4,5,-6])
    });

    it('Tail of Array [3,4,5,-6] with start index 2 is [5,-6]', () => {
        expect(tail([3,4,5,-6],2)).toEqual([5,-6])
    });

    it('Tail of Array [3,4,5,-6] with start index 0 is [3,4,5,-6]', () => {
           expect(tail([3,4,5,-6],0)).toEqual([3,4,5,-6])
    });

})
