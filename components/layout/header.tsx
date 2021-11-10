import {HeaderStyle} from '../../styles/header'
import React from 'react'

export default function HeaderComponent() {
    const [inicio, setInicio] = React.useState("active")
    const [sobre, setSobre] = React.useState("deactivate")
    const [servicos, setServicos] = React.useState("deactivate")
    const [publicacoes, setPublicacoes] = React.useState("deactivate")
    const [clientes, setClientes] = React.useState("deactivate")

    function addClass(id:Number){
        if(id == 1){
            setInicio("active");
            setSobre("deactivate");
            setServicos("deactivate");
            setPublicacoes("deactivate");
            setClientes("deactivate");
        } else if (id == 2){
            setInicio("deactivate");
            setSobre("active");
            setServicos("deactivate");
            setPublicacoes("deactivate");
            setClientes("deactivate");
        } else if (id == 3){
            setInicio("deactivate");
            setSobre("deactivate");
            setServicos("active");
            setPublicacoes("deactivate");
            setClientes("deactivate");
        } else if (id == 4){
            setInicio("deactivate");
            setSobre("deactivate");
            setServicos("deactivate");
            setPublicacoes("active");
            setClientes("deactivate");
        } else if (id == 5){
            setInicio("deactivate");
            setSobre("deactivate");
            setServicos("deactivate");
            setPublicacoes("deactivate");
            setClientes("active");
        }
    }

    return (
        <HeaderStyle>
            <div className="container">
                <a>
                    <img src="/images/logoHeader.png"/>
                </a>

                <nav>
                    <ul>
                        <li onClick={() => addClass(1)} ><a className='p4-SemiBold txt' id={inicio == "active"? inicio : ""}>Início</a></li>
                        <li onClick={() => addClass(2)} ><a className='p4-SemiBold' id={sobre == "active"? sobre : ""}>Sobre</a></li>
                        <li onClick={() => addClass(3)}><a className='p4-SemiBold' id={servicos == "active"? servicos : ""}>Serviços</a></li>
                        <li onClick={() => addClass(4)}><a className='p4-SemiBold' id={publicacoes == "active"? publicacoes : ""}>Publicações</a></li>
                        <li onClick={() => addClass(5)}><a className='p4-SemiBold' id={clientes == "active"? clientes : ""}>Clientes</a></li>
                    </ul>
                    <button className='p4-SemiBold button'>Conheça !</button>
                </nav>
            </div>
        </HeaderStyle>
    )
}
