const max = require('./max');

describe('Max', () => {

    it('Max of [] is undefined', () => {
        expect(max([])).toEqual(undefined);
    });

    it('Max of [1,2,3,4] is 4', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });

    it('Max of [-6,6] is 6', () => {
        expect(max([-6,6])).toEqual(6);
    });

    it('Max of [-6,2,10,3,4] is 10', () => {
        expect(max([-6,2,10,3,4])).toEqual(10);
    });

})
