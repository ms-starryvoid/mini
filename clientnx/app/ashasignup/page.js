
'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [ashaId, setAshaId] = useState('');
  const [email, setEmail] = useState('');
const router = useRouter()
  const handleSubmit = (e) => {
    const isEmailValid = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

     if (!isEmailValid) {
      alert('Please enter a valid email address.');
    }
    e.preventDefault();

    if (!ashaId.trim() || !email.trim()) {
      return;
    }

    router.push('/ashalogin');
  };

  useEffect(() => {
    if (!ashaId.trim() || !email.trim()) {
      return;
    }

    
    
  }, [ashaId, email]);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ASHA ID"
          value={ashaId}
          onChange={(e) => setAshaId(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;