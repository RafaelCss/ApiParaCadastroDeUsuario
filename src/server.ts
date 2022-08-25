import  app  from "./app";


const porta = process.env.PORT || 3334;

const server = app.listen(porta, () => console.log(`rodando na porta : ${porta}...`));

process.on('SIGINT', () => {
    console.log('\n interrompendo o servidor');
    server.close();
    console.log('\n aplicação finalizada');
});