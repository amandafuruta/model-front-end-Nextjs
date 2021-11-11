import {Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8} from '../styles'
import Cards from '../components/cards'
import News from '../components/news'

const publicacoes = [
    {id: 1, img:"/images/p1.png", date:"12 novembro 2020", title:"Assessoria na implantação e utilização de Nota Fiscal Eletrônica.", href:''},
    {id: 2, img:"/images/p2.png", date:"12 novembro 2020", title:"Assessoria na implantação e utilização de Nota Fiscal Eletrônica.", href:''},
    {id: 3, img:"/images/p3.png", date:"12 novembro 2020", title:"Assessoria na implantação e utilização de Nota Fiscal Eletrônica.", href:''}
]

const logos = [
    {id: 1, logo:"/images/c1.png"},
    {id: 2, logo:"/images/c2.png"},
    {id: 3, logo:"/images/c3.png"},
    {id: 4, logo:"/images/c4.png"},
    {id: 5, logo:"/images/c5.png"},
    {id: 6, logo:"/images/c6.png"},
    {id: 7, logo:"/images/c7.png"}
]

const depoimentos = [
    {id: 1, name:"José Roberto Vieira", position:"CEO Móveis Brasília", text:"Nestes mais de vinte anos de história, contamos com uma equipe de colaboradores treinados, tanto no campo dos serviços de áreas exatas como no campo do desenvolvimento e relacionamento pessoal e interpessoal, tudo isso, visando ao nosso Cliente, um melhor atendimento profissional e pessoal."},
    {id: 2, name:"José Roberto Vieira", position:"CEO Móveis Brasília", text:"Nestes mais de vinte anos de história, contamos com uma equipe de colaboradores treinados, tanto no campo dos serviços de áreas exatas como no campo do desenvolvimento e relacionamento pessoal e interpessoal, tudo isso, visando ao nosso Cliente, um melhor atendimento profissional e pessoal."},
    {id: 3, name:"José Roberto Vieira", position:"CEO Móveis Brasília", text:"Nestes mais de vinte anos de história, contamos com uma equipe de colaboradores treinados, tanto no campo dos serviços de áreas exatas como no campo do desenvolvimento e relacionamento pessoal e interpessoal, tudo isso, visando ao nosso Cliente, um melhor atendimento profissional e pessoal."},
]

