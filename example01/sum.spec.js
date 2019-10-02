import sum from './sum'

describe('sum module', () => {
    it('should sum two numbers', () => {
        const result = sum(2,3)
        expect(result).toBe(5)
    });

    it('should explode with exception', () => {
        try {
            sum(2,'pippo');
        } catch(e) {
            expect(e).toBeDefined();
        }
    });
});
