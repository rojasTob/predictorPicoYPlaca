const predictor = require("../modules/predictor");

describe("predictor", () => {
  it("should exists module", () => {
    expect(predictor).not.toBe(null);
  });

  describe("analyzePlateNumber function", () => {
    it("given a plate number, date and time, this car should not be able to be on road", () => {
      let dataTrip = {
        plateNumber: "ibc-8491",
        date: "2019-08-26",
        time: "08:30"
      };
      let result = predictor.analyzePlateNumber(dataTrip);
      expect(result).toBe(
        "The vehicle [ibc-8491] cannot be on the road on 2019-08-26 at 08:30"
      );
    });

    it("given a plate number, date and time, this car should not be able to be on road", () => {
      let dataTrip = {
        plateNumber: "ibc-8491",
        date: "2019-08-26",
        time: "17:14"
      };
      let result = predictor.analyzePlateNumber(dataTrip);
      expect(result).toBe(
        "The vehicle [ibc-8491] cannot be on the road on 2019-08-26 at 17:14"
      );
    });

    it("given a plate number, date and time, this car should be able to be on road", () => {
      let dataTrip = {
        plateNumber: "ibc-8491",
        date: "2019-08-26",
        time: "13:06"
      };
      let result = predictor.analyzePlateNumber(dataTrip);
      expect(result).toBe(
        "The vehicle [ibc-8491] can be on the road on 2019-08-26 at 13:06"
      );
    });

    it("given a plate number, date and time, this car should be able to be on road", () => {
      let dataTrip = {
        plateNumber: "ibc-8491",
        date: "2019-08-28",
        time: "08:51"
      };
      let result = predictor.analyzePlateNumber(dataTrip);
      expect(result).toBe(
        "The vehicle [ibc-8491] can be on the road on 2019-08-28 at 08:51"
      );
    });

    it("given a moto plate number, date and time, this moto should not be able to be on road", () => {
      let dataTrip = {
        plateNumber: "hv443j",
        date: "2019-08-20",
        time: "17:14"
      };
      let result = predictor.analyzePlateNumber(dataTrip);
      expect(result).toBe(
        "The vehicle [hv443j] cannot be on the road on 2019-08-20 at 17:14"
      );
    });
  });
});
