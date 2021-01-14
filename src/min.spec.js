const min = require('./min');

describe('Min', () => {

    it('min of [1,2,3,4] is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

    it('min of [-6,6] is -6', () => {
        expect(min([-6,6])).toEqual(-6);
    });

    it('min of [-6,2,10,3,4] is -6', () => {
        expect(min([-6,2,10,3,4])).toEqual(-6);
    });

})
