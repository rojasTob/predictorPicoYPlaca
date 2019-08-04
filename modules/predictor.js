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

function analizePlateNumber(dataTrip) {
  let lastDigitPlate = dataTrip.plateNumber.slice(-1);
  let weekDayNumber = moment(dataTrip.date, "YYYY-MM-DD").format("d");
  let betweenTimeRanges = isBetweenTimeRanges(dataTrip.time);

  let plateNumbersInDay = [];
  plateNumbersInDay = calendarPYP.days[weekDayNumber];
  let message = "";

  if (plateNumbersInDay.includes(lastDigitPlate)) {
    if (betweenTimeRanges) {
      message = `The car [${dataTrip.plateNumber}] cannot be on the road on ${
        dataTrip.date
      } at ${dataTrip.time}`;
    }
    if (!betweenTimeRanges) {
      message = `The car [${dataTrip.plateNumber}] can be on the road on ${
        dataTrip.date
      } at ${dataTrip.time}`;
    }
  }

  if (!plateNumbersInDay.includes(lastDigitPlate)) {
    message = `The car [${dataTrip.plateNumber}] can be on the road on ${
      dataTrip.date
    } at ${dataTrip.time}`;
  }

  return message;
}

module.exports = {
  analizePlateNumber: analizePlateNumber
};
