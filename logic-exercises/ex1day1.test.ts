import { createArrayOfNumbersMissingAnumber, searchMissingNumber } from "./ex1day1"
const arrayTest = createArrayOfNumbersMissingAnumber()

describe("Testing logic functions", () => {
    
    test("Should return a number equal to the missing", () => {
        expect.assertions(1)
     
         
         const result  = searchMissingNumber(arrayTest.arrayNumbers)
         expect(result).toBe(arrayTest.randomNumber)
            
    })
})