import {FooterStyle} from '../../styles/footer'

export default function FooterComponent() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="top">
                    <div className="servicos"> 
                        <span className="p4-Bold color_txt">Serviços</span>

                        <div className="op">

                            <div className="line" style={{marginBottom:36}}>
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

                            </div>

                        </div>
                    </div>
                
                    <div className="fale_conosco"> 
                        <span className="p4-Bold color_txt">Fale conosco</span>
                        <address className="p4-Bold">
                            Rua Clementino S. Puppi, 755 CEP: 86.900-000 | Jandaia do Sul Caixa Postal 194
                        </address>
                        <span className="p4-Regular">
                            (43) 3432-4121 | 9-8417-7731 <br/> <b>Email:</b> contabil@escritorio14dezembro.com.br
                        </span>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <span className="p4-Regular">Todos os Direitos Reservados</span>
            </div>
            
            
        </FooterStyle>
    )
}
