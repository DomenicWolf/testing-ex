
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 20000,
    years: 20,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('105.98');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it ('edge case',function() {
  const values = {
    amount: 0,
    years: 0,
    rate: 0
  };
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
})


