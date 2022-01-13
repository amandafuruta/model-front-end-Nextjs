import {FooterStyle} from '../../styles/footer'
import {environment} from 'environment'

import parser from 'html-react-parser'
import {useState , useEffect} from 'react'

export default function FooterComponent() {

    const [parametros, setParametros] = useState<any>({})

    


    useEffect(() => {
        fetch(environment.apiUrl +"parameters/list").then(resp => resp.json()).
        then((dados)=> {
            setParametros(dados);
        });

    }, [])

    return (
        <FooterStyle>
            <div className="content">
                <div className="container">
                    <div className="top">
                        <div className="servicos"> 
                            <span className="p4-Bold color_txt">Sede institucional</span>
                            <address className="p4">
                                {parametros.address ? parser(parametros.address.content) : ""}
                            </address>
                            <span className="p4-Regular mail">
                                {parametros.email ? parser(parametros.email.content) : ""}
                            </span>
                        </div>
                    
                        <div className="kalore"> 
                            <span className="p4-Bold color_txt">Unidade Kaloré</span>
                            <address className="p4">
                                {parametros.endereco_kaloré ? parser(parametros.endereco_kaloré.content) : ""}
                                {parametros.cep_kaloré ? parser(parametros.cep_kaloré.content) : ""}
                            </address>
                        </div>

                        <div className="marumbi"> 
                            <span className="p4-Bold color_txt">Unidade Marumbi</span>
                            <address className="p4">
                                {parametros.marumbi_endereco ? parser(parametros.marumbi_endereco.content) : ""}
                                {parametros.marumbi_cep ? parser(parametros.marumbi_cep.content) : ""}
                            </address>
                            
                        </div>
                    </div>

                    <div className="media">
                        <div className="mediaBox">
                            <a href="https://www.facebook.com/escritorio14dezembro/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35.382" height="35.166" viewBox="0 0 35.382 35.166">
                                <g id="Grupo_94" data-name="Grupo 94" transform="translate(-548.318 -86.173)">
                                    <g id="Grupo_93" data-name="Grupo 93">
                                    <path id="Caminho_101" data-name="Caminho 101" d="M396.7,113.864a17.691,17.691,0,1,0-20.455,17.475V118.977h-4.492v-5.113h4.492v-3.9c0-4.434,2.641-6.883,6.682-6.883a27.158,27.158,0,0,1,3.96.346v4.353h-2.231a2.557,2.557,0,0,0-2.883,2.763v3.319h4.907l-.785,5.113h-4.122v12.362A17.694,17.694,0,0,0,396.7,113.864Z" transform="translate(187 -10)" fill="#fff"/>
                                    </g>
                                </g>
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/escritorio14/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35.382" height="35.381" viewBox="0 0 35.382 35.381">
                                    <g id="Grupo_95" data-name="Grupo 95" transform="translate(-297.216 -150.694)">
                                        <g id="Grupo_95-2" data-name="Grupo 95">
                                        <path id="Caminho_102" data-name="Caminho 102" d="M324.274,157.011a2.074,2.074,0,1,0,2.074,2.074A2.074,2.074,0,0,0,324.274,157.011Z" fill="#fff"/>
                                        <path id="Caminho_103" data-name="Caminho 103" d="M315.052,159.671a8.714,8.714,0,1,0,8.713,8.713A8.723,8.723,0,0,0,315.052,159.671Zm0,14.295a5.582,5.582,0,1,1,5.581-5.582A5.588,5.588,0,0,1,315.052,173.966Z" fill="#fff"/>
                                        <path id="Caminho_104" data-name="Caminho 104" d="M321.969,186.075H307.844a10.64,10.64,0,0,1-10.628-10.627V161.321a10.64,10.64,0,0,1,10.628-10.627h14.125A10.64,10.64,0,0,1,332.6,161.321v14.127A10.64,10.64,0,0,1,321.969,186.075Zm-14.125-32.053a7.307,7.307,0,0,0-7.3,7.3v14.127a7.307,7.307,0,0,0,7.3,7.3h14.125a7.308,7.308,0,0,0,7.3-7.3V161.321a7.308,7.308,0,0,0-7.3-7.3Z" fill="#fff"/>
                                        </g>
                                    </g>
                                </svg>
                            </a>

                            <a href="https://www.youtube.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35.382" height="35.381" viewBox="0 0 35.382 35.381">
                                    <g id="Grupo_96" data-name="Grupo 96" transform="translate(-361.318 -423.664)">
                                        <path id="Caminho_105" data-name="Caminho 105" d="M381.889,441.232l-4.662-2.537c-.192-.109-.846.029-.846.249v4.947c0,.217.649.356.84.252l4.871-2.41C382.29,441.626,382.085,441.344,381.889,441.232Z" fill="#fff"/>
                                        <path id="Caminho_106" data-name="Caminho 106" d="M379.009,423.664A17.691,17.691,0,1,0,396.7,441.355,17.691,17.691,0,0,0,379.009,423.664Zm9.471,20.218a4.248,4.248,0,0,1-4.248,4.248H373.37a4.248,4.248,0,0,1-4.248-4.248v-5.055a4.248,4.248,0,0,1,4.248-4.248h10.862a4.247,4.247,0,0,1,4.248,4.248Z" fill="#fff"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <span className="p4-Regular">Todos os Direitos Reservados | 2022</span>
            </div>
            
            
        </FooterStyle>
    )
}
