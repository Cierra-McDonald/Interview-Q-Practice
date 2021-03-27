const ObjectsToCsv = require('objects-to-csv');


const writeToCSV = async (arrayOfCustomers) => {
    try {
        let csv = new ObjectsToCsv(arrayOfCustomers);
        await csv.toDisk('./test.csv');
        
    } catch (err) {
        console.log(err);
        return false;
    }
    return true;
};

module.exports = writeToCSV;
