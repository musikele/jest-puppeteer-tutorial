//class to test 
import { getEuroDollar } from './apiClient';

// stuff we need to mock 
import { getCurrencyExchange } from './apiService'
jest.mock('./apiService');

describe('apiClient tests', () => {
    //reset all mocks before use!
    beforeEach(() => {
        getCurrencyExchange.mockClear()
    })
    
    it('should return euro/dollar exchange', async () => {
        //when called, return this result
        getCurrencyExchange.mockResolvedValue({
            rates: {
                USD: 2000
            }
        })
        //call the function under test 
        const euroDollarChange = await getEuroDollar()
        //expect that getCurrencyExchange has been called 
        expect(getCurrencyExchange).toHaveBeenCalled()
        expect(euroDollarChange).toBe(2000)
    })
})
