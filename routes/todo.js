const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Todo = require('../models/Todo.js');
const TodoController = require('../Controllers/TodoController.js');

router.get('/', (req, res, next) => {
    Todo.find((err, products) => {
        if (err) return next(err);
        res.json(products);
    })
})


router.get('/todos/:user', TodoController.getAllTodos);
router.post('/todos/create', TodoController.AddTodo);
router.delete('/todos/delete/:id', TodoController.DeletedTodo);
router.put('/todos/update/:id', TodoController.UpdateTodo);
router.put('/todos/completed/:id', TodoController.CompletedTodo);


module.exports = router;