import {FooterStyle} from '../../styles/footer'
import {environment} from 'environment'

import parser from 'html-react-parser'
import {useState , useEffect} from 'react'

export default function FooterComponent() {

    const [parametros, setParametros] = useState<any>({})

    const[content, setContent] = useState<any[]>([])


    useEffect(() => {
        fetch(environment.apiUrl +"parameters/list").then(resp => resp.json()).
        then((dados)=> {
            setParametros(dados);
        });

        fetch(environment.apiUrl +"services/pager").then(resp => resp.json()).
        then((dados)=> {
            setContent(dados.data);
        });
    }, [])

    return (
        <FooterStyle>
            <div className="content">
                <div className="container">
                    <div className="top">
                        <div className="servicos"> 
                            <span className="p4-Bold color_txt">Serviços</span>

                            <div className="op">
                                {content.map((item) => {
                                    return(
                                    
                                        <p className="p4-Regular" >{item.name} </p>
                                    
                                    )
                                })}

                                {/* <div className="line" style={{marginBottom:36}}>
                                    <a className="p4-Regular">Assessoria Fiscal,Contábil, Previdenciária e Trabalhista;</a>
                                    <a className="p4-Regular">Livro Caixa e Carnê Leão para Profissionais Liberais;</a>
                                </div>

                                <div className="line" style={{marginBottom:25}}>
                                    <a className="p4-Regular">Regularizações de Obras de Construção Civil;</a>
                                    <a className="p4-Regular">Assessoria na implantação e utilização de Nota Fiscal Eletrônica.</a>
                                </div>

                                <div className="line" style={{marginBottom:36}}>
                                    <a className="p4-Regular">Processos Licitatórios;</a>
                                    <a className="p4-Regular">Contabilidade Rural;</a>
                                </div>

                                <div className="line">
                                    <a className="p4-Regular">Administração de Condomínios;</a>
                                    <a className="p4-Regular">Processos de CCIR e ITR;</a>

                                </div> */}

                            </div>
                        </div>
                    
                        <div className="fale_conosco"> 
                            <span className="p4-Bold color_txt">Fale conosco</span>
                            <address className="p4-Bold">
                                {parametros.address ? parser(parametros.address.content) : ""}
                            </address>
                            <span className="p4-Regular phone">
                                {parametros.phone ? parser(parametros.phone.content) : ""} <br/> 
                            </span>
                            <span className="p4-Regular mail">
                                <b>Email:</b> {parametros.email ? parser(parametros.email.content) : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <span className="p4-Regular">Todos os Direitos Reservados</span>
            </div>
            
            
        </FooterStyle>
    )
}
