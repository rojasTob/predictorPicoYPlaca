"use strict";

const moment = require("moment");

function getLastDigit(anyString) {
  let numbers = anyString.match(/\d+/g).toString();
  return numbers.slice(-1);
}

function isBetweenTimeRanges(ranges, time) {
  let timeTrip = moment(time, "hh:mm:ss");

  let isOnRange = ranges.some(range => {
    let timeFrom = moment(range.from, "hh:mm:ss");
    let timeTo = moment(range.to, "hh:mm:ss");

    return timeTrip.isBetween(timeFrom, timeTo);
  });

  return isOnRange;
}

module.exports = {
  getLastDigit: getLastDigit,
  isBetweenTimeRanges: isBetweenTimeRanges
};
