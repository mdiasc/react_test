function Computer(props){
    return(
        <>
            <h1>Seção: {props.sectionPage}</h1>
            <br />
            <h4>Nome: {props.name}</h4>
            <br />
            <h5>Preço: {props.precoComputer}</h5>
            <br />
            <h5>Processador: {props.processador}</h5>
            <br />
            <h5>Memória: {props.memory}</h5>
            <br />
            <h5>Sistema Operacional: {props.sistem}</h5>
            <br />
            <h5>Teclado: {props.teclado}</h5>
        </>
    )

}
export default Computer