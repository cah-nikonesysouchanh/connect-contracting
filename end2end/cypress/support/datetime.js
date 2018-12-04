import moment from "moment";

export const displayDateFormat = "MM/DD/YYYY";
export const apiDateFormat = "YYYY-MM-DD";

export function tomorrow() {
    let momentDate = moment(new Date()).add(1, 'day');
    return momentDate.format(displayDateFormat);
}

export function yesterday() {
    let momentDate = moment(new Date()).subtract(1, 'day');
    return momentDate.format(displayDateFormat);
}

export function moreThenYearFuture() {
    let momentDate = moment(new Date()).add(1, 'year').add(1, "days");
    return momentDate.format(displayDateFormat);
}


export function tomorrowApi() {
    let momentDate = moment(new Date()).add(1, 'day');
    return momentDate.format(apiDateFormat);
}

export function yesterdayApi() {
    let momentDate = moment(new Date()).subtract(1, 'day');
    return momentDate.format(apiDateFormat);
}

export function moreThenYearFutureApi() {
    let momentDate = moment(new Date()).add(1, 'year').add(1, "days");
    return momentDate.format(apiDateFormat);
}
