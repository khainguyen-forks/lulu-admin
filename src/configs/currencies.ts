const config: CurrencyConfig.Config = {
  // current currency
  currency: {
    label: 'USD',
    decimalDigits: 2,
    decimalSeparator: '.',
    thousandsSeparator: ',',
    currencySymbol: '$',
    currencySymbolNumberOfSpaces: 0,
    currencySymbolPosition: 'left'
  },

  // availabled currencies for user selection
  availableCurrencies: [{
    label: 'USD',
    decimalDigits: 2,
    decimalSeparator: '.',
    thousandsSeparator: ',',
    currencySymbol: '$',
    currencySymbolNumberOfSpaces: 0,
    currencySymbolPosition: 'left'
  }, {
    label: 'EUR',
    decimalDigits: 2,
    decimalSeparator: '.',
    thousandsSeparator: ',',
    currencySymbol: '€',
    currencySymbolNumberOfSpaces: 1,
    currencySymbolPosition: 'right'
  }]
}

export default config
