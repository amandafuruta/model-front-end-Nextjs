import { Publications } from "../../styles/publications"
import News from '../../components/news'
import {useState , useEffect} from 'react'
import Link from 'next/link'
import { environment } from "environment"


export default function Publicacoes(){
    const [noticias, setNoticiais] = useState<any[]>([])

    useEffect(() => {
        fetch( environment.apiUrl +"posts/pager").then(resp => resp.json()).
        then((dados)=> {
            setNoticiais(dados.data);
            console.log(noticias);
        });

    }, [])

    return(
        <Publications>
            <div className="title_banner">
                <h1 className="title3-Regular">Publicações</h1>
            </div>

            <div className="container">
                {noticias.map((item:any)=> {
                    return(
           
                        <News key={item.id} url={item.id}  img={item.banner} date={item.date} title={item.title} location="news"/>  
                   
                    )
                })}
            </div>
        </Publications>
    )
}