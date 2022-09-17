"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const router = (0, express_1.Router)();
router.post('/', upload.none(), todos_1.createTodo);
router.get('/', todos_1.getTodos);
router.patch('/:id', todos_1.updateTodo);
router.delete('/:id', todos_1.deleteTodo);
exports.default = router;
