<p align="center">
  <a href="https://www.npmjs.com/package/@sl-code-lords/holidays" rel="noopener">
 <img width=100px height=100px src="https://icon-library.com/images/holidays-icon/holidays-icon-1.jpg" alt="SL Code LORDS"></a>
</p>
<h2 align="center">Holidays</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/SL-CODE-LORDS/Holidays.svg)](https://github.com/SL-CODE-LORDS/Holidays/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/SL-CODE-LORDS/Holidays.svg)](https://github.com/SL-CODE-LORDS/Holidays/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> generate holidays in a specific year using JavaScript
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

generate holidays in a specific year using JavaScript

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Installing


```sh
yarn add @sl-code-lords/holidays
```

or

```sh
npm i @sl-code-lords/holidays
```

## 🎈 Usage <a name="usage"></a>

```ts
const Holidays = require('@sl-code-lords/holidays')
const country_list = require('@sl-code-lords/holidays/lib/country_list')

const api = new Holidays(2023)
```
## get holidays
```ts
var holidays = await api.sri_lanka()
   console.log(holidays)
```
```ts
{
  January: [
    {
      date: '06',
      Day: 'Friday',
      Holiday_Name: 'Duruthu Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '15',
      Day: 'Sunday',
      Holiday_Name: 'Tamil Thai Pongal Day',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '16',
      Day: 'Monday',
      Holiday_Name: 'Special Bank Holiday Holiday',
      Type: 'Not A Public Holiday',
      Comments: 'Banks'
    }
  ],
  February: [
    {
      date: '04',
      Day: 'Saturday',
      Holiday_Name: 'National Day',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '05',
      Day: 'Sunday',
      Holiday_Name: 'Navam Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '18',
      Day: 'Saturday',
      Holiday_Name: 'Mahasivarathri Day',
      Type: 'National Holiday',
      Comments: ''
    }
  ],
  March: [
    {
      date: '06',
      Day: 'Monday',
      Holiday_Name: 'Madin Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    }
  ],
  April: [
    {
      date: '05',
      Day: 'Wednesday',
      Holiday_Name: 'Bak Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '07',
      Day: 'Friday',
      Holiday_Name: 'Good Friday',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '13',
      Day: 'Thursday',
      Holiday_Name: 'Sinhala and Tamil New Year Eve',
      Type: 'National Holiday',
      Comments: 'Puthandu'
    },
    {
      date: '14',
      Day: 'Friday',
      Holiday_Name: 'Sinhala and Tamil New Year',
      Type: 'National Holiday',
      Comments: 'Puthandu'
    },
    {
      date: '22',
      Day: 'Saturday',
      Holiday_Name: 'Id-Ul-Fitr',
      Type: 'National Holiday',
      Comments: 'Ramazan Festival Day'
    }
  ],
  May: [
    {
      date: '01',
      Day: 'Monday',
      Holiday_Name: 'Labour Day',
      Type: 'National Holiday',
      Comments: "International Workers' Day"
    },
    {
      date: '05',
      Day: 'Friday',
      Holiday_Name: 'Vesak Full Moon Poya',
      Type: 'National Holiday',
      Comments: 'Birth of Buddha'
    },
    {
      date: '06',
      Day: 'Saturday',
      Holiday_Name: 'Vesak Full Moon Poya Holiday',
      Type: 'National Holiday',
      Comments: ''
    }
  ],
  June: [
    {
      date: '03',
      Day: 'Saturday',
      Holiday_Name: 'Poson Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '29',
      Day: 'Thursday',
      Holiday_Name: 'Idul Adha',
      Type: 'National Holiday',
      Comments: 'Hajjhi Festival Day'
    },
    {
      date: '30',
      Day: 'Friday',
      Holiday_Name: 'Special Bank Holiday',
      Type: 'Not A Public Holiday',
      Comments: 'Banks'
    }
  ],
  July: [
    {
      date: '03',
      Day: 'Monday',
      Holiday_Name: 'Esala Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    }
  ],
  August: [
    {
      date: '01',
      Day: 'Tuesday',
      Holiday_Name: 'Nikini Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '30',
      Day: 'Wednesday',
      Holiday_Name: 'Adhi Nikini Full Moon Poya',
      Type: 'National Holiday',
      Comments: 'Second full moon in August'
    }
  ],
  September: [
    {
      date: '28',
      Day: 'Thursday',
      Holiday_Name: 'Milad-Un-Nabi',
      Type: 'National Holiday',
      Comments: 'Birthday of Prophet Muhammad'
    },
    {
      date: '29',
      Day: 'Friday',
      Holiday_Name: 'Binara Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    }
  ],
  October: [
    {
      date: '28',
      Day: 'Saturday',
      Holiday_Name: 'Vap Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    }
  ],
  November: [
    {
      date: '12',
      Day: 'Sunday',
      Holiday_Name: 'Deepavali Festival Day',
      Type: 'National Holiday',
      Comments: 'Dewali'
    },
    {
      date: '26',
      Day: 'Sunday',
      Holiday_Name: 'Ill Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    }
  ],
  December: [
    {
      date: '25',
      Day: 'Monday',
      Holiday_Name: 'Christmas Day',
      Type: 'National Holiday',
      Comments: ''
    },
    {
      date: '26',
      Day: 'Tuesday',
      Holiday_Name: 'Unduvap Full Moon Poya',
      Type: 'National Holiday',
      Comments: ''
    }
  ]
}
```
## ✍️ Authors <a name = "authors"></a>

- [@ravindu01manoj](https://github.com/ravindu01manoj) Project Author

See also the list of [contributors](https://github.com/SL-CODE-LORDS/Holidays/contributors) who participated in this project.