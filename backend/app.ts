import express, {Application, Request, Response, NextFunction, json} from 'express';

const app: Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;

