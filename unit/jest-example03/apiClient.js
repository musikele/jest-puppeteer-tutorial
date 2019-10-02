import { getCurrencyExchange } from './apiService'

export const getEuroDollar = async () => {
    const currencyExchange = await getCurrencyExchange()
    console.log(`1 Euro is ${currencyExchange.rates.USD} dollars`)
    return currencyExchange.rates.USD
}
