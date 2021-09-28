const express = require('express');
const testers = require('../controllers/testers');
const router = express.Router();

router.get('/', testers.testerDetails);

router.get('/testers', testers.testersName);

router.route('/tester')
    .get(testers.maleTesters)
    .delete(testers.deleteTesters)
    .put(testers.testerTaskwithgtincome);

router.put('/tester/tester-tasks', testers.updateTesterTasks);

router.get('/tester/:id', testers.showTasks);

router.get('/task-completed', testers.completedTasks);

module.exports = router;