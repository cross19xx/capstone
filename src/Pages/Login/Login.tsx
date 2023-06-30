import React, { useState, ChangeEvent, FormEvent } from 'react';
import { auth } from '../../Config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

interface FirebaseError extends Error {
  code?: string;
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>(''); // add this line

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
      // setMessage('Login Successful'); add this line
      // The user is signed in
      // You can redirect to another page here, or do whatever you want
    } catch (error) {
      const firebaseError = error as FirebaseError;
      let errorMessage = '';
      switch (firebaseError.code) {
        case 'auth/user-not-found':
          errorMessage = 'There is no user record corresponding to this email.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'The email address is not valid.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'The password is incorrect.';
          break;
        default:
          errorMessage = 'An error occurred. Please try again.';
          break;
      }
      setMessage(errorMessage); // change this line
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h4 className="form-title login">Login</h4>
      {message && <p>{message}</p>} {/* add this line */}
      <input
        className="login-input"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        className="login-input"
        onChange={handlePasswordChange}
        placeholder="Password"
        required
      />
      <button type="submit" className="login-submit">
        Log in
      </button>
      <div className="checkbox">
        <div>
          <input id="accept" className="check" type="checkbox" />
          <label htmlFor="accept" className="terms">
            Remember
          </label>
        </div>
        <span className="reset">Forgot password?</span>
      </div>
    </form>
  );
}

export default Login;
