<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal do Artista - Editais</title>
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
        <h2>Formulário de Edital - Portal do Artista</h2>

        <label for="titulo">Título do Edital:</label>
        <input type="text" id="titulo" name="titulo" required>

        <label for="descricao">Descrição do Edital:</label>
        <textarea id="descricao" name="descricao" required></textarea>

        <label for="prazo_inscricao">Prazo de Inscrição:</label>
        <input type="date" id="prazo_inscricao" name="prazo_inscricao" required>

        <label for="criterios_selecao">Critérios de Seleção:</label>
        <textarea id="criterios_selecao" name="criterios_selecao" required></textarea>

        <label for="organizador">Organizador:</label>
        <input type="text" id="organizador" name="organizador" required>

        <label for="categoria_artistica">Categoria Artística:</label>
        <input type="text" id="categoria_artistica" name="categoria_artistica" required>

        <label for="detalhes_financiamento">Detalhes de Financiamento:</label>
        <textarea id="detalhes_financiamento" name="detalhes_financiamento" required></textarea>

        <label for="processo_inscricao">Processo de Inscrição:</label>
        <textarea id="processo_inscricao" name="processo_inscricao" required></textarea>

        <label for="data_publicacao">Data de Publicação:</label>
        <input type="date" id="data_publicacao" name="data_publicacao" required>

        <input type="submit" value="Enviar Edital">
    </form>

</body>
</html>
