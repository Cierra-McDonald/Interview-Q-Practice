const { generateName, generatePhoneNum, generateDOB, generateSSC, generateUserName } = require("./customerUtils");



const generateCustomerObj = () => { 

    return { 
        c_name: generateName(), 
        user_name: generateUserName(),
        phone: generatePhoneNum(),
        DOB: generateDOB(),
        SSC: generateSSC()
    }

}
module.exports = generateCustomerObj;