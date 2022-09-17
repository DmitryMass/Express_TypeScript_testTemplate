import { Router } from 'express';
import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from '../controllers/todos';
import multer from 'multer';

const upload = multer();

const router = Router();

router.post('/', upload.none(), createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;
