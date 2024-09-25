import styles from "../Assets/css/criar_conta.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Criar_conta()
{
    const [form, setForm] = useState({
        nome: "", 
        email:"", 
        perfil: "",
        area: "",
        biografia: "",
        link: "",
        foto: "",
        senha:"", 
    })

    function dados_form(e)
    {
        switch (e.target.id) {
            case "nome":
                setForm({
                    nome: e.target.value, 
                    email: form.email, 
                    perfil: form.perfil,
                    area: form.area,
                    biografia: form.biografia,
                    link: form.link,
                    foto: form.foto,
                    senha: form.senha
                })
                break

            case "email":
                setForm({
                    nome: form.nome, 
                    email: e.target.value, 
                    perfil: form.perfil,
                    area: form.area,
                    biografia: form.biografia,
                    link: form.link,
                    foto: form.foto,
                    senha: form.senha, 
                })
                break

            case "perfil":
                setForm({
                    nome: form.nome, 
                    email: form.email, 
                    perfil: e.target.value,
                    area: form.area,
                    biografia: form.biografia,
                    link: form.link,
                    foto: form.foto,
                    senha: form.senha
                })
                break

            case "area":
                setForm({
                    nome: form.nome, 
                    email: form.email, 
                    perfil: e.target.value,
                    area: e.target.value,
                    biografia: form.biografia,
                    link: form.link,
                    foto: form.foto,
                    senha: form.senha, 
                })
                break

            case "biografia":
                setForm({
                    nome: form.nome, 
                    email: form.email, 
                    perfil: e.target.value,
                    area: form.area,
                    biografia: e.target.value,
                    link: form.link,
                    foto: form.foto,
                    senha: form.senha, 
                })
                break

            case "link":
                setForm({
                    nome: form.nome, 
                    email: form.email, 
                    perfil: e.target.value,
                    area: form.area,
                    biografia: form.biografia,
                    link: e.target.value,
                    foto: form.foto,
                    senha: form.senha, 
                })
                break

            case "foto":
                setForm({
                    nome: form.nome, 
                    email: form.email, 
                    perfil: e.target.value,
                    area: form.area,
                    biografia: form.biografia,
                    link: form.link,
                    foto: e.target.value,
                    senha: form.senha, 
                })
                break
            
            case "senha":
                setForm({
                    nome: form.nome, 
                    email: form.email, 
                    perfil: form.perfil,
                    area: form.area,
                    biografia: form.biografia,
                    link: form.link,
                    foto: form.foto,
                    senha: e.target.value
                })
                break
        }
    }

    function enviar(nome, email, perfil, area, biografia, link, foto, senha)
    {
        console.log(area)
        if (perfil.length == 0) {
            perfil = "Público Geral"
        }
        fetch(`http://localhost:3001/enviar_cadastro_de_artista?area=${area}&biografia=${biografia}&link=${link}&foto=${foto}&nome=${nome}&email=${email}&perfil=${perfil}&senha=${senha}`)
    }

    return(
        <div className={styles.corpo}>
            <form className={styles.formulario}>
                <h1 className={styles.titulo}>Abra uma conta</h1>
                <p className={styles.texto}>É gratuito</p>

                {/* Campo nome */}
                <input className={styles.campos_form} id="nome" onChange={(e) => dados_form(e)} placeholder="Nome:" type="text"/>
                
                {/* Campo email */}
                <input className={styles.campos_form} id="email" onChange={(e) => dados_form(e)} placeholder="Seu e-mail:" type="text"/>

                {/* Perfil */}
                <select className={styles.campos_form} id="perfil" onChange={(e) => dados_form(e)}>
                    <option>Público Geral</option>
                    <option>Público Privado</option>
                </select>

                {/* Area de atuação */}
                <input className={styles.campos_form} id="area" onChange={(e) => dados_form(e)} placeholder="Area de atuação:" type="text"/>

                {/* Biografia */}
                <textarea className={styles.campos_form} id="biografia" onChange={(e) => dados_form(e)} placeholder="Insira sua Biografia:" type="text"></textarea>

                {/* Link */}
                <input className={styles.campos_form} id="link" onChange={(e) => dados_form(e)} placeholder="Insira o link dos seu repositorios:" type="text"/>

                {/* campo senha */}
                <input className={styles.campos_form} id="senha" onChange={(e) => dados_form(e)} placeholder="Senha:" type="password"/>
                
                {/* Foto de perfil */}
                <input className={styles.campos_form} id="foto" onChange={(e) => dados_form(e)} placeholder="Coloque o link da foto de perfil:" type="text"/>
                
                {/* div de botão de abrir conta */}

                <div className={styles.abrir_conta}>

                    {/* Botão criar conta */}
                    <Link to="/login"><input className={styles.botao_abrir_conta} onClick={() => {enviar(form.nome, form.email, form.perfil, form.area, form.biografia, form.link, form.foto, form.senha)}} type="button" value="Abrir conta"/></Link>
                </div>
            </form>
        </div>
    )
}