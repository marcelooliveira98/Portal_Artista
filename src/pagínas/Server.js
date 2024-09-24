const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Configura o body-parser para receber dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('./bancoDeDados.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Rota para exibir o formulário HTML
app.get('/cadastro-edital', (req, res) => {
    res.sendFile(__dirname + '/caminho/para/seu/formulario.html');
});

// Rota para tratar os dados do formulário
app.post('/editais', (req, res) => {
    const { titulo, descricao, categoria, prazo, detalhes, criterios, processo, organizador } = req.body;

    const sql = `INSERT INTO editais (Titulo, Descricao, CategoriaArtistica, PrazoInscricao, DetalhesFinanciamento, CriteriosSelecao, ProcessoInscricao, Organizador, DataPublicacao)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, date('now'))`;

    db.run(sql, [titulo, descricao, categoria, prazo, detalhes, criterios, processo, organizador], (err) => {
        if (err) {
            console.error('Erro ao inserir os dados no banco de dados:', err);
            res.status(500).send('Erro ao cadastrar o edital.');
        } else {
            res.send('Edital cadastrado com sucesso!');
        }
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
