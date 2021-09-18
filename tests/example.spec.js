import {expect} from "chai";

const a = 5;
const b = 7;

describe('operations with numbers', function (){
    it('addition works correctly', function (){
        expect(a + b, 'result should equal 12').to.eq(12);
    });
});