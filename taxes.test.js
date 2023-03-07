/*it('should calculate low-bracket', function () {
    expect(calculatetaxes(10000))
})*/

it ('should calculate the high tax bracket', function(){
    expect(calculateTaxes(50000)).toEqual(12500);
})
it ('should calculate the low tax bracket', function(){
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(0)).toEqual(0);
    
})

it ('should remove dupes from an array', function() {
    expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4]);
})