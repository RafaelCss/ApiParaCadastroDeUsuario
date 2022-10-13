import express from 'express';
import cors from 'cors';
import router  from './rotas/routes';
import logger from 'morgan';
;
const app = express();
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    console.log('chegou!!')
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
     res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(express.json());
app.use(logger('dev'));
app.use('/', router);



export default app;