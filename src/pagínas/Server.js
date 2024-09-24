const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Para servir arquivos estáticos como HTML

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Rota para exibir o formulário
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/form.html'); // Certifique-se de que o caminho está correto
});

// Rota para lidar com o envio do formulário
app.post('/submit', (req, res) => {
    const { titulo, descricao, prazo_inscricao, criterios_selecao, organizador, categoria_artistica, detalhes_financiamento, processo_inscricao, data_publicacao } = req.body;

    const sql = `INSERT INTO editais (Titulo, Descricao, PrazoInscricao, CriteriosSelecao, Organizador, CategoriaArtistica, DetalhesFinanciamento, ProcessoInscricao, DataPublicacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    db.run(sql, [titulo, descricao, prazo_inscricao, criterios_selecao, organizador, categoria_artistica, detalhes_financiamento, processo_inscricao, data_publicacao], function(err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Um registro foi inserido com o ID ${this.lastID}`);
        res.send('Edital enviado com sucesso!');
    });
});

// Fecha a conexão com o banco de dados quando o servidor é encerrado
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Conexão com o banco de dados fechada.');
        process.exit(0);
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
