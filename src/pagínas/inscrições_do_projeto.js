import styles from "../Assets/css/inscrições_do_projeto.module.css";
import { useState } from "react";

export default function Inscrições_do_projeto() {
    const [dados, setDados] = useState({
        titulo: '',
        descricao: '',
        categoria: 'musica',
        prazo: '',
        detalhes: '',
        criterios: '',
        processo: '',
        organizador: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados(prevDados => ({
            ...prevDados,
            [name]: value
        }));
    };

    function enviar()
    {
        fetch(`http://localhost:3001/editais?titulo=${dados.titulo}&descricao=${dados.descricao}&categoria=${dados.categoria}&prazo=${dados.prazo}&detalhes=${dados.detalhes}&criterios=${dados.criterios}&processo=${dados.processo}&organizador=${dados.organizador}`)
        window.location.href = "/editais"
    }

    return (
        <div className={styles.corpo}>
            <form className={styles.formulario}>
                <h2 className={styles.titulo2}>Cadastro de Edital</h2>

                <label className={styles.label} htmlFor="titulo">Título do Edital:</label>
                <input
                    className={styles.input_textarea}
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={dados.titulo}
                    onChange={handleChange}
                    required
                />

                <label className={styles.label} htmlFor="descricao">Descrição:</label>
                <textarea
                    className={`${styles.input_textarea} ${styles.text}`}
                    id="descricao"
                    name="descricao"
                    value={dados.descricao}
                    onChange={handleChange}
                    required
                ></textarea>

                <label className={styles.label} htmlFor="categoria">Categoria Artística:</label>
                <select
                    id="categoria"
                    name="categoria"
                    value={dados.categoria}
                    onChange={handleChange}
                    required
                >
                    <option value="musica">Música</option>
                    <option value="artes-visuais">Artes Visuais</option>
                    <option value="danca">Dança</option>
                </select>

                <label className={styles.label} htmlFor="prazo">Prazo de Inscrição:</label>
                <input
                    className={styles.input_textarea}
                    type="date"
                    id="prazo"
                    name="prazo"
                    value={dados.prazo}
                    onChange={handleChange}
                    required
                />

                <label className={styles.label} htmlFor="detalhes">Detalhes do Financiamento:</label>
                <textarea
                    className={`${styles.input_textarea} ${styles.text}`}
                    id="detalhes"
                    name="detalhes"
                    value={dados.detalhes}
                    onChange={handleChange}
                    required
                ></textarea>

                <label className={styles.label} htmlFor="criterios">Critérios de Seleção:</label>
                <textarea
                    className={`${styles.input_textarea} ${styles.text}`}
                    id="criterios"
                    name="criterios"
                    value={dados.criterios}
                    onChange={handleChange}
                    required
                ></textarea>

                <label className={styles.label} htmlFor="processo">Processo de Inscrição:</label>
                <textarea
                    className={`${styles.input_textarea} ${styles.text}`}
                    id="processo"
                    name="processo"
                    value={dados.processo}
                    onChange={handleChange}
                    required
                ></textarea>

                <label className={styles.label} htmlFor="organizador">Contato do Organizador:</label>
                <input
                    className={styles.input_textarea}
                    type="text"
                    id="organizador"
                    name="organizador"
                    value={dados.organizador}
                    onChange={handleChange}
                    required
                />

                <input className={`${styles.input_textarea} ${styles.botao}`} onClick={() => enviar()} type="button" value="Cadastrar Edital" />
            </form>
        </div>
    );
}
