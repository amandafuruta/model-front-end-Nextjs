import React from 'react';
import {useRouter} from 'next/router'
import {useState , useEffect} from 'react'
import parser from 'html-react-parser'
import {Publications} from '../../styles/publications'
import News from '../../components/news'
import { environment } from 'environment';
    
export default function Detail(props:any){
    const router = useRouter();
    const ID = router.query.id;
    
    const [news, setNews] = useState<any>({})
    const [noticias, setNoticiais] = useState<any[]>([])
    
    useEffect(() => {

        fetch(environment.apiUrl +"posts/custom-get/" + ID).then(resp => resp.json()).
        then((dados)=> {
            setNews(dados);
            console.log(ID);
        });

        fetch(environment.apiUrl +"posts/pager?limit=3").then(resp => resp.json()).
        then((dados)=> {
            setNoticiais(dados.data);
        });

    }, [ID])

    return(
        <Publications>
            <div className="title_banner">
                <h1 className="title3-Regular">Publicações</h1>
            </div>

            <div className="container">
                <div className="containerNewsDetails">
                    <div>
                    {parser(news.content || "")}
                    </div>
                </div>

                <div className="bottom">
                    <h2 className="title2-Regular">Outras publicações</h2>

                    {noticias.map((item)=> {
                        return(
                        
                            <News key={item.id} url={item.id}  img={item.banner} date={item.date} title={item.title} location="news"/>  
                        
                        )
                    })}
                </div>
            </div>
        </Publications>
    )
}