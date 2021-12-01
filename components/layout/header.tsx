import {HeaderStyle} from '../../styles/header'
import React from 'react'
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import Link from 'next/link'

export default function HeaderComponent() {
    const [inicio, setInicio] = React.useState("active")
    const [sobre, setSobre] = React.useState("deactivate")
    const [servicos, setServicos] = React.useState("deactivate")
    const [publicacoes, setPublicacoes] = React.useState("deactivate")
    const [clientes, setClientes] = React.useState("deactivate")

    const[menu, setMenu] = React.useState(false)

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
                <a href="/">
                    <img src="/images/logoHeader.png"/>
                </a>

                <nav>
                    <ul>
                        <Link href="/"><li onClick={() => addClass(1)} ><a className='p4-SemiBold txt' id={inicio == "active"? inicio : ""}>Início</a></li></Link>
                        <Link href="/#sobre"><li onClick={() => addClass(2)} ><a className='p4-SemiBold' id={sobre == "active"? sobre : ""}>Sobre</a></li></Link>
                        <Link href="/#servicos"><li onClick={() => addClass(3)}><a className='p4-SemiBold' id={servicos == "active"? servicos : ""}>Serviços</a></li></Link>
                        <Link href="/publicacoes"><li onClick={() => addClass(4)}><a className='p4-SemiBold' id={publicacoes == "active"? publicacoes : ""}>Publicações</a></li></Link>
                        <li onClick={() => addClass(5)}><a href="/#clientes" className='p4-SemiBold' id={clientes == "active"? clientes : ""}>Clientes</a></li>
                    </ul>
                    <button className='p4-SemiBold button'>Conheça !</button>
                </nav>
            </div>

            <button className="open_menu" onClick={()=> setMenu(!menu)}><AiOutlineMenu color={"#009069"} size={40}/></button>

            <div className="menu_mobile" style={{display: menu? "unset" : "none"}}>

                    <nav>
                        <ul>
                            <li><a className="title3-Regular" href="/" >Início</a></li>
                            <li><a className="title3-Regular" href="#sobre" >Sobre</a></li>
                            <li><a className="title3-Regular" href="#servicos">Serviços</a></li>
                            <li><a className="title3-Regular" href="/publicacoes" >Publicações</a></li>
                            <li><a className="title3-Regular" href="#clientes" >Clientes</a></li>
                        </ul>
                    </nav>
                </div>
        </HeaderStyle>
    )
}
