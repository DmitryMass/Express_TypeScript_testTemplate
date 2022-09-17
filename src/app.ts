import express, { Request, Response, NextFunction } from 'express';
import { json, urlencoded } from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

app.use(json()); //parse body request
app.use(
    urlencoded({
        // to support URL-encoded bodies
        extended: true,
    })
);

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
}); // error middleware

app.listen(3000);
