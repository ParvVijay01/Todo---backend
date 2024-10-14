const TodoModel = require('../model/todo.model');

class TodoServices{
    static async createTodo(userId, title, desc){
        const createTodo = new TodoModel({userId, title, desc});
        return await createTodo.save();
    }

    static async getTodoData(userId){
        const TodoData = await TodoModel.find({userId})
        return TodoData;
    }
}

module.exports = TodoServices;