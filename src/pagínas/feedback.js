import styles from "../Assets/css/feedback.module.css"
import { Link } from "react-router-dom"
import Sino from "../Assets/img/img projetos/Sino1.png"
import { useState } from "react"

export default function Feedback()
{
    const [dados, setDados] = useState({
        artista: "",
        projeto: "",
        comentario: ""
    })

    function getDados(e)
    {
        switch (e.target.id) {
            case "artista":
                setDados({
                    artista: e.target.value,
                    projeto: dados.projeto,
                    comentario: dados.comentario
                })
                break

            case "projeto":
                setDados({
                    artista: dados.artista,
                    projeto: e.target.value,
                    comentario: dados.comentario
                })
                break

            case "comentario":
                setDados({
                    artista: dados.artista,
                    projeto: dados.projeto,
                    comentario: e.target.value
                })
                break
        }
    }

    return(
        <div className={styles.corpo}>
            {/* Nome Portal inscri */}
            <nav className={`menu ${styles.menu1}`}>
                <div></div>
                <h1 className="titulo1">Feedback</h1>
                <Link to="/notificacao"><img className="sino1" src={Sino} alt="Sino de notificação" /></Link>
            </nav>

            {/* Aba artista e projetos não selecionados */}
            <form className={styles.formulario}>
                <div className={styles.campos} style={{marginTop: "2%"}}>
                    <div className={styles.paragrafo}>
                        <p className={styles.paragrafo1}>Artista</p>
                    </div>
                    <input id="artista" className={styles.paragrafo1} type="text" onChange={(e) => getDados(e)}/>
                </div>

                <div className={styles.campos}>
                    <div className={styles.paragrafo}>
                        <p className={styles.paragrafo1}>Projetos não Selecionados</p>
                    </div>
                    <input id="projeto" className={styles.paragrafo1} type="text" onChange={(e) => getDados(e)}/>
                </div>

                <h1 className={styles.titulo}>Selecioner seu comentário.</h1>

                <div className={`${styles.campos} ${styles.comentario}`}>
                    <p className={styles.paragrafo1}>Comentários</p>
                </div>
                <textarea id="comentario" className={styles.comentario_campo} onChange={(e) => getDados(e)}></textarea>

                <input className={styles.enviar} type="button" value="Enviar" onClick={() => console.log(dados)}/>
            </form>
        </div>
    )
}