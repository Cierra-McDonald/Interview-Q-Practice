const generateCustomerObj = require('./customerSecurity');
const { generateName, generatePhoneNum, generateDOB, generateSSC, generateUserName, generateCreditCard } = require("./customerUtils");


describe('create a function that creates 10,000 customer objects', () => { 
    it('should generate an object of customer objects', () => { 

        const result = generateCustomerObj();
        const user = generateUserName();
        console.log(user, 'username')
        // console.log(result);

        for (let i = 0; i < 50; i++) { 
            let peopleArr = [];

            peopleArr.push(generateCustomerObj());
            console.log(peopleArr);
        }

        expect(result).toEqual({ 
            c_name: expect.any(String), 
            user_name: expect.any(String),
            phone: expect.any(String),
            DOB: expect.any(String),
            SSC: expect.any(String) 
        })


    });

    it('should generate a random social security number', () => { 

        for(let i = 0; i < 1000; i++) { 
            const result = generateSSC();
            let regex =  /^\d{3}-?\d{2}-?\d{4}$/;
            let regexTest = regex.test(result);

            expect(regexTest).toEqual(true);
        }

    });

    it('should test regex expression', () => { 
        let regex =  /^\d{3}-?\d{2}-?\d{4}$/;
        
        for(let i = 0; i < 1000; i++) { 
            let result = '';
            let alphaNum = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

                for (let j = 0; j < 11; j++) { 
                    if (j == 3 || j == 6) { 
                        result += '-'
                      
                    } else { 
                        result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
                    }
                };

            let testResult = regex.test(result);
            expect(testResult).toEqual(false);
        }

    });

    it('should generate a random phone number', () => { 

        for(let i = 0; i < 1000; i++) { 
            const result = generatePhoneNum();
            let regex =  /^\d{3}-?\d{3}-?\d{4}$/;
            let regexTest = regex.test(result);

            expect(regexTest).toEqual(true);
        }

    });

    it('should test regex expression for phone number', () => { 
        let regex =  /^\d{3}-?\d{3}-?\d{4}$/;
        
        for(let i = 0; i < 1000; i++) { 
            let result = '';
            let alphaNum = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

                for (let j = 0; j < 12; j++) { 
                    if (j == 3 || j == 7) { 
                        result += '-'
                      
                    } else { 
                        result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
                    }
                };

            let testResult = regex.test(result);
            expect(testResult).toEqual(false);
        }

    });

    it('should generate a random Birtday YYYY/MM/DD', () => { 

        for(let i = 0; i < 1000; i++) { 
            const result = generateDOB();
            let regex =  /^\d{4}-?\d{2}-?\d{2}$/;
            let regexTest = regex.test(result);

            // console.log(result);
           
            expect(regexTest).toEqual(true);
        }

    });

    it('should test regex expression for a random birthday', () => { 
        let regex =  /^\d{4}-?\d{2}-?\d{2}$/;
        
        for(let i = 0; i < 1000; i++) { 
            let result = '';
            let alphaNum = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

                for (let j = 0; j < 12; j++) { 
                    if (j == 4 || j == 7) { 
                        result += '-'
                      
                    } else { 
                        result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
                    }
                };

            let testResult = regex.test(result);
            expect(testResult).toEqual(false);
        }
    });

    it('should generate a random creditcard number', () => { 

        for(let i = 0; i < 1000; i++) { 
            const result = generateCreditCard();
            // let regex =  /^\d{3}-?\d{3}-?\d{4}$/;
            let regex2 =  /^\d{16}$/;
            let regexTest = regex2.test(result);

            expect(regexTest).toEqual(true);
        }

    });

    it('should test regex expression for phone number', () => { 
        let regex2 =  /^\d{16}$/;
        
        for(let i = 0; i < 1000; i++) { 
            let result = '';
            let alphaNum = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

            for (let j = 0; j < 16; j++) { 
                 result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
                    }   

            let testResult = regex2.test(result);
            expect(testResult).toEqual(false);
        }

    });
    

});