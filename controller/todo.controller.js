const TodoServices = require('../services/todo.services');

exports.createTodo = async(req, res, next) => {
    try {
        const {userId, title, desc} = req.body;

        let todo = await TodoServices.createTodo(userId,title,desc);
        res.json({status:true,success:todo});

    } catch (error) {
        
    }
}

exports.getUserTodo = async(req, res, next) => {
    try {
        const {userId} = req.body;

        let todo = await TodoServices.getTodoData(userId);
        res.json({status:true,success:todo});

    } catch (error) {
        
    }
}