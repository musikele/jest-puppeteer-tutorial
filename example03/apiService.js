require('whatwg-fetch')
/*
returns
{
  "base": "EUR",
  "date": "2019-09-25",
  "rates": {
    "GBP": 0.88668,
    "HKD": 8.6059,
    "IDR": 15539.53,
    "ILS": 3.8482,
    "DKK": 7.4648,
    "INR": 78.0215,
    "CHF": "..."
  }
}
*/

export const getCurrencyExchange = async () => {
  const response = await window.fetch(' https://api.ratesapi.io/api/latest');
  const json = await response.json()
  return json;
}

