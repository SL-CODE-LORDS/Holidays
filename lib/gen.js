(function gen() {
    const country_list = require('./country_list')
    const fs = require('fs')
    var code = "var holidays = require('./holidays')\n\n" + `class Holidays {
    constructor(year='') {
        this.year = year
    }
    async _main(country) {
        return await holidays(country,this.year)
    }\n`
    for (const country of country_list) {
    code += `    async ${country.replace(/-/g,'_')}() {
        return await this._main('${country}')
    }\n`
    }
    code += "}\n\nmodule.exports = Holidays"
    fs.writeFileSync('index.js', code)
})()