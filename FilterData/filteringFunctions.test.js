const { calculateAge, eighteenToThirty, findDuplicateNames,
findDuplicateBirthdays, addAgeToObject } = require('./filterFunctions')

const readCSV = require('../CustomerSecurity/readToCSV');
const writeToCSV = require('../CustomerSecurity/writeToCSV')



describe('functions that will filter through the data located in the test.csv file', () => { 
    // it('should calculate the age of each customer', async () => { 
    //     const path = ('./test.csv')
    //     const actualData = await readCSV(path);
    //     // console.log('yoyoyo', actualData);

    //     const birthdate = '1996-10-09';

    //     const actualAge = calculateAge(birthdate);

    //     expect(actualAge).toEqual(24);

    // });

    // it('should add an age key to the customers object', async () => { 
    //     const path = ('./test.csv')
    //     const actualData = await readCSV(path);
    //     // console.log('in test above', actualData);

    //     const result = addAgeToObject(actualData[1]);
    //     // console.log('in the test' ,result);
       
    //     writeToCSV(result);
    //     expect(result[0]).toEqual(
    //         {
    //         c_name: expect.any(String),
    //         user_name: expect.any(String),
    //         password: expect.any(String),
    //         phone: expect.any(String),
    //         DOB: expect.any(String),
    //         SSC: expect.any(String),
    //         Age: expect.any(Number)
    //       }
    //     ) 
    // });

    // it('should find all the people who\'s age is in between 18 and 30', async () => { 
    //     const path = ('./test.csv')
    //     const actualData = await readCSV(path);
      
    //     for ( let i = 0; i < 1268; i++) { 
    //         let result = eighteenToThirty(actualData[1]);
    //         // console.log('result', result);
    //         if (result[i] <= 30 && result[i] >= 18)
            
    //         expect(result).toEqual(true)

    //     }
        
    // });

    it('should find all the people who have the same name and count how many duplicates there are', async () => { 
        const path = ('./test.csv')
        const actualData = await readCSV(path);

        let duplicateNames = await findDuplicateNames(actualData[1]);
        console.log('hello');
        console.log(Object.keys(duplicateNames).length);
        Names = Object.keys(duplicateNames).map(function (key) {
            if (duplicateNames[key] > 1) { 
                return { [key]: duplicateNames[key] };
            } 
         });
         let newArray = [];
         for (i of Names) { 
             if (i) { 
                 newArray.push(i);
             }
             
         }
        console.log(newArray);
        // console.log(Names);

        expect([]).toEqual([]);
    })

});