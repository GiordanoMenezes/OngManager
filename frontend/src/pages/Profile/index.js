import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile() {

  const [incidents, setIncidents] = useState([]);

  const loggedId = localStorage.getItem('ongId');
  const loggedName = localStorage.getItem('ongName');

  const history = useHistory();

  useEffect(() => {
    api.get('incidents/profile', {
      headers: {
        Authorization: loggedId,
      }
    }).then(response => setIncidents(response.data))
  }, [loggedId]);

  const deleteItem = async (id) => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: loggedId,
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao tentar excluir caso.")
    }
  }

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={LogoImg} alt="Be the Hero" />
        <span>Bem Vinda, {loggedName}</span>
        <Link className="button" to="incidents/new">Cadastrar Novo Caso</Link>
        <button type="button">
          <FiPower onClick={() => handleLogout()} size={18} color="#E02041" />
        </button>
      </header >
      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map(inc => (
          <li key={inc.id}>
            <strong>CASO:</strong>
            <p>{inc.title}</p>
            <strong>DESCRIÇÃO:</strong>
            <p>{inc.description}</p>
            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inc.value)}</p>
            <button type="button">
              <FiTrash2 onClick={() => deleteItem(inc.id)} size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div >
  );
}