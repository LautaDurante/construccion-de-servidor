const { getTasks, postTask, putTask, deleteTask } = require('../../controllers/task.controllers');
const tasks = require('../models/tasks');


const router = require('express').Router();



router.get('/task', getTasks);

router.post('/task', postTask);

router.put('/task', putTask);

router.delete('/task', deleteTask)

module.exports = router
