const { generateName, generatePhoneNum, generateDOB, generateSSC, generateUserName, generatePassword } = require("./customerUtils");



const generateCustomerObj = () => { 

    return {
        c_name: generateName(), 
        user_name: generateUserName(),
        password: generatePassword(),
        phone: generatePhoneNum(),
        DOB: generateDOB(),
        SSC: generateSSC()
    }

}
module.exports = generateCustomerObj;