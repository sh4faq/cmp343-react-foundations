'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #eee' }}>
      <button 
        onClick={handleClick}
        style={{
          backgroundColor: '#2196f3',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '20px 0'
        }}
      >
        👍 Like ({likes})
      </button>
      <p>This is a Client Component - it uses state and runs in the browser!</p>
    </div>
  );
}