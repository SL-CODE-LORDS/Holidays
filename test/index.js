const Holidays = require('..');

(async function test() {
   const api = new Holidays('2023')
   var holidays = await api.sri_lanka()
   console.log(holidays)
})()