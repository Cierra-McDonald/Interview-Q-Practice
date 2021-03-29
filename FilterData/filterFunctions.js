
const addAgeToObject = (actualData) => { 
    // actualData = actualData[0];

    // console.log('hellothere', actualData);
    console.log(typeof actualData, 'heeerrr')
   
    for (let i = 0; i < actualData.length; i++) { 
        let personsBirthday = actualData[i]['DOB'];
            console.log('person birthday', personsBirthday);
        let personsAge = calculateAge(personsBirthday);
            console.log('person age', personsAge);

        console.log(actualData[i]['Age'] = personsAge);
        

        
        // actualData[i] = ['Age'] = calculateAge(actualData.DOB);
    }
    return actualData;
    

}


// var result = arrOfObj.map(function(el) {
//     var o = Object.assign({}, el);
//     o.isActive = true;
//     return o;
//   })


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
    console.log(age)
    return age;

};

const eighteenToThirty = () => { 

};

const findDuplicateNames = () => { 


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