import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { EMAIL_REGEX, EMAIL_MIN_LENGTH } from '../../utils/constants';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [isDisabled, setButton] = useState(true);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const isEmailCorrect = EMAIL_REGEX.test(email);
    const checkEmailLength = email.length > EMAIL_MIN_LENGTH;
    const checkPassword = password.length >= EMAIL_MIN_LENGTH;
    if (isEmailCorrect && checkEmailLength && checkPassword) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [setButton, email, password]);

  const switchToSearch = () => {
    localStorage.seItem('userEmail', email);
    history.push('/search');
  }

  return (
    <>
    <h1>Login</h1>
      <div>
        <input
          placeholder='email'
          type="text"
          onChange={({ target: { value }}) => setEmail(value)}
        />
        <input
          placeholder='senha'
          type="password"
          onChange={({ target: { value }}) => setPassword(value)}
        />
        <button
          disabled={ isDisabled }
          onClick={ switchToSearch }
          type="button">Entrar</button>
      </div>
    </>
  );
}
