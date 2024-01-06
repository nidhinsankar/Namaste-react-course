const { sum } = require("../sum")


test('adding 2 number',()=>{
    expect(sum(2,4)).toBe(6)
})