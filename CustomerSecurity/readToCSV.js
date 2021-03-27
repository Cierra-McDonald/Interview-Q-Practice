const csv = require('csvtojson');

const readCSV = async (path) => { 
    try { 
       let jsonArray = await csv().fromFile(path)
        // console.log('hello', jsonArray);
        return [true, jsonArray];

    } catch (err) { 
        console.log(err);
        return false;
    }
};

module.exports = readCSV;
