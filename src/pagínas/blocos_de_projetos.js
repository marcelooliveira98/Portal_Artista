import styles from "../Assets/css/Projetos.module.css"
import Lupa from "../Assets/img/img projetos/Lupa.png"

export default function Blocos_de_projeto(props)
{
    return(
        <div className={styles.box}>
            <div className={styles.box_nav}>
                <img className={styles.lupa} src={Lupa} alt="Lupa"/>
                <p className={styles.box_titulo}>Titulo: {props.titulo} </p>
            </div>

            <p className={styles.box_texto}>{props.descricao}</p>
        </div>
    )
}