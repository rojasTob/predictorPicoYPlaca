const utils = require("../modules/utils");

describe("utils", () => {
  it("module utils should exists", () => {
    expect(utils).not.toBe(null);
  });

  describe("getLastDigit", () => {
    it("given a moto plate number should return only digits", () => {
      let anyString = "hv443j";
      let lastDigit = utils.getLastDigit(anyString);
      expect(lastDigit).toBe("3");
    });

    it("given a car plate number should return only digits", () => {
      let anyString = "ibc-8491";
      let lastDigit = utils.getLastDigit(anyString);
      expect(lastDigit).toBe("1");
    });
  });

  describe("isBetweenTimeRanges", () => {
    it("given a time should verify if it is on pico y placa time ranges", () => {
      let ranges = [
        {
          from: "07:00:00",
          to: "09:30:00"
        },
        {
          from: "16:00:00",
          to: "19:30:00"
        }
      ];
      let time1 = "08:30";
      let time2 = "11:00";
      let time3 = "17:24";
      let time4 = "19:31";
      let isTime1OnRanges = utils.isBetweenTimeRanges(ranges, time1);
      let isTime2OnRanges = utils.isBetweenTimeRanges(ranges, time2);
      let isTime3OnRanges = utils.isBetweenTimeRanges(ranges, time3);
      let isTime4OnRanges = utils.isBetweenTimeRanges(ranges, time4);
      expect(isTime1OnRanges).toBe(true);
      expect(isTime2OnRanges).toBe(false);
      expect(isTime3OnRanges).toBe(true);
      expect(isTime4OnRanges).toBe(false);
    });
  });
});
