const lang = 'en-US';
const fmt = new Intl.NumberFormat(lang, { style: 'currency', currency: 'USD' });
console.log(fmt.format(1234567.89));
