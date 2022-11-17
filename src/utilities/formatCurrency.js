const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

console.log(CURRENCY_FORMATTER)

export const formatCurrency = (number) => CURRENCY_FORMATTER.format(number);
