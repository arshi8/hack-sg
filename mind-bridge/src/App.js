import React from 'react';
import Login from './Component/Login';
import NavigationBar from './Component/NavigationBar';

const user = {
  name: 'John Doe',
  profilePic: 'url_to_user_profile_pic.jpg', // Replace with actual URL
};

const App =()=> {

  const handleSignOut = () => {
    // Implement sign-out logic here
    console.log('Signing out...');
  };
  return (
    <div className="App">
      <NavigationBar user={user} onSignOut={handleSignOut} />
      < Login />
    </div>
  );
}

export default App;

