import React from 'react'
import Form from './Form';
import Card from './Card';

const App = () => {
  return (
    <div className="w-screen h-screen bg-black text-white ">
      <h1 className="text-center text-4xl font-bold p-4">Note App</h1>
      <Form />
      <Card/>
    </div>
  );
}

export default App
