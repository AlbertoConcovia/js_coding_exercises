const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  // hexToRGB,
  // findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("should it returns 6", () => {
    expect(sumDigits(123)).toBe(6);
  });
  test("should it returns 15", () => {
    expect(sumDigits(1473)).toBe(15);
  });
});

describe("createRange", () => {
  // start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
  test("should it returns step by 3", () => {
    const result = [3, 5, 7, 9, 11];
    expect(createRange(3, 11, 2)).toStrictEqual(result);
  });
  // Step is an optional parameter. If it is not provided, assume the step is 1.
  test("should it returns step by 1 ", () => {
    const result = [3, 4, 5, 6];
    expect(createRange(3, 6)).toStrictEqual(result);
  });
});

describe("getScreentimeAlertList", () => {
  const users = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
  ];

  test("should it returns the username with sum(usage) > 100 minutes", () => {
    const result = ["beth_1234"];
    const date = "2019-05-04";
    expect(getScreentimeAlertList(users, date)).toStrictEqual(result);
    const date2 = "2019-05-02";
    expect(getScreentimeAlertList(users, date2)).toStrictEqual(result);
  });

  test("should it returns empty if sum < 100 minutes", () => {
    const result = [];
    const date = "2019-06-11";
    expect(getScreentimeAlertList(users, date)).toStrictEqual(result);
  });
});
