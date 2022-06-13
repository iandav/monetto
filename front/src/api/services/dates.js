import getDaysInMonth from 'date-fns/getDaysInMonth'

const now = new Date()

// Years
const fromYear = now.getFullYear()
const toYear = now.getFullYear() + 1
// Months
const fromMonth = `0${now.getMonth() + 1}`
const toMonth = fromMonth
// Last day
const toDay = getDaysInMonth(now)

// YYYY-MM-DD
const fromCurrentYear = `${fromYear}-01-01`
const toCurrentYear = `${toYear}-01-01`

const fromCurrentMonth = `${fromYear}-${fromMonth}-01`
const toCurrentMonth = `${fromYear}-${toMonth + 1}-01`