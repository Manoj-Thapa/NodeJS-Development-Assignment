const mongoose = require('mongoose');
const data = require('../data');
const Tester = require('../Models/testers');

mongoose.connect('mongodb://localhost:27017/testerDB', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Tester Database connected successfully');
    })
    .catch(err => {
        console.log('Error in connecting Tester DB', err);
    })

const seedDB = async () => {
    await Tester.deleteMany({});
    for(let testerData of data) {
        const tester = new Tester({
            languages: testerData.languages,
            device: testerData.device,
            os: testerData.os,
            credit: testerData.credit,
            verified: testerData.verified,
            name: testerData.name,
            email: testerData.email,
            dob: testerData.dob,
            gender: testerData.gender,
            occupation: testerData.occupation,
            occupationDetails: testerData.occupationDetails,
            annualincome: testerData.annualincome,
            state: testerData.state,
            city: testerData.city,
            country: testerData.country,
            testerTasks: testerData.testerTasks
        })
        await tester.save();
    }
}

seedDB();
