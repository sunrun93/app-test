import { Multiply } from './multiply';

describe('multiple util testing', ()=>{
    beforeAll(function(){
        this.value = 1;
    });
    it('Any number multiplied by 1 remians the same',function(){
        let result = Multiply.multiply(this.value, 3);
        expect(result).toEqual(3);
    });
    
    // it('test error',function(){
    //     fail('manually failing')
    // });

    describe('nested inside a second describe', function(){
        beforeAll(function(){
            this.value = 0;
        });
        it('Any number multiplied by 0 equals to 0',function(){
            let result = Multiply.multiply(this.value, 3);
            expect(result).toEqual(0);
        });
    })
})