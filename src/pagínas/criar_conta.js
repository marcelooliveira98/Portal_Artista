import styles from "../Assets/css/criar_conta.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Criar_conta() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        perfil: "",
        area: "",
        biografia: "",
        link: "",
        foto: "",
        senha: "",
    });

    function dados_form(e) {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    }

    async function enviar(nome, email, perfil, area, biografia, link, foto, senha) {
        if (perfil.length === 0) {
            perfil = "Público Geral";
        }

        try {
            const response = await fetch(`http://localhost:3001/enviar_cadastro_de_artista`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, perfil, area, biografia, link, foto, senha }),
            });

            const result = await response.json();

            if (result.token) {
                localStorage.setItem("token", result.token);
                alert("Conta criada com sucesso!");
                window.location.href = "/portal_artistas"; // Redireciona para a página protegida
            } else {
                alert("Erro ao criar a conta. Verifique os dados e tente novamente.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao criar a conta. Tente novamente mais tarde.");
        }
    }

    return (
        <div className={styles.corpo}>
            <form className={styles.formulario}>
                <h1 className={styles.titulo}>Abra uma conta</h1>
                <p className={styles.texto}>É gratuito</p>

                <input className={styles.campos_form} id="nome" onChange={dados_form} placeholder="Nome:" type="text" />
                <input className={styles.campos_form} id="email" onChange={dados_form} placeholder="Seu e-mail:" type="text" />
                <select className={styles.campos_form} id="perfil" onChange={dados_form}>
                    <option>Público Geral</option>
                    <option>Público Privado</option>
                </select>
                <input className={styles.campos_form} id="area" onChange={dados_form} placeholder="Área de atuação:" type="text" />
                <textarea className={styles.campos_form} id="biografia" onChange={dados_form} placeholder="Insira sua Biografia:" />
                <input className={styles.campos_form} id="link" onChange={dados_form} placeholder="Insira o link dos seus repositórios:" type="text" />
                <input className={styles.campos_form} id="senha" onChange={dados_form} placeholder="Senha:" type="password" />
                <input className={styles.campos_form} id="foto" onChange={dados_form} placeholder="Link da foto de perfil:" type="text" />

                <div className={styles.abrir_conta}>
                    <Link to="/login">
                        <input className={styles.botao_abrir_conta} onClick={() => enviar(form.nome, form.email, form.perfil, form.area, form.biografia, form.link, form.foto, form.senha)} type="button" value="Abrir conta" />
                    </Link>
                </div>
            </form>
        </div>
    );
}
