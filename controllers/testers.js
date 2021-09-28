const Tester = require('../Models/testers');

//List out all the testers with details
module.exports.testerDetails = async(req,res) => {
    const tester = await Tester.find({});
    res.send(tester);
}

//List out all testers name
module.exports.testersName = async(req,res) => {
    const testersName = [];
    const testers = await Tester.find({});
    for(let tester of testers) {
        testersName.push(tester.name);
    }
    res.send(testersName);
}

//List out all testers whose gender is Male
module.exports.maleTesters = async(req,res) => {
    const { gender } = req.query;
    const maleTestersName = [];
    if(gender === 'Male') {
        testers = await Tester.find({gender: 'Male'});
    }
    else {
        return res.send('<h1>Enter correct gender as Male</h1>');
    }
    for(let tester of testers) {
        maleTestersName.push(tester.name);
    }
    res.send(maleTestersName);
}

/* Use Postman to visualize delete endpoint
Delete all tester whose credit is 0 */
module.exports.deleteTesters = async(req,res) => {
    const { credit } = req.query;
    if(credit == 0) {
        console.log(credit);
        tester = await Tester.deleteMany({credit});
    }
    else {
        return res.send(`Unable to delete tester with ${credit}`);
    }
    return res.send(tester);
}

/* Use Postman to visualize put endpoint
Passing the important data through query is not good practise
instead used json or form data to pass and retrieve the data using req.body
Example: pass the data as json method like below
visualize using postman
{
    "taskID": "1990",
    "name": "Manoj Kumar Thapa",
    "completed": false,
    "level": "easy"
} */
module.exports.updateTesterTasks = async(req,res) => {
    const task = req.body;
    const testers = await Tester.find({});
    for(let tester of testers) {
        tester.testerTasks.push({
            taskID: task.taskID,
            name: task.name,
            level: task.level
        })
        await tester.save();
    }
    res.send('Data Updated');
}

//List out the task of particular id
module.exports.showTasks = async(req,res) => {
    const { id } = req.params;
    const tester = await Tester.findById(id);
    res.send(tester.testerTasks);
}

//List out all completed Task
module.exports.completedTasks = async(req,res) => {
        const task_completed = [];
        const testers = await Tester.find({});
        for(let tester of testers) {
            for(let task of tester.testerTasks) {
                if(task.isCompleted) {
                    task_completed.push(task);
                }
            } 
        }
        res.send(task_completed);
}

/* Use Postman to visualize put endpoint
Add testerTask whose annual income is greater than 32424 */
module.exports.testerTaskwithgtincome = async(req,res) => {
    const { income } = req.query;
    const testers = await Tester.find({});
    for(let tester of testers) {
        if(tester.annualincome > income) {
            tester.testerTasks.push({
                taskID: '1212',
                completed: false,
                name: '',
                level: 'medium'
            })
            await tester.save();
        }
    }
    res.send('Data Updated');
}