import './App.css';
import {useState, useEffect} from 'react'

function url(path){
  return process.env.NODE_ENV === 'development'
  ? `http://localhost:5000${path}` : path

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Will's React App</h1>
      </header>
    </div>
  );
}

export default App;
