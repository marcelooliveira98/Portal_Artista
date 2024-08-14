import styles from "../Assets/css/Portal_artista.module.css"
import { Link } from "react-router-dom"
import "../index.css"

export default function Portal_artista()
{
    return(
        <section className={styles.corpo}>
            <section className={styles.container1}>
                <Link to="/inscricoes"><button className={styles.botao_verde}>Portal Inscrições</button></Link>

                {/* Anne quando terminar a pagína você colocar o link na tag a aqui em baixo ok */}
                <Link to="/projetos"><button className={`${styles.botao_verde} ${styles.botao_verde_2}`}>Histórico de Projetos </button></Link>
            </section>

            <section className={styles.container2}>
                <div className={styles.imagem1}>
                    <div className={styles.imagem1_2}>

                    </div>

                    <div className={`${styles.imagem1_2} ${styles.imagem1_3}`}>
                        
                    </div>
                </div>
                <div className={styles.imagem2}>
                    <div className={styles.imagem2_2}></div>

                </div>
            </section>
        </section>
    )
}