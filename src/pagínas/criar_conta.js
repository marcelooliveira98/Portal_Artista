import styles from "../Assets/css/criar_conta.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Criar_conta()
{
    const [form, setForm] = useState({
        nome: "", 
        sobrenome: "", 
        email:"", 
        cpf:"", 
        senha:"", 
        dia:"",
        mes:"",
        ano:"",
        genero:""
    })

    function dados_form(e)
    {
        switch (e.target.id) {
            case "nome":
                setForm({
                    nome: e.target.value, 
                    sobrenome: form.sobrenome, 
                    email: form.email, 
                    cpf: form.email, 
                    senha: form.senha, 
                    dia: form.dia,
                    mes: form.mes,
                    ano: form.ano,
                    genero: form.genero})
                break

            case "sobrenome":
                setForm({
                    nome: form.nome, 
                    sobrenome: e.target.value, 
                    email: form.email, 
                    cpf: form.cpf, 
                    senha: form.senha, 
                    dia: form.senha,
                    mes: form.mes,
                    ano: form.ano,
                    genero: form.genero
                })
                break

            case "email":
                setForm({
                    nome: form.nome, 
                    sobrenome: form.sobrenome, 
                    email: e.target.value, 
                    cpf: form.cpf, 
                    senha: form.cpf, 
                    dia: form.dia,
                    mes: form.mes,
                    ano: form.ano,
                    genero: form.genero
                })
                break

            case "cpf":
                setForm({
                    nome: form.nome, 
                    sobrenome: form.sobrenome, 
                    email: form.email, 
                    cpf: e.target.value, 
                    senha: form.senha, 
                    dia: form.dia,
                    mes: form.mes,
                    ano: form.ano,
                    genero: form.genero
                })
                break
            
            case "senha":
                setForm({
                    nome: form.nome, 
                    sobrenome: form.sobrenome, 
                    email: form.email, 
                    cpf: form.cpf, 
                    senha: e.target.value, 
                    dia: form.dia,
                    mes: form.mes,
                    ano: form.ano,
                    genero: form.genero
                })
                break
            
            case "dia":
                setForm({
                    nome: form.nome, 
                    sobrenome: form.sobrenome, 
                    email: form.email, 
                    cpf: form.cpf, 
                    senha: form.senha, 
                    dia: e.target.value,
                    mes: form.mes,
                    ano: form.ano,
                    genero: form.genero
                })
                break
            
            case "mes":
                setForm({
                    nome: form.nome, 
                    sobrenome: form.sobrenome, 
                    email: form.email, 
                    cpf: form.cpf, 
                    senha: form.senha, 
                    dia: form.dia,
                    mes: e.target.value,
                    ano: form.ano,
                    genero: form.genero
                })
                break

            case "ano":
                setForm({
                    nome: form.nome, 
                    sobrenome: form.sobrenome, 
                    email: form.email, 
                    cpf: form.cpf, 
                    senha: form.senha, 
                    dia: form.dia,
                    mes: form.mes,
                    ano: e.target.value,
                    genero: form.genero
                })
                break

            case "feminino":
                setForm({
                    nome: form.nome, 
                    sobrenome: form.sobrenome, 
                    email: form.email, 
                    cpf: form.cpf, 
                    senha: form.senha, 
                    dia: form.dia,
                    mes: form.mes,
                    ano: form.ano,
                    genero: e.target.id
                })
                break

            case "masculino":
                setForm({
                    nome: form.nome, 
                    sobrenome: form.sobrenome, 
                    email: form.email, 
                    cpf: form.cpf, 
                    senha: form.senha, 
                    dia: form.dia,
                    mes: form.mes,
                    ano: form.ano,
                    genero: e.target.id
                })
                break
        }
    }

    return(
        <div className={styles.corpo}>
            <form className={styles.formulario}>
                <h1 className={styles.titulo}>Abra uma conta</h1>
                <p className={styles.texto}>É gratuito</p>

                {/* Campo nome */}
                <input className={`${styles.campos_form} ${styles.campo_nome}`} id="nome" onChange={(e) => dados_form(e)} placeholder="Nome:" type="text"/>

                {/* Campo sobrenome */}
                <input className={`${styles.campos_form} ${styles.campo_nome} ${styles.campo_sobrenome}`} id="sobrenome" onChange={(e) => dados_form(e)} placeholder="Sobrenome:" type="text"/>
                
                {/* Campo email */}
                <input className={styles.campos_form} id="email" onChange={(e) => dados_form(e)} placeholder="Seu e-mail:" type="text"/>

                {/* Campo cpf */}
                <input className={styles.campos_form} id="cpf" onChange={(e) => dados_form(e)} placeholder="CPF:" type="text"/>

                {/* campo senha */}
                <input className={styles.campos_form} id="senha" onChange={(e) => dados_form(e)} placeholder="Senha:" type="password"/>
                
                {/* Texto data de nascimento */}
                <p className={styles.texto}>Data de Nascimento </p>

                {/* box data de nascimento */}

                {/* Dia */}
                <input className={`${styles.campos_form} ${styles.data_nascimento_form}`} id="dia" onChange={(e) => dados_form(e)} type="number" min="0" max="31"/>

                {/* Mes */}
                <input className={`${styles.campos_form} ${styles.data_nascimento_form}`} id="mes" onChange={(e) => dados_form(e)} type="number" min="1" max="12"/>
                
                {/* Ano */}
                <input className={`${styles.campos_form} ${styles.data_nascimento_form}`} id="ano" onChange={(e) => dados_form(e)} type="number" min="1800"/>

                {/* div de generos e botão de abrir conta */}

                <div className={styles.genero_abrir_conta}>

                    {/* Caixa marca feminino e texto */}
                    <label className={styles.junta_radio_texto}>
                        <input className={styles.genero_checkbox} id="feminino" onChange={(e) => dados_form(e)} type="radio" name="sexo"/>

                        <p className={`${styles.texto} ${styles.genero_texto}`}>Feminino</p>
                    </label>

                    {/* Caixa marca Masculino e texto */}
                    <label className={styles.junta_radio_texto}>
                        <input className={styles.genero_checkbox} id="masculino" onChange={(e) => dados_form(e)} type="radio" name="sexo"/>

                        <p className={`${styles.texto} ${styles.genero_texto}`}>Masculino</p>
                    </label>

                    {/* Botão criar conta */}
                    <Link to="/login"><input className={styles.botao_abrir_conta} type="submit" value="Abrir conta"/></Link>
                </div>
            </form>
        </div>
    )
}