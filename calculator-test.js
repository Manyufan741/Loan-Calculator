
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount:800000, years:15, rate:0.036})).toEqual('5758.43');
  expect(calculateMonthlyPayment({amount:1000000, years:30, rate:0.036})).toEqual('4546.45');
});


it("should return a result with 2 decimal places", function() {
  // ..
  let values = {
    amount: 10043,
    years: 8,
    rate: 0.058
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

/// etc
