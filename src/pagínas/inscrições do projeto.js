<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Edital</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        form {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: auto;
        }
        h2 {
            text-align: center;
            color: #333;
        }
        label {
            display: block;
            margin: 10px 0 5px;
            color: #333;
        }
        input, textarea, select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            padding: 15px;
            border-radius: 5px;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <form action="/editais" method="post">
        <h2>Cadastro de Edital</h2>

        <label for="titulo">Título do Edital:</label>
        <input type="text" id="titulo" name="titulo" required>

        <label for="descricao">Descrição:</label>
        <textarea id="descricao" name="descricao" required></textarea>

        <label for="categoria">Categoria Artística:</label>
        <select id="categoria" name="categoria" required>
            <option value="musica">Música</option>
            <option value="artes-visuais">Artes Visuais</option>
            <option value="danca">Dança</option>
            <!-- Adicione mais opções conforme necessário -->
        </select>

        <label for="prazo">Prazo de Inscrição:</label>
        <input type="date" id="prazo" name="prazo" required>

        <label for="detalhes">Detalhes do Financiamento:</label>
        <textarea id="detalhes" name="detalhes" required></textarea>

        <label for="criterios">Critérios de Seleção:</label>
        <textarea id="criterios" name="criterios" required></textarea>

        <label for="processo">Processo de Inscrição:</label>
        <textarea id="processo" name="processo" required></textarea>

        <label for="organizador">Contato do Organizador:</label>
        <input type="text" id="organizador" name="organizador" required>

        <input type="submit" value="Cadastrar Edital">

    </form>

</body>
</html>
