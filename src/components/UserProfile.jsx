// UserProfile.jsx
import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
