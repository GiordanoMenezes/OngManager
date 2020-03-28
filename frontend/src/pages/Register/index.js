import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { FiArrowLeft } from 'react-icons/fi'

import LogoImg from '../../assets/logo.svg';


export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="linkTo" to="/">
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para a tela Inicial
          </Link>
        </section>
          <form>
            <input type="text" placeholder="Nome da ONG" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="WhatsApp" />

            <div className="input-group">
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" style={{ width: 80 }} />
            </div>
            <button className="button" type="submit">Cadastrar</button>
          </form>
      </div>
    </div>
  )
}