import React from 'react'
import ReactDOM from 'react-dom/client'
import Carro from './components/carro'
import Computer from './components/computer'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Carro nome="Ford F-Series" precoCarro="R$ 490 mil"/>
    <Computer
    sectionPage="Computadores"
    name="Dell Vostro"
    processador="11ª geração de intel® core™ i5-1135g7"
    memory="memória de 8gb (1x8gb), ddr4, 2666mhz; expansível até 16gb (2 slots sodimm, 1 slot livre)slots de memória: 2 slots"
    sistem="windows 11 pro"
    teclado="teclado padrão em português, com leitor de impressão digital (compatível apenas com windows)"
    
    
    
    />
    </React.StrictMode>
)
