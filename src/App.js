import './App.css';
import Red from './Red'
import Green from './Green'
import Blue from './Blue'
import Header from './Header'
import { useState } from 'react'


function App() {
  // const [colors, setColors] = useState("");


  return (
    <div className="App">
      <Header />
      <Red />
      <Blue />
      <Green />

    </div>
  );
}

export default App;
