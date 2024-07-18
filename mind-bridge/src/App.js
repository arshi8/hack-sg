import React, { useEffect, useState } from 'react';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard';

const user = {
  name: 'John',
  password: 'John123',
  profilePic: 'https://picsum.photos/20/20', 
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');


  const handleLogin = (formData) => {
    // Example login logic (validate credentials)
    if (formData?.email === user.name && formData.password === user.password) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    console.log('Signing out...');
  };

  useEffect(()=>{
  },[isLoggedIn]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard user={user} handleSignOut={handleSignOut} />
      ) : (
        <Login user={user} onLogin={handleLogin} error={error}  setError={setError} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;