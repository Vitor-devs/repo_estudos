import styles from './CarDetails.module.css';

const CarDetails = ({marca, modelo, apelido}) => {
  return (
    <div>
        <h1 className={styles.tituloh1}>Olá</h1>
        <h2>Detalhes abaixo:</h2>
        <ul>
          <li>Marca: {marca}</li>
          <li>Modelo: {modelo}</li>
          <li>Apelido do carro: {apelido}</li>
        </ul>
    </div>
  )
}

export default CarDetails