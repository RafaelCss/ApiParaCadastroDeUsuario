import express from 'express';
import cors from 'cors';
import router  from './rotas/routes';
import logger from 'morgan';

 const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use('/', router);


export default app;