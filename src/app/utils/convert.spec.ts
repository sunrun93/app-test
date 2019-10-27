import { Convert } from './convert';

xdescribe('convert util testing', ()=>{
    beforeAll(() => {
        console.log('before all')
    }),
    beforeEach(() => {
        console.log('before each')
    }),
    afterEach(() => {
        console.log('after each')
    }),
    afterAll(() => {
        console.log(this);
    }),
    it('should return sum of two',()=>{
        let result = Convert.sum(1, 2);
        console.log('unit spec1');
        expect(result).toEqual(3);
    });
    it('should return a - b', ()=>{
        let result = Convert.sum(1,-1);
        console.log('unit spec2');
        expect(result).toEqual(0);
    })
})