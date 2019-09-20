import { Convert } from './convert';
describe('convert util testing', ()=>{
    it('should return sum of two',()=>{
        let result = Convert.sum(1, 2);
        expect(result).toEqual(3);
    })
})