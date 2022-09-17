import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

interface PersoneModel {
    text: string;
}

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = async (req, res, next) => {
    const body = req.body as PersoneModel;
    const { text } = body;

    console.log(body);
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).send({ message: 'Created the todo', createTodo: newTodo });
};

export const getTodos: RequestHandler = async (req, res, next) => {
    res.status(200).send({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = async (
    req,
    res,
    next
) => {
    const todoId = req.params.id;

    const updatedText = (req.body as { text: string }).text;

    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

    res.send({ message: 'Updated', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = async (
    req,
    res,
    next
) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }

    TODOS.splice(todoIndex, 1);

    res.send({ message: 'Todo Deleted!' });
};
// const body = req.body;
// const { text } = body;
// console.log(body); //
// const newTodo = new Todo(Math.random().toString(), text);

// TODOS.push(newTodo); // x-www-form-urlencoded in postman
