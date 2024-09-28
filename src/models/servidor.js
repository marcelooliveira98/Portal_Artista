import express from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from 'uuid';

const app = express()
const prisma = new PrismaClient()

app.use(
    cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
)

// Enviar o cadastro do artista e usuario até o banco
app.get("/enviar_cadastro_de_artista", (request, response) => {
    const nome = request.query.nome
    const email = request.query.email
    const perfil = request.query.perfil
    const senha = request.query.senha
    const area = request.query.area
    const biografia = request.query.biografia
    const link = request.query.link
    const foto = request.query.foto

    const id_user = uuidv4()

    async function main()
    {
        await prisma.usuario.create({
            data: {
                UsuarioID: id_user,
                Nome: nome,
                Email: email,
                Senha: senha,
                Perfil: perfil,
                DataCadastro: new Date().toISOString(),
                Ativo: true
            }
        })

        setTimeout(async () => {
            await prisma.perfisArtistas.create({
                data: {
                    UsuarioID: id_user,
                    AreaAtuacao: area,
                    Biografia: biografia,
                    LinkPortfolio: link,
                    FotoPerfil: foto
                }
            }), 30000
        })
    }

    main().then(() => prisma.$disconnect).catch((e) => {
        console.log(e)
        prisma.$disconnect()
        process.exit(1)
    })
})

app.get("/validar", async (request, response) => {
    const email = request.query.email
    const senha = request.query.senha

    const if_email_true = await prisma.usuario.findMany({
        where: {
            "Email": email
        }
    })

    try{
        if (senha == if_email_true[0].Senha) {
            response.send(if_email_true[0])
        } else {
            response.send(false)
        }
    } catch (e) {
        response.send(false)
    }
})

app.get("/proj_collabe", async (request, response) => {
    const titulo = request.query.titulo
    const descricao = request.query.descricao
    const area = request.query.area
    const localizacao = request.query.localizacao
    const tipo = request.query.tipo
    const id_criador = request.query.criadorid

    async function main()
    {
        await prisma.projetosColaborativos.create({
            data: {
                Titulo: titulo,
                Descricao: descricao,
                AreaAtuacaoNecessaria: area,
                Localizacao: localizacao,
                TipoColaboracao: tipo.toString(),
                CriadorID: id_criador,
                DataCriacao: new Date().toISOString()
            }
        })
    }

    main().then(async () => await prisma.$disconnect()).catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
})

app.get("/get_project", (request, response) => {
    const user_id = request.query.id

    async function main()
    {
        let dados = await prisma.projetosColaborativos.findMany({
            where: {
                CriadorID: user_id
            }
        })

        if (dados.length > 0) {
            for (let i = 0; i < dados.length; i++) {
                delete dados[i].ProjetoID
                delete dados[i].AreaAtuacaoNecessaria
                delete dados[i].Localizacao
                delete dados[i].TipoColaboracao
                delete dados[i].CriadorID
                delete dados[i].DataCriacao
            }
    
            response.send(dados)

        } else {
            response.send(false)
        }
    }

    main().then(async () => await prisma.$disconnect()).catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
})

app.get('/editais', (req, res) => {
    const titulo = req.query.titulo
    const descricao = req.query.descricao
    const categoria = req.query.categoria
    let prazo = req.query.prazo
    prazo = new Date(prazo).toISOString()
    const detalhes = req.query.detalhes
    const criterios = req.query.criterios
    const processo = req.query.processo
    const organizador = req.query.organizador

    async function main()
    {
        await prisma.editais.create({
            data: {
                Titulo: titulo,
                Descricao: descricao,
                CategoriaArtistica: categoria,
                PrazoInscricao: prazo,
                DetalhesFinanciamento: detalhes,
                CriteriosSelecao: criterios,
                ProcessoInscricao: processo,
                Organizador: organizador,
                DataPublicacao: new Date().toISOString()
            }
        })
    }

    main().then(async () => await prisma.$disconnect()).catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
});

app.listen(3001, () => {console.log("Servidor rodando")})