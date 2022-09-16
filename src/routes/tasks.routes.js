const { getTasks, postTask, putTask, deleteTask } = require('../controllers/tasks.controller');


const router = require('express').Router();



router.get('/task', getTasks);

router.post('/task', postTask);

router.put('/task', putTask);

router.delete('/task', deleteTask)
