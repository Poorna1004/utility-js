const filter = require('./filter')

describe('Filter',() => {
    it('filter of array [1,2,3] without callback function is [1,2,3]',() => {
            expect(filter([1,2,3])).toEqual([1,2,3]);
    });
    it('filter of array [] with call back function x => true is []', () => {
        expect(filter([],x => true)).toEqual([]);
    });

    it('filter of array [1,2,3] with call back function x => true is [1,2,3]', () => {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    });

    it('filter of array [1,2,3] with call back function x => false is []', () => {
        expect(filter([1,2,3],x => false)).toEqual([]);
    });

    it('filter of array [1,2,3] with callback function x => x > 1 is [2,3]',() => {
        expect(filter([1,2,3],x => x > 1)).toEqual([2,3]);
    });
});