import { useState } from "react";
import { Link } from "react-router-dom";
import styles1 from "../Assets/css/feedback.module.css";
import Sino from "../Assets/img/img projetos/Sino1.png";

export default function CadastroDeProjeto() {
  const [dados, setDados] = useState({
    titulo: "",
    descricao: "",
    areaAtuacaoNecessaria: "",
    localizacao: "",
    tipoColaboracao: ""
  });

  function getDados(e) {
    const coluna = e.target.id;
    const valor = e.target.value;
    setDados(copiar => ({
      ...copiar,
      [coluna]: valor
    }));
  }

  function enviar_dados()
  {
    console.log(dados.tipoColaboracao)
    fetch(`http://localhost:3001/proj_collabe?titulo=${dados.titulo}&descricao=${dados.descricao}&area=${dados.areaAtuacaoNecessaria}&localizacao=${dados.localizacao}&tipo=${dados.tipoColaboracao}&criadorid=${localStorage.getItem("usuario_id")}`)
    window.location.href = "/projetos"
  }

  return (
    <div className={styles1.corpo}>
      {/* Nome Portal inscri */}
      <nav className={`menu ${styles1.menu1}`}>
        <Link to="/projetos">
          <div className={`seta ${styles1.seta1}`}></div>
        </Link>
        <h1 className="titulo1">Cadastro de Projeto</h1>
        <Link to="/notificacao">
          <img className="sino1" src={Sino} alt="Sino de notificação" />
        </Link>
      </nav>

      {/* Formulário de cadastro */}
      <form className={styles1.formulario}>
        <div className={styles1.campos} style={{ marginTop: "2%" }}>
          <div className={styles1.paragrafo}>
            <p className={styles1.paragrafo1}>Título</p>
          </div>
          <input
            id="titulo"
            className={styles1.paragrafo1}
            type="text"
            onChange={(e) => getDados(e)}
          />
        </div>

        <div className={styles1.campos}>
          <div className={styles1.paragrafo}>
            <p className={styles1.paragrafo1}>Descrição</p>
          </div>
          <input
            id="descricao"
            className={styles1.paragrafo1}
            type="text"
            onChange={(e) => getDados(e)}
          />
        </div>

        <div className={styles1.campos}>
          <div className={styles1.paragrafo}>
            <p className={styles1.paragrafo1}>Área de Atuação Necessária</p>
          </div>
          <input
            id="areaAtuacaoNecessaria"
            className={styles1.paragrafo1}
            type="text"
            onChange={(e) => getDados(e)}
          />
        </div>

        <div className={styles1.campos}>
          <div className={styles1.paragrafo}>
            <p className={styles1.paragrafo1}>Localização</p>
          </div>
          <input
            id="localizacao"
            className={styles1.paragrafo1}
            type="text"
            onChange={(e) => getDados(e)}
          />
        </div>

        <div className={styles1.campos}>
          <div className={styles1.paragrafo}>
            <p className={styles1.paragrafo1}>Tipo de Colaboração</p>
          </div>
          <input
            id="tipoColaboracao"
            className={styles1.paragrafo1}
            type="text"
            onChange={(e) => getDados(e)}
          />
        </div>

        <input
          className={styles1.enviar}
          type="button"
          value="Enviar"
          onClick={() => enviar_dados()}
        />
      </form>
    </div>
  );
}
