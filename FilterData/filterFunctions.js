const writeToCSV = require("../CustomerSecurity/writeToCSV");

const addAgeToObject = (actualData) => { 
  
    for (let i = 0; i < actualData.length; i++) { 
        let personsBirthday = actualData[i]['DOB'];
            // console.log('person birthday', personsBirthday);
        let personsAge = calculateAge(personsBirthday);
            // console.log('person age', personsAge);

        actualData[i]['Age'] = personsAge;
        
    }
    writeToCSV(actualData);

    return actualData;
    
}

const calculateAge = (dateString) => { 
    let today = new Date();
    // console.log(today, 'today');
    let birthdate = new Date(dateString);
    //  console.log(birthdate, 'birth');

    let age = today.getFullYear() - birthdate.getFullYear();
    // console.log(age);

    let moreSpecificDate = today.getMonth() - birthdate.getMonth();
    if ( moreSpecificDate < 0 || (moreSpecificDate === 0 && today.getDate < birthdate.getDate())) { 
        age--;
    }
    // console.log(age)
    return age;

};

const eighteenToThirty = (actualData) => { 
    let ageGroup = [];
    
    for (let i = 0; i < actualData.length; i++) { 
       
        if (actualData[i]['Age'] >= 18 && actualData[i]['Age'] <= 30) { 
            ageGroup.push(actualData[i])
        };
    
    }
   
    return ageGroup;
};

const findDuplicateNames = () => { 
    let arrayOfNames = [];
    


};

const findDuplicateBirthdays = () => { 

}

module.exports = { 
    addAgeToObject,
    calculateAge,
    eighteenToThirty,
    findDuplicateNames, 
    findDuplicateBirthdays
}