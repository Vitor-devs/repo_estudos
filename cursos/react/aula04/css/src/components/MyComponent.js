//Importando CSS na mesma pasta 
import './MyComponent.css'

const MyComponent = () => {
  return (
    <div>
      <h1>Testando Css em Componentes!</h1>
      <p>Este é o paragráfo do componente</p>
      <p className="my-comp-p">Este tbm é do Componente, porém utilizado uma classe para ser mais especifico!</p>
    </div>
  )
}

export default MyComponent;