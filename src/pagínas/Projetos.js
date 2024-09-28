import styles from "../Assets/css/Projetos.module.css"
import Lupa from "../Assets/img/img projetos/Lupa.png"
import Sino from "../Assets/img/img projetos/Sino.png"
import Blocos_de_projetos from "./blocos_de_projetos.js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../index.css"

var contado = 0

function login()
{
    contado += 1

    if (contado === 1) {
        let email = prompt("Digite seu email:")
        let senha = prompt("Digite sua senha:")
    
        fetch(`http://localhost:3001/validar?email=${email}&senha=${senha}`).then(dados => dados.json()).then(dados => {
            localStorage.setItem("usuario_id", dados.UsuarioID)
        })
    }
}

export default function PsetBotao_criar_projrojetos()
{

    const [blocos_proj, setBlocos_proj] = useState([])

    function Repete() {
        login()
        
        useEffect(() => {
          // Simulando um delay de 5 segundos antes de executar o fetch
          const timer = setTimeout(() => {
            fetch(`http://localhost:3001/get_project?id=${localStorage.getItem("usuario_id")}`)
              .then(response => response.json())
              .then(dados => {
                const novosBlocos = [];
      
                for (let i = 0; i < dados.length; i++) {
                  novosBlocos.push(<Blocos_de_projetos key={i} titulo={dados[i].Titulo} descricao={dados[i].Descricao} />);
                }
      
                setBlocos_proj(novosBlocos); // Atualiza o estado com os novos blocos
              });
          }, 50); // Executa o fetch após 5 segundos
      
          // Função de limpeza caso o componente seja desmontado antes do timeout ou fetch serem concluídos
          return () => clearTimeout(timer);
        }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez após a montagem
      
        return <div>{blocos_proj}</div>;
      }

    return(
        <div>
            <nav className="menu">
                <Link to="/portal_artistas"><div className="seta"></div></Link>
                <h1 className={styles.titulo}>Histórico de Projetos</h1>
                <Link to="/notificacao"><img className={styles.sino} src={Sino} alt="Sino de notificação" /></Link>
            </nav>

            <section className={styles.corpo}>
                <div className={styles.corpo_p1}>

                    {/* Box 1 */}

                    <div className={styles.box}>
                        <div className={styles.box_nav}>
                            <img className={styles.lupa} src={Lupa} alt="Lupa"/>
                            <p className={styles.box_titulo}>Titulo: Arte Digital e Novas Mídias </p>
                        </div>

                        <p className={styles.box_texto}> Exploração de novas tecnologias e mídias digitais para criar arte interativa, arte generativa, realidade aumentada, entre outros.</p>
                    </div>

                    {/* Box 2 */}

                    <div className={styles.box}>
                        <div className={styles.box_nav}>
                            <img className={styles.lupa} src={Lupa} alt="Lupa"/>
                            <p className={styles.box_titulo}>Título: Arte Ambiental </p>
                        </div>

                        <p className={styles.box_texto}> Criação de obras que respondem ao ambiente natural, utilizando materiais encontrados localmente ou abordando questões ambientais.</p>
                    </div>

                    {/* Box 3 */}

                    <div className={styles.box}>
                        <div className={styles.box_nav}>
                            <img className={styles.lupa} src={Lupa} alt="Lupa"/>
                            <p className={styles.box_titulo}>Titulo:Residências Artísticas </p>
                        </div>

                        <p className={styles.box_texto}>Participação em programas de residência onde artistas vivem e trabalham juntos por um período específico de tempo, colaborando e produzindo arte.</p>
                    </div>

                    {/* <Blocos_de_projetos titulo="oi" descricao="olá"/> */}
                    {Repete()}

                    {/* Criar um projeto */}

                    <Link to="/cadastro"><input className={styles.btn_criar_proj} value="Criar um novo projeto" type="button"/></Link>
                </div>

                <div className={`${styles.corpo_p1} ${styles.corpo_p2}`}></div>
            </section>
        </div>
    )
}