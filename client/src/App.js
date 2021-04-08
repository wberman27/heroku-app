import './App.css';
import {useState, useEffect} from 'react'

function url(path){
  return process.env.NODE_ENV === 'development'
  ? `http://localhost:5000${path}` : path

}

function App() {
  const [data, setData] = useState('Hi')
  useEffect(()=>{
    // setData(data+"!")
    fetch(url('/api'))
    .then(resp => resp.json()) //turn the receives data into json
    .then(apiData => setData(apiData.data)) //set our data in state
  },[])


  return (
    <div className="App">
      <header className="App-header">
        {data}
      </header>
    </div>
  );
}

export default App;
