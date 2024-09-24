const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para analisar os dados enviados no formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para exibir o formulário HTML
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'formulario.html')); // Insira o caminho do seu arquivo HTML
});

// Rota para processar os dados do formulário
app.post('/submit', (req, res) => {
    const { nome, 'data-nascimento': dataNascimento, endereco, telefone, email, 'nome-projeto': nomeProjeto, objetivo, justificativa, cronograma, portifolio } = req.body;

    // Exibir os dados no console (para ver que estão chegando corretamente)
    console.log({
        nome,
        dataNascimento,
        endereco,
        telefone,
        email,
        nomeProjeto,
        objetivo,
        justificativa,
        cronograma,
        portifolio
    });

    // Enviar uma resposta de sucesso ao cliente
    res.send('Dados do formulário recebidos com sucesso!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
