<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal do Artista - Inscrição</title>
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
        input, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        textarea {
            height: 100px;
            resize: none;
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

    <form action="/submit" method="post">
        <h2>Formulário de Inscrição - Portal do Artista</h2>

        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="data-nascimento">Data de Nascimento:</label>
        <input type="date" id="data-nascimento" name="data-nascimento" required>

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="nome-projeto">Nome do Projeto:</label>
        <input type="text" id="nome-projeto" name="nome-projeto" required>

        <label for="objetivo">Objetivo do Projeto:</label>
        <textarea id="objetivo" name="objetivo" required></textarea>

        <label for="justificativa">Justificativa do Projeto:</label>
        <textarea id="justificativa" name="justificativa" required></textarea>

        <label for="cronograma">Cronograma de Execução:</label>
        <textarea id="cronograma" name="cronograma" required></textarea>

        <label for="portifolio">Portfólio (link ou descrição):</label>
        <textarea id="portifolio" name="portifolio" required></textarea>

        <input type="submit" value="Enviar Inscrição">

    </form>

</body>
</html>
