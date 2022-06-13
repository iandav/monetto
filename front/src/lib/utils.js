import getDaysInMonth from "date-fns/getDaysInMonth"

const now = new Date()

// Years
export const fromYear = now.getFullYear()
export const toYear = now.getFullYear() + 1

// Months
export const fromMonth = `0${now.getMonth() + 1}`
export const toMonth = fromMonth

// Last day
export const toDay = getDaysInMonth(now)

// YYYY-MM-DD
export const fromCurrentYear = `${fromYear}-01-01`
export const toCurrentYear = `${toYear}-01-01`

export const fromCurrentMonth = `${fromYear}-${fromMonth}-01`
export const toCurrentMonth = `${fromYear}-${toMonth + 1}-01`

export const dateFromDefault = `${fromYear}-${fromMonth}-01`
export const dateToDefault = `${toYear}-${toMonth}-31`
