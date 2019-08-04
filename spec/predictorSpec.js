const predictor = require("../modules/predictor");

describe("predictor", () => {
  it("should exists module", () => {
    expect(predictor).not.toBe(null);
  });

  describe("analizePlateNumber function", () => {
    // it("given a time should verify if it is on pico y placa ranges", () => {
    //   let time1 = "08:30";
    //   let time2 = "11:00";
    //   let time3 = "17:24";
    //   let time4 = "19:31";
    //   let isTime1OnRanges = predictor.isBetweenTimeRanges(time1);
    //   let isTime2OnRanges = predictor.isBetweenTimeRanges(time2);
    //   let isTime3OnRanges = predictor.isBetweenTimeRanges(time3);
    //   let isTime4OnRanges = predictor.isBetweenTimeRanges(time4);
    //   expect(isTime1OnRanges).toBe(true);
    //   expect(isTime2OnRanges).toBe(false);
    //   expect(isTime3OnRanges).toBe(true);
    //   expect(isTime4OnRanges).toBe(false);
    // });

    it("given a plate number, date and time, this car should not be able to be on road", () => {
      let dataTrip = {
        plateNumber: "ibc-8491",
        date: "2019-08-26",
        time: "08:30"
      };
      let result = predictor.analizePlateNumber(dataTrip);
      expect(result).toBe(
        "The car [ibc-8491] cannot be on the road on 2019-08-26 at 08:30"
      );
    });

    it("given a plate number, date and time, this car should be able to be on road", () => {
      let dataTrip = {
        plateNumber: "ibc-8491",
        date: "2019-08-26",
        time: "17:14"
      };
      let result = predictor.analizePlateNumber(dataTrip);
      expect(result).toBe(
        "The car [ibc-8491] cannot be on the road on 2019-08-26 at 17:14"
      );
    });

    it("given a plate number, date and time, this car should not be able to be on road", () => {
      let dataTrip = {
        plateNumber: "ibc-8491",
        date: "2019-08-26",
        time: "13:06"
      };
      let result = predictor.analizePlateNumber(dataTrip);
      expect(result).toBe(
        "The car [ibc-8491] can be on the road on 2019-08-26 at 13:06"
      );
    });

    it("given a plate number, date and time, this car should be able to be on road", () => {
      let dataTrip = {
        plateNumber: "ibc-8491",
        date: "2019-08-28",
        time: "08:51"
      };
      let result = predictor.analizePlateNumber(dataTrip);
      expect(result).toBe(
        "The car [ibc-8491] can be on the road on 2019-08-28 at 08:51"
      );
    });
  });
});
