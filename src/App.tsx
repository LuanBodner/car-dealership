import React from 'react';
import CarRegistration from 'views/CarRegistration';
import './App.css';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CarRegistration hasName={false} />
    </div>
  );
}

export default App;
