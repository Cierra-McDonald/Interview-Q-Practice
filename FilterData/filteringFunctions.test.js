const { calculateAge, eighteenToThirty, findDuplicateNames,
findDuplicateBirthdays, addAgeToObject } = require('./filterFunctions')

const readCSV = require('../CustomerSecurity/readToCSV');



describe('functions that will filter through the data located in the test.csv file', () => { 
    it('should calculate the age of each customer', async () => { 
        const path = ('./test.csv')
        const actualData = await readCSV(path);
        // console.log('yoyoyo', actualData);

        const birthdate = '1996-10-09';

        const actualAge = calculateAge(birthdate);

        expect(actualAge).toEqual(24);

    });

    it('should add an age key to the customers object', async () => { 
        const path = ('./test.csv')
        const actualData = await readCSV(path);

        const result = addAgeToObject(actualData[1]);
        console.log('in the test' ,result);
       

        expect(result).toEqual({
            c_name: expect.any(String),
            user_name: expect.any(String),
            password: expect.any(String),
            phone: expect.any(String),
            DOB: expect.any(String),
            SSC: expect.any(String),
            Age: expect.any(Number)
          })
        
    })

});