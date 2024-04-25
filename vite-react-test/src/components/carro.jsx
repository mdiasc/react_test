function Carro(props){
    return(
        <>
            <h1>Os 10 carros mais populares do mundo</h1>
            <br />
            <h2>Hoje você irá descobrir os carros mais populares do mundo</h2>
            <br />
            <h3>Carro: {props.nome}</h3>
            <br />
            <p>Preço: {props.precoCarro}</p>
        </>
    )
}
export default Carro