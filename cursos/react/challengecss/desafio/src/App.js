import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    {id: 1, modelo: "Honda", marca: "Fit", apelido: "Fitin"},
    {id: 2, modelo: "Porsche", marca: "Kaiene", apelido: "Chapolim"},
    {id: 3, modelo: "BMW", marca: "K2", apelido: "Pedro"},
  ]

  return (
    <div className="App">
      <h1>Apresentando Carros</h1>
      <div className='container'>
        {cars.map((car)=>(
          <CarDetails
            key= {car.id}
            modelo = {car.modelo}
            marca = {car.marca}
            apelido = {car.apelido}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
