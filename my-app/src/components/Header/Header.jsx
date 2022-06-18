import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [savedEmail, setEmail] = useState('');

  useEffect(() => {
    setEmail(localStorage.getItem('userEmail'));
  }, []);

  return (
    <>
      <header>{ savedEmail }</header>
        <Link to="/search">Pesquisa</Link>
        <Link to="favorites">Favoritas</Link>
        <Link to="profile">Perfil</Link>
    </>
  );
}