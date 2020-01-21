const testSymbol = require("../index");

describe('test', () => {
    it('should not be equal ', () => {
        const result = testSymbol();
        console.log('------->result', result);
        expect({}).toEqual(result);
    });
});