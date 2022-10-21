import MyForm from './components/MyForm'
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Form */}
      <h2>Form em um geral </h2>
      <MyForm user={{name: "Josias", email: "josias@gamil.com", bio:"Sou um ´Digite sua profissão´", role:"admin"}}/>


    </div>
  );
}

export default App;
