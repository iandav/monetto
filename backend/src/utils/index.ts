import {default as time} from "dayjs";
import utc from "dayjs/plugin/utc";


// By default accept UTC as the only timezone for everything
time.extend(utc)

export const dayjs = time;