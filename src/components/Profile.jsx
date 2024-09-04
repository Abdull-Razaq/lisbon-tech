import React, { useState } from 'react';
import Register from './Register';
import Login from './Login'

const Profile = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      {isRegistering ? (
        <Register setIsRegistering={setIsRegistering} />
      ) : (
        <Login setIsRegistering={setIsRegistering} />
      )}
    </>
  );
};

export default Profile;
