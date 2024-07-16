import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', {
        name,
        pin,
        mobileNumber,
        email,
      });
      alert('Registration successful');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>PIN:</label>
        <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} required maxLength="5" />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
