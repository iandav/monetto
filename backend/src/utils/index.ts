import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

// By default accept UTC as the only timezone for everything
dayjs.extend(utc)

exports.dayjs = dayjs;