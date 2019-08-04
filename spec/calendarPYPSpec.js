const fs = require("fs");

const calendarPYP = JSON.parse(
  fs.readFileSync("data/calendarPYP.json", "utf8")
);

describe("calendarPYP json", () => {
  it("should exists json file", () => {
    expect(calendarPYP).not.toBe(null);
  });

  it("should have ranges", () => {
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
    expect(calendarPYP.ranges).toEqual(ranges);
  });

  it("should have days information", () => {
    let days = {
      "1": ["1", "2"],
      "2": ["3", "4"],
      "3": ["5", "6"],
      "4": ["7", "8"],
      "5": ["9", "0"]
    };
    expect(calendarPYP.days).toEqual(days);
  });
});
