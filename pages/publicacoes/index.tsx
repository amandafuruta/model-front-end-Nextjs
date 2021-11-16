import { Publications } from "../../styles/publications"
import News from '../../components/news'

// import { useParams } from "react-router-dom";
// export default function Publicacoes(props:any){
//     const { id } = useParams();
//     console.log("teste")
//     return(
//         <Publications>

//         </Publications>
//     )
// }

const publicacoes = [
    {id: 1, img:"/images/p1.png", date:"12 novembro 2020", title:"Assessoria na implantação e utilização de Nota Fiscal Eletrônica.", href:''},
    {id: 2, img:"/images/p2.png", date:"12 novembro 2020", title:"Assessoria na implantação e utilização de Nota Fiscal Eletrônica.", href:''},
    {id: 3, img:"/images/p3.png", date:"12 novembro 2020", title:"Assessoria na implantação e utilização de Nota Fiscal Eletrônica.", href:''}
]


export default function Publicacoes(){
    return(
        <Publications>
            <div className="title_banner">
                <h1 className="title3-Regular">Publicações</h1>
            </div>

            <div className="container">
                {publicacoes.map((item)=> {
                    return(
                     
                        <News key={item.id} url={item.id} img={item.img} date={item.date} title={item.title}/>  
                    
                    )
                })}
            </div>
        </Publications>
    )
}