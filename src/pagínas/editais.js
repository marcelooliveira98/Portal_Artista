import styles from "../Assets/css/editais.module.css"
import Sino from "../Assets/img/img projetos/Sino.png"
import { Link } from "react-router-dom"

export default function Editais()
{
    return (
        <div className={styles.corpo}>
            {/* Nome Portal inscri */}
            <nav className="menu">
                <Link to="/inscricoes"><div className="seta"></div></Link>
                <h1 className={`titulo1 ${styles.titulo}`}>Portal inscrições</h1>
                <Link to="/notificacao"><img className="sino1" src={Sino} alt="Sino de notificação" /></Link>
            </nav>

            <div className={styles.fundo}></div>

            <div className={styles.area_textos}>
                <h1 className={styles.titulo_noticia}>Notícia</h1>

                <h1 className={styles.sub_titulo}>Cultura+ PB Anuncia Novo Exame de Seleção: Abertura das Inscrições para 2024</h1>

                <p className={styles.paragrafos}>  A tão aguardada abertura do Exame de Seleção do Programa Cultura+ da Secretaria de Cultura do Estado da Paraíba chegou! O Edital N° 24/2024 foi publicado e marca o início do processo seletivo que visa selecionar iniciativas culturais de destaque para o ano de 2024.</p>

                <h1 className={styles.sub_titulo}>Oportunidades para 2024</h1>

                <p className={styles.paragrafos}>  O presente edital tem como objetivo selecionar 100 projetos culturais inovadores e 50 bolsas de estudo em áreas culturais, com o intuito de promover e apoiar a criatividade e a excelência cultural no estado da Paraíba. O foco é incentivar a realização de projetos que tragam novas perspectivas culturais e oferecer suporte educacional a talentos emergentes nas artes e áreas relacionadas.</p>

                <h1 className={styles.sub_titulo}>Período de Inscrição</h1>

                <p className={styles.paragrafos}> As inscrições para o exame de seleção estarão abertas de [data de início] até [data de término]. </p>

                <p className={styles.editais}>Confira os editais:</p>

                <Link><input className={styles.botao} type="button" value="Cultura+ PB" /></Link>
            </div>
        </div>
    )
}