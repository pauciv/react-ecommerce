const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'EUR',
  style: 'currency',
});

console.log(CURRENCY_FORMATTER)

export const formatCurrency = (number) => CURRENCY_FORMATTER.format(number);
