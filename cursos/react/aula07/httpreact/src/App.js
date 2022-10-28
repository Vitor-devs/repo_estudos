import './App.css';
import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/products';

function App() {

  const [products, setProducts] = useState([]);

  //Resgatando dados
  useEffect(() => {
    async function fetchData(){
      //Esperando a resposta da url
      const response = await fetch(url);

      //Transformando o texto em objeto 
      const data = await response.json();

      setProducts(data);
    }
    fetchData()
  }, []); 
  console.log(products);
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product)=>(
          <div>
            <li key={product.id}>Vendendo: {product.name} <br></br> Por apenas R$:{product.price} </li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
