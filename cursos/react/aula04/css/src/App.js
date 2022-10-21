import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title'
import {useState} from 'react';

function App() {

  const n = 15
  const [name] = useState("Pedro")

  const redTitle = false

  return (
    <div className="App">
      {/* CSS global */}
      <h1>Testes em Uso!</h1>
      {/* CSS componente */}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "blue", backgroundColor: "#0722", borderTop: "1px solid green" }}>Este elemento foi estilizado de forma Inline</p>
      {/* Inline style dinâmico */}
      <h2 style={n < 10 ? ({color:"purple", padding: "10px", backgroundColor: "lightgray"}) : ({color: "pink",padding: "10px", backgroundColor: "green"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color:"purple", padding: "10px", backgroundColor: "lightgray"}) : ({color: "pink",padding: "10px", backgroundColor: "green"})}>CSS dinâmico</h2>

      <h3 style={name === "Vitor" ? {color: "green",backgroundColor: "#000"} : {color:"lightgray"}} > Olá! {name} </h3>
      {/* Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title/>
      
    </div>
  );
}

export default App;
