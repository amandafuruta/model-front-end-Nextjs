import {Card} from '../styles/card'
import {environment} from 'environment'
import {useState , useEffect} from 'react'

export default function Cards(){
    const[content, setContent] = useState<any[]>([])

    useEffect(() => {

        fetch(environment.apiUrl +"services/pager").then(resp => resp.json()).
        then((dados)=> {
            setContent(dados.data);
        });

    }, [])

    
    return(
        <>
            {content.map((item) => {
                return(
                    <Card key={item.id}>
                        <p className="p2-Bold">{item.name}</p>
                    </Card>
                )
            })}
        </>
    )
}