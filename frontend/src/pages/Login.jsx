import { useState } from 'react';
import { auth } from '../firbase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Link } from 'react-router-dom'; // For redirection after login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Hook to navigate after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Login successful! Redirecting...');
      setEmail('');
      setPassword('');

      // Redirect to the dashboard or home page
      navigate('/dashboard'); // Replace '/dashboard' with your desired route
    } catch (err) {
      console.error(err); // Log the error
      setError('Invalid email or password'); // Display error message
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: 20 }} className='bg-green text-white py-2 px-3 rounded-sm sahdwo-sm'>Log In</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <p>not logged in <Link to={'/signup'} className='text-emerald-400'>signup</Link></p>
    </div>
  );
};

export default Login;