export default function HomePage() {
    return (
        <>
        <Section1 id="inicio">
            <div className="container">
                <div className="right">
                    <h1 className="title3-Regular">Muito mais que um <b>Escritório de Contabilidade!</b></h1>
                    <span className="p1-Regular">Soluções completas no mundo contábil com foco exclusivo no cliente. <span className="p1-Bold" style={{color:"#009069"}}>Sempre!</span> </span>
                    <button className='p4-SemiBold button'>Conheça !</button>
                </div>

                <div className="left">
                    <img src="/images/ft1.png" />
                </div>          
            </div>           
        </Section1>

        <Section2 id="sobre">
            <div className="top">
                
                <div className="traco"></div>
                <h2 className="title2-Regular">Há vinte anos Construindo relações sólidas!</h2>
            </div>

            <div className="bottom">
                <p className="p3-Regular">
                    Nestes mais de vinte anos de história, contamos com uma equipe de colaboradores treinados, tanto no campo dos serviços de áreas exatas como no campo do desenvolvimento e relacionamento pessoal e interpessoal, tudo isso, visando ao nosso Cliente, um melhor atendimento profissional e pessoal.
                </p>
                <p className="p3-Regular">
                Nestes mais de vinte anos de história, contamos com uma equipe de colaboradores treinados, tanto no campo dos serviços de áreas exatas como no campo do desenvolvimento e relacionamento pessoal e interpessoal, tudo isso, visando ao nosso Cliente, um melhor atendimento profissional e pessoal.
                </p>
            </div> 
        </Section2>

        <Section3>
            <div className="container">
                <div className="box1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="51.104" viewBox="0 0 40 51.104">
                        <path id="Caminho_85" data-name="Caminho 85" d="M32.968,42.414l2.851,3.871-.534,4.781a1.12,1.12,0,0,0,.665,1.151l4.41,1.923,1.923,4.41a1.12,1.12,0,0,0,1.15.665l.254-.028V71.734a1.12,1.12,0,0,0,1.619,1l7.444-3.7,7.444,3.7a1.12,1.12,0,0,0,1.619-1V59.187l.254.028a1.121,1.121,0,0,0,1.15-.665l1.923-4.41,4.41-1.923a1.12,1.12,0,0,0,.665-1.151l-.534-4.781,2.851-3.871a1.12,1.12,0,0,0,0-1.329l-2.851-3.871.534-4.781a1.12,1.12,0,0,0-.665-1.151l-4.41-1.923-1.923-4.41a1.122,1.122,0,0,0-1.151-.665l-4.781.534-3.871-2.851a1.122,1.122,0,0,0-1.329,0l-3.871,2.851-4.781-.534a1.123,1.123,0,0,0-1.151.665l-1.924,4.41-4.41,1.924a1.12,1.12,0,0,0-.665,1.151l.534,4.781-2.851,3.871A1.12,1.12,0,0,0,32.968,42.414Zm26.6,27.512-6.324-3.144a1.12,1.12,0,0,0-1,0l-6.324,3.144V58.937l2.287-.255,3.871,2.85a1.12,1.12,0,0,0,1.329,0l3.871-2.85,2.287.255ZM37.882,38.19a1.121,1.121,0,0,0,.211-.788l-.49-4.4,4.055-1.769a1.122,1.122,0,0,0,.579-.579L44.006,26.6l4.4.49a1.108,1.108,0,0,0,.788-.211l3.56-2.621,3.56,2.621a1.112,1.112,0,0,0,.788.211l4.4-.49,1.769,4.055a1.119,1.119,0,0,0,.579.579L67.9,33.006l-.49,4.4a1.121,1.121,0,0,0,.211.788l2.621,3.56-2.621,3.56a1.118,1.118,0,0,0-.211.788l.49,4.4-4.056,1.769a1.115,1.115,0,0,0-.579.579L61.493,56.9l-4.4-.491a1.118,1.118,0,0,0-.788.211l-3.56,2.621-3.56-2.621a1.118,1.118,0,0,0-.287-.148l-.047-.018a1.108,1.108,0,0,0-.3-.048c-.009,0-.017,0-.026,0a1.143,1.143,0,0,0-.124.007l-4.4.491-1.769-4.056a1.119,1.119,0,0,0-.579-.579L37.6,50.494l.49-4.4a1.118,1.118,0,0,0-.211-.788l-2.621-3.56Z" transform="translate(-32.75 -21.75)" fill="#fbb304"/>
                    </svg>
                    
                    <div>
                        <h3 className="title5-SemiBold">Missão</h3>
                        <p className="p4-Regular">Nestes mais de vinte anos de história, contamos com uma equipe de colaboradores treinados,</p>
                    </div>
                </div>

                <div className="box2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50.149" height="52.068" viewBox="0 0 50.149 52.068">
                        <g id="Grupo_48" data-name="Grupo 48" transform="translate(-23.152 -22.2)">
                            <path id="Caminho_86" data-name="Caminho 86" d="M41.189,53.375a14.336,14.336,0,0,0,4.782,11.168,9.1,9.1,0,0,1,2.46,3.6,2.675,2.675,0,0,0-.3,1.216,2.646,2.646,0,0,0,.556,1.614,2.623,2.623,0,0,0,0,3.238,2.65,2.65,0,0,0-.559,1.618,2.681,2.681,0,0,0,2.677,2.677h1.026a3.635,3.635,0,0,0,3.471,2.57h.514a3.636,3.636,0,0,0,3.471-2.57h1.027a2.681,2.681,0,0,0,2.677-2.677,2.654,2.654,0,0,0-.559-1.618,2.622,2.622,0,0,0,0-3.236,2.639,2.639,0,0,0,.561-1.616,2.666,2.666,0,0,0-.319-1.247,8.381,8.381,0,0,1,2.344-3.458A14.375,14.375,0,1,0,41.189,53.375ZM55.817,78.962H55.3a1.51,1.51,0,0,1-1.077-.452h2.667A1.507,1.507,0,0,1,55.817,78.962Zm4.5-2.57H50.806a.559.559,0,1,1,0-1.117h9.509a.559.559,0,0,1,0,1.117Zm0-3.236H50.806a.559.559,0,1,1,0-1.117h9.509a.559.559,0,0,1,0,1.117Zm.4-3.408a.576.576,0,0,1-.4.171H50.806a.555.555,0,0,1-.555-.555A.529.529,0,0,1,50.383,69c.015-.016.03-.033.044-.05a.618.618,0,0,1,.13-.087.525.525,0,0,1,.25-.058h9.508a.543.543,0,0,1,.252.062.584.584,0,0,1,.162.12h0a.553.553,0,0,1-.013.762ZM54.775,41.606q.4-.025.792-.025a12.252,12.252,0,0,1,8.055,21.483,10.456,10.456,0,0,0-2.689,3.693c-.04-.01-.081-.014-.121-.022-.061-.012-.122-.025-.184-.032a2.686,2.686,0,0,0-.314-.018H50.806a2.76,2.76,0,0,0-.326.019c-.05.006-.1.018-.148.027s-.113.018-.168.031l-.008,0a11.248,11.248,0,0,0-2.773-3.8,12.251,12.251,0,0,1,7.391-21.358Z" transform="translate(-7.116 -6.813)" fill="#fbb304"/>
                            <path id="Caminho_87" data-name="Caminho 87" d="M64.026,72.168a1.63,1.63,0,1,0,1.594,1.593A1.621,1.621,0,0,0,64.026,72.168Z" transform="translate(-15.474 -19.721)" fill="#fbb304"/>
                            <path id="Caminho_88" data-name="Caminho 88" d="M63.956,63.66a1.232,1.232,0,0,0,1.229-1.141l.58-7.821a1.233,1.233,0,0,0-1.229-1.323h-1.16A1.232,1.232,0,0,0,62.148,54.7l.58,7.821A1.232,1.232,0,0,0,63.956,63.66Z" transform="translate(-15.389 -12.304)" fill="#fbb304"/>
                            <path id="Caminho_89" data-name="Caminho 89" d="M100.909,63.968a1.059,1.059,0,0,0,0-2.119H96.85a1.059,1.059,0,0,0,0,2.119Z" transform="translate(-28.668 -15.648)" fill="#fbb304"/>
                            <path id="Caminho_90" data-name="Caminho 90" d="M24.211,64.015H28.27a1.059,1.059,0,0,0,0-2.119H24.211a1.059,1.059,0,1,0,0,2.119Z" transform="translate(0 -15.667)" fill="#fbb304"/>
                            <path id="Caminho_91" data-name="Caminho 91" d="M87.926,38.481l2.87-2.87a1.059,1.059,0,0,0-1.5-1.5l-2.87,2.871a1.059,1.059,0,1,0,1.5,1.5Z" transform="translate(-24.85 -4.579)" fill="#fbb304"/>
                            <path id="Caminho_92" data-name="Caminho 92" d="M64.919,27.318V23.259a1.059,1.059,0,0,0-2.119,0v4.059a1.059,1.059,0,0,0,2.119,0Z" transform="translate(-15.648)" fill="#fbb304"/>
                            <path id="Caminho_93" data-name="Caminho 93" d="M36.563,34.148a1.059,1.059,0,0,0-1.5,1.5l2.87,2.87a1.059,1.059,0,0,0,1.5-1.5Z" transform="translate(-4.579 -4.593)" fill="#fbb304"/>
                        </g>
                    </svg>
                    
                    <div>
                        <h3 className="title5-SemiBold">Visão</h3>
                        <p className="p4-Regular">Nestes mais de vinte anos de história, contamos com uma equipe de colaboradores treinados,</p>
                    </div>
                </div>

                <div className="box3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42.273" height="50.181" viewBox="0 0 42.273 50.181">
                        <path id="Caminho_94" data-name="Caminho 94" d="M66.43,36.715h-4v-14.8A1.019,1.019,0,0,0,61.41,20.9H49.826a1.019,1.019,0,0,0-.782,1.671l2.824,3.387-2.824,3.387a1.019,1.019,0,0,0,.782,1.671H60.391v5.7h-4a1.019,1.019,0,0,0-1.019,1.019v7.078H46.348A1.019,1.019,0,0,0,45.33,45.83v7.049H36.272A1.019,1.019,0,0,0,35.253,53.9v7.078H26.195a1.019,1.019,0,0,0-1.019,1.019v8.068a1.019,1.019,0,0,0,1.019,1.019H36.236l.018,0,.018,0H46.313l.018,0,.017,0H66.43a1.019,1.019,0,0,0,1.019-1.019V61.995c0-.005,0-.01,0-.015s0-.009,0-.015V45.83c0-.005,0-.01,0-.015s0-.009,0-.015V37.734A1.019,1.019,0,0,0,66.43,36.715ZM35.217,69.044h-8v-6.03h8Zm10.077,0h-8v-6.03h8Zm0-8.1h-8v-6.03h8Zm10.076,8.1h-8v-6.03h8Zm0-8.1h-8v-6.03h8Zm0-8.068h-8v-6.03h8ZM52,28.98l1.975-2.369a1.019,1.019,0,0,0,0-1.3L52,22.937h8.39V28.98Zm13.41,40.064h-8v-6.03h8Zm0-8.1h-8v-6.03h8Zm0-8.068h-8v-6.03h8Zm0-8.1h-8v-6.03h8Z" transform="translate(-25.176 -20.9)" fill="#fac823"/>
                    </svg>
                    
                    <div>
                        <h3 className="title5-SemiBold">Missão</h3>
                        <p className="p4-Regular">Nestes mais de vinte anos de história, contamos com uma equipe de colaboradores treinados,</p>
                    </div>
                </div>

            </div>
        </Section3>

        <Section4 id="servicos">
            <div className="container">
                <h4 className="title2-Regular">Nossas soluções em contabilidade</h4>
                <div className="card_container">
                    <Cards/>
                    <div className="contato">
                        <p className="p2-Bold">Converse com nossa equipe agora mesmo!</p>
                        <a className="p2-Bold" href="https://api.whatsapp.com/send?phone=55439901-9301" target="_blank" rel="external">Mensagem por WhatsApp</a>
                    </div>
                </div>
            </div>
        </Section4>

        <Section5 id="banner">
            <div className="container">
                <img src="/images/detail.png" className="detail"/>
                <h5 className="title1-Regular">O modo como se faz &ensp; contabilidade mudou</h5>
                <p>Com um know-how vasto e com muito conhecimento, conseguimos atender os mais diversos tipos de clientes e necessidades. Há 20 anos no mercado, o Escritório 14 de dezembro é obcecado por soluções aos clientes e stakeholders.</p>
                <img src="/images/detail2.png" className="detail2"/>
            </div>
        </Section5>

        <Section6 id="publicacoes">
            <div className="container">
                <h4 className="title2-Regular">Nossas publicações</h4>
                {publicacoes.map((item)=> {
                    return(
                        
                        <News key={item.id} url={item.href} img={item.img} date={item.date} title={item.title}/>  
                        
                    )
                })}
                
                <div className="link">
                    <a href="/news"  className="p4-Bold">Ver todas as publicações</a>
                </div>
            </div>
        </Section6>
        
        <Section7>
            <div className="container">
                <h4 className="title2-Regular">Quem são nossos clientes</h4>

                <div className="logos">
                    {logos.map((item) => {
                        return(
                            <div key={item.id}>
                                <img src={item.logo} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section7>
                    
        <Section8>
            <div className="container">
                <h4 className="title2-Regular">e o que eles dizem a nosso respeito</h4>

            </div>
        </Section8>

        </>
    )
}
