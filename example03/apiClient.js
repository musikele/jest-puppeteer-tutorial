import { getCurrencyExchange } from './apiService'

const getEuroDollar = async () => {
    const currencyExchange = await getCurrencyExchange()
    console.log(`1 Euro is ${currencyExchange.rates.USD} dollars`)
    return currencyExchange.rates.USD
}

module.exports.getEuroDollar = getEuroDollar
