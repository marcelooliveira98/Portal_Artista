import styles from "../Assets/css/criar_conta.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

export default function Criar_conta() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        perfil: "Público Geral",
        area: "",
        biografia: "",
        link: "",
        foto: "",
        senha: "",
    });

    const [erro, setErro] = useState(""); 
    const navigate = useNavigate(); 

    function dados_form(e) {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    }

    // Função para validação e envio dos dados
    async function enviar() {
        if (!form.nome || !form.email || !form.area || !form.senha) {
            setErro("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        try {
            const resposta = await fetch("http://localhost:3001/enviar_cadastro_de_artista", {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (resposta.ok) {
                alert("Conta criada com sucesso!");
                navigate("/portal_artistas"); 
            } else {
                const erro = await resposta.json();
                setErro(erro.message || "Erro ao criar a conta. Tente novamente.");
            }

        } catch (error) {
            console.error("Erro:", error);
            setErro("Erro ao criar a conta. Verifique os dados e tente novamente.");
        }
    }

    return (
        <div className={styles.corpo}>
            <form className={styles.formulario}>
                <h1 className={styles.titulo}>Abra uma conta</h1>
                <p className={styles.texto}>É gratuito</p>

                {/* Exibindo mensagem de erro, se houver */}
                {erro && <p className={styles.erro}>{erro}</p>}

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
                    <button className={styles.botao_abrir_conta} onClick={enviar} type="button">Abrir conta</button>
                </div>
            </form>
        </div>
    );
}
