const mongoose = require('mongoose');

const testerTask = new mongoose.Schema({
    isCompleted: Boolean,
    reference: String,
    completedTime: String
})

const testerSchema = new mongoose.Schema({
    languages: [String],
    device: [String],
    os: [String],
    credit: Number,
    verified: Boolean,
    name: String,
    email: String,
    dob: Number,
    gender: String,
    occupation: String,
    occupationDetails: String,
    annualincome: Number,
    state: String,
    city: String,
    country: String,
    testerTasks: [
        { 
            isCompleted: Boolean,
            reference: String,
            completedTime: String,
            taskID: String,
            completed: Boolean,
            name: String,
            level: String
        }
    ]
})
const Tester = mongoose.model('Tester',testerSchema);

module.exports = Tester;