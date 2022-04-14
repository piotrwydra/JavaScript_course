const l = console.log

// new date with current date and time

const date1 = new Date();

l(date1)

//new Date with specified date

const date2 = new Date(1998, 1, 22, 22, 22, 22, 22)

l(date2)

//new Date with miliseconds

const date3 = new Date(1649934590000)

l(date3)

// new date with a string

const date4 = new Date("April 14, 2022 12:09:50")

l(date4)

l(date1.toUTCString()) //displaying date in UTC String

l(date1.toDateString()) //displaying date in date String

l(date1.toISOString()) //displaying date in iso String


// setting date manually

const date = new Date()

date.setMilliseconds(0) //setting milliseconds
date.setSeconds(50) //setting seconds
date.setMinutes(9) //setting a minute
date.setHours(12) // setting an hour
date.setDate(14) // setting a day
date.setMonth(3) // setting a month (from index 0)
date.setFullYear(2022) //setting a year

l(date)

l(date.valueOf()) // getting a milliseconds value of the date

const tempDate = new Date(date.valueOf()) //turning the milliseconds value into a date

l(tempDate)

// extracting elements from date object to an object

const dateExtraction = {
    "milliseconds": date.getMilliseconds(),
    "seconds": date.getSeconds(),
    "minutes": date.getMinutes(),
    "hour": date.getHours(),
    "day": date.getDate(),
    "month": date.getMonth(),
    "year": date.getFullYear(),

}

l(dateExtraction)