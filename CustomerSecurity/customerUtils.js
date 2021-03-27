const { uniqueNamesGenerator, adjectives, names, colors, NumberDictionary } = require('unique-names-generator');


const generateName = () => { 
    let uniqueName = uniqueNamesGenerator({
        dictionaries: [names]
    });
    // console.log(uniqueName);
    return uniqueName;
};

const generateUserName = () => { 
    const numberDictionary = NumberDictionary.generate({ min: 100, max: 999 });

    let username = uniqueNamesGenerator({
        dictionaries: [colors, adjectives, numberDictionary],
        style: 'capital',
        separator: '',
        length: 3,
    })
    // console.log(username);
    return username;
}

const generatePhoneNum = () => { 
    let minG1 = 100;
    let maxG1 = 999;
    let g1 = Math.floor(Math.random() * (maxG1 - minG1 + 1)) + minG1;

    let minG2 = 100;
    let maxG2 = 999;
    let g2 = Math.floor(Math.random() * (maxG2 - minG2 + 1)) + minG2;

    let minG3 = 1000;
    let maxG3 = 9999;
    let g3 = Math.floor(Math.random() * (maxG3 - minG3 + 1)) + minG3;

    let phone = `${g1}-${g2}-${g3}`;
    return phone;
};

const generateDOB = () => { 

    let start = new Date(1921, 0, 1);
    let end = new Date();

    let birthday = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    birthday = birthday.toISOString().slice(0, 10);
    
    return birthday;

};

const generateSSC = () => { 
    
    let minG1 = 100;
    let maxG1 = 999;
    let g1 = Math.floor(Math.random() * (maxG1 - minG1 + 1)) + minG1;
    

    let minG2 = 10;
    let maxG2 = 99
    let g2 = Math.floor(Math.random() * (maxG2 - minG2 + 1) ) + minG2;
    

    let minG3 = 1000;
    let maxG3 = 9999;
    let g3 = Math.floor(Math.random() * (maxG3 - minG3 + 1)) + minG3;
    

    let ssc = `${g1}-${g2}-${g3}`;
    return ssc;
}

const generateCreditCard = () => { 

    let minG1 = 4000;
    let maxG1 = 4999;
    let g1 = Math.floor(Math.random() * (maxG1 - minG1 + 1)) + minG1;

    let minG2 = 6000;
    let maxG2 = 6999;
    let g2 = Math.floor(Math.random() * (maxG2 - minG2 + 1)) + minG2;

    let minG3 = 7000;
    let maxG3 = 7999;
    let g3 = Math.floor(Math.random() * (maxG3 - minG3 + 1)) + minG3;

    let minG4 = 1000;
    let maxG4 = 9999;
    let g4 = Math.floor(Math.random() * (maxG4 - minG4 + 1)) + minG4;

    let creditCard = `${g1}${g2}${g3}${g4}`;
    console.log(creditCard);
    return creditCard;
}





module.exports = { 
    generateName,
    generatePhoneNum,
    generateDOB,
    generateSSC,
    generateUserName,
    generateCreditCard
}