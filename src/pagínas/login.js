import styles from "../Assets/css/login.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import imagem from "../Assets/img/img login/Mensagem.png"

export default function Login()
{

    const [dados, setDados] = useState({
        email: "",
        senha: ""
    })

    function pegar_dados(e)
    {
        switch (e.target.id) {
            case "email":
                setDados({
                    email: e.target.value,
                    senha: dados.senha
                })
                break

            case "senha":
                setDados({
                    email: dados.email,
                    senha: e.target.value
                })
                break
        }
    }

    async function login(dados2)
    {   
        await fetch(`http://localhost:3001/validar?email=${dados2.email}&senha=${dados2.senha}`).then(dados => dados.json()).then(async auteticacao => {
            if (auteticacao == false) {
                alert("Email ou senha estão incorretos")
    
            } else {
                await fetch(`http://localhost:3001/validar?email=${dados2.email}&senha=${dados2.senha}`).then(dados => dados.json()).then(dados => {
                    localStorage.setItem("usuario_id", dados.UsuarioID)
                })
    
                window.location.href = "/portal_artistas"
            }

        })
    }

    return(
        <div className={styles.corpo}>
            <div className={styles.parte1}>
                <h1 className={styles.titulo}>Bem-Vindo</h1>
                <p className={styles.texto}>Nosso Site? Registre-se</p>

                <form className={styles.box1}>
                    <input className={styles.campos_form} id="email" onChange={(e) => pegar_dados(e)} placeholder="Email:" type="text"/>
                    <input className={styles.campos_form} id="senha" onChange={(e) => pegar_dados(e)} placeholder="Senha:" type="password"/>

                    <input className={`${styles.campos_form} ${styles.botao_enviar}`} onClick={() => login(dados)} type="button" value="Entrar"/>

                    <Link to="/recuperar_senha"><p className={styles.esquece_senha}>Esqueceu a Senhar?</p></Link>

                    <hr className={styles.divisao}/>

                    <Link to="/criar_conta"><input className={`${styles.campos_form} ${styles.botao_azul}`} type="button" value="Criar uma contar"/></Link>
                </form>
            </div>
            
            <div className={styles.container_img}>
                <img className={styles.mensagem} src={imagem} alt="Desperte sua criatividade"/>
            </div>
        </div>
    )
}