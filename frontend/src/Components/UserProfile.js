import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile({ match }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`/localhost:8081/users/${match.params.userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [match.params.userId]);

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default UserProfile;
