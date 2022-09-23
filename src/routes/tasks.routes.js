const { getTasks, postTask, putTask, deleteTask } = require('../../controllers/task.controllers');
const tasks = require('../models/tasks');


const router = require('express').Router();



router.get('/task', getTasks);

router.post('/task', postTask);

router.put('/task/:IdTarea', putTask);

router.delete('/task/:IdTarea', deleteTask)

module.exports = router
