"use strict";

const fs = require("fs");
const moment = require("moment");
const calendarPYP = JSON.parse(
  fs.readFileSync("data/calendarPYP.json", "utf8")
);

function isBetweenTimeRanges(time) {
  let timeTrip = moment(time, "hh:mm:ss");

  let timeRanges = calendarPYP.ranges;
  let isOnRange = timeRanges.some(range => {
    let timeFrom = moment(range.from, "hh:mm:ss");
    let timeTo = moment(range.to, "hh:mm:ss");

    return timeTrip.isBetween(timeFrom, timeTo);
  });

  return isOnRange;
}

function generateMessage(dataTrip, isOnPicoYPlaca) {
  return `The car [${dataTrip.plateNumber}] ${
    isOnPicoYPlaca ? "cannot" : "can"
  } be on the road on ${dataTrip.date} at ${dataTrip.time}`;
}

function analyzePlateNumber(dataTrip) {
  let message = "";
  let lastDigitPlate = dataTrip.plateNumber.slice(-1);
  let weekDayNumber = moment(dataTrip.date, "YYYY-MM-DD").format("d");
  let betweenTimeRanges = isBetweenTimeRanges(dataTrip.time);

  let plateNumbersInDay = calendarPYP.days[weekDayNumber];

  if (plateNumbersInDay.includes(lastDigitPlate)) {
    message = generateMessage(dataTrip, betweenTimeRanges);
  }

  if (!plateNumbersInDay.includes(lastDigitPlate)) {
    message = generateMessage(dataTrip, false); //false
  }

  return message;
}

module.exports = {
  analyzePlateNumber: analyzePlateNumber
};
