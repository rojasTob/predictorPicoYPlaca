"use strict";

const fs = require("fs");
const moment = require("moment");
const calendarPYP = JSON.parse(
  fs.readFileSync("data/calendarPYP.json", "utf8")
);
const utils = require("./utils");

function generateMessage(dataTrip, isOnPicoYPlaca) {
  return `The vehicle [${dataTrip.plateNumber}] ${
    isOnPicoYPlaca ? "cannot" : "can"
  } be on the road on ${dataTrip.date} at ${dataTrip.time}`;
}

function analyzePlateNumber(dataTrip) {
  let message = "";
  let lastDigitPlate = utils.getLastDigit(dataTrip.plateNumber);
  let weekDayNumber = moment(dataTrip.date, "YYYY-MM-DD").format("d");
  let betweenTimeRanges = utils.isBetweenTimeRanges(
    calendarPYP.ranges,
    dataTrip.time
  );

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
