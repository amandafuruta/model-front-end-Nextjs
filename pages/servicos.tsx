import {ServiceStyle} from '../styles/service'
import Bloco from '../components/blocoServiço'

export default function Service(){
    return(
        <ServiceStyle>
            <div className="title_banner">
                <h1 className="title3-Regular">Nossos serviços</h1>
            </div>

            <section className='section1'>
                <div className="container">
                    <div className="texto">
                        <h1 className="title3-Regular">Tudo que você e sua empresa precisa, pois</h1>
                        <h1 className="title3-Bold">Somos feitos de valores</h1>
                    </div>
                    <div className="img">
                        <img src="/images/img-servicos.png"/>
                    </div>
                </div>
                <div className="textBottom">
                    <div>
                        <h2>Lucro Real </h2>
                        <p className="p3-Regular">Indicado para quem quer crescer, esta solução contempla indústrias, comércios e transportadoras. De forma 
                        integrada e otimizada com sua empresa, a contabilidade é realizada  em tempo real. Nossa equipe faz parte do dia a 
                        dia da sua empresa, criando perspectivas de crescimento e dando suporte na tomada de decisões do seu negócio. </p>
                    </div>
                </div>
            </section>

            <section className="section2">
                <div className="container">
                    <div className="image">
                    </div>

                    <div className="text">
                        <h2>Revisão e Recuperação de Impostos com foco nos benefícios fiscais  </h2>
                        <p className="p3-Regular">Através de uma gestão inteligente, verificamos os impostos de sua
                            empresa e oferecemos novas possibilidades de recolhimento, visando sempre a redução de imposto de forma segura, através de benefícios fiscais que abrangem seus produtos. 
                        </p>
                    </div>

                </div>
            </section>

            <section className="section3">
                <div className="container">
                    <Bloco id="first" svg="/images/01.svg" title="Administradoras de Bens" p="Opção para quem deseja ter seu futuro garantido e protegido ainda hoje. Para clientes quem buscam segurança e proteção na gestão de seu patrimônio e do patrimônio da sua empresa.sua empresa. "/>
                    <Bloco id="second" svg="/images/02.svg" title="Certificado Digital " p="Praticidade e exclusividade, garantindo total segurança dos dados da sua empresa. "/>
                    <Bloco id="third" svg="/images/03.svg" title="Processos Licitatórios" p="Ideal para as empresas que participam de licitações. Entregamos o Dossiê composto de certidões e demais documentos e, ainda auxiliamos no momento da licitação. Segurança e habilidade por quem entende o que faz. "/>
                </div>
            </section>

            <section className="section4">
                <div className="container">
                    <h5>Cuidado Patrimonial e Financeiro</h5>
                    <p className="p3-Regular">Todo cuidado, segurança e estabilidade com você e suas finanças. <br/>Escolha ter a melhor assessoria para sua vida, seja nas transações imobiliárias, inventários, doações, investimentos em bolsas e ganho de capital. </p>
                </div>
            </section>

            <section className="section5">
                <div className="container">

                    <div className="top">
                        <div className="first">
                            <h6>Imposto de Renda</h6>
                            <p className="p3-Regular">Tenha tranquilidade e garantia com um serviço além do esperado. Cuidamos de toda  sua <br/> documentação, nosso sistema de forma integrada garante a agilidade nas  informações, possibilitando antecedência na análise de sua declaração.</p>
                        </div>
                        <div className="second">
                            <h6>Administração de Condomínios</h6>
                            <p className="p3-Regular">Uma gestão completa para síndicos exclusivos. Com vasta experiência, gerenciamos pagamentos, recebimentos, rateios, tudo com muita tranquilidade para você cuidar dos  seus negócios.</p>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="first" id="first">
                            <h6>Regularização de Obras</h6>
                            <p className="p3-Regular">Seu sonho regularizado, seja ele residência ou comercial. Através de serviço diferenciado acompanhamos sua obra do início ao fim, oferecendo soluções antecipadas para regularização do imposto, permitindo a redução no recolhimento e proteção fiscal.</p>
                        </div>
                        <div className="second" id="second">
                            <h6>Contabilidade Rural</h6>
                            <p className="p3-Regular">Ferramentas inovadoras, com tecnologias que acompanham a  expansão do  agronegócio, nossas soluções contemplam desde de sua  gestão financeira, regularização  de CCIR, ITR e apuração de impostos.  Tudo que você precisa, para estar livre de cuidar  do essencial, já que é no campo que tudo começa.</p>
                        </div>
                    </div>
                </div>
            </section>
        </ServiceStyle>
    )
}