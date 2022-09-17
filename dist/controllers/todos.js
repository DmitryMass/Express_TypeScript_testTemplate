"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { text } = body;
    console.log(body);
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).send({ message: 'Created the todo', createTodo: newTodo });
});
exports.createTodo = createTodo;
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send({ todos: TODOS });
});
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.send({ message: 'Updated', updatedTodo: TODOS[todoIndex] });
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.send({ message: 'Todo Deleted!' });
});
exports.deleteTodo = deleteTodo;
// const body = req.body;
// const { text } = body;
// console.log(body); //
// const newTodo = new Todo(Math.random().toString(), text);
// TODOS.push(newTodo); // x-www-form-urlencoded in postman
