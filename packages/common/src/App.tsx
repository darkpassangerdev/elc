import React from 'react';
import Button from './components/Button';
import logo from './logo.svg';
import './App.css';



const a = ({ b }: { b: string }) => {
  return <div>{b}</div>;
};

function App() {
  return (
    <div className="App">
      <Button textColor="blue">Click me!</Button>
    </div>
  );
}

export default App;
