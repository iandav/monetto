const dayjs = require("dayjs")
const utc = require("dayjs/plugin/utc")

// By default accept UTC as the only timezone for everything
dayjs.extend(utc)

exports.dayjs = dayjs;