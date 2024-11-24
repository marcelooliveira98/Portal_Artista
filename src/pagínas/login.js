import styles from "../Assets/css/login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import imagem from "../Assets/img/img login/Mensagem.png";

export default function Login() {
    const [dados, setDados] = useState({
        email: "",
        senha: ""
    });

    function pegar_dados(e) {
        switch (e.target.id) {
            case "email":
                setDados({
                    ...dados,
                    email: e.target.value
                });
                break;
            case "senha":
                setDados({
                    ...dados,
                    senha: e.target.value
                });
                break;
            default:
                break;
        }
    }

    function login() {
        try {
            fetch(`http://localhost:3001/validar?email=${dados.email}&senha=${dados.senha}`).then(dados2 => dados2.json()).then(dados2 => {
                if (dados2.user_valido === true) {
                    // Armazena o token JWT no localStorage
                    localStorage.setItem("token", dados2.token)
                    window.location.href = "/portal_artistas"; // Redireciona para a página protegida

                } else {
                    alert("Email ou senha estão incorretos");

                }
            });

        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Ocorreu um erro. Tente novamente mais tarde.");
        }
    }

    return (
        <div className={styles.corpo}>
            <div className={styles.parte1}>
                <h1 className={styles.titulo}>Bem-Vindo</h1>
                <p className={styles.texto}>Nosso Site? Registre-se</p>

                <form className={styles.box1}>
                    <input
                        className={styles.campos_form}
                        id="email"
                        onChange={(e) => pegar_dados(e)}
                        placeholder="Email:"
                        type="text"
                    />
                    <input
                        className={styles.campos_form}
                        id="senha"
                        onChange={(e) => pegar_dados(e)}
                        placeholder="Senha:"
                        type="password"
                    />
                    <input
                        className={`${styles.campos_form} ${styles.botao_enviar}`}
                        onClick={() => login()}
                        type="button"
                        value="Entrar"
                    />

                    <Link to="/recuperar_senha">
                        <p className={styles.esquece_senha}>Esqueceu a Senha?</p>
                    </Link>

                    <hr className={styles.divisao} />

                    <Link to="/criar_conta">
                        <input
                            className={`${styles.campos_form} ${styles.botao_azul}`}
                            type="button"
                            value="Criar uma conta"
                        />
                    </Link>
                </form>
            </div>

            <div className={styles.container_img}>
                <img className={styles.mensagem} src={imagem} alt="Desperte sua criatividade" />
            </div>
        </div>
    );
}
