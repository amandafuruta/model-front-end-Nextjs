import {NewStyle} from '../styles/newStyle'
import Link from 'next/link'

export default function News(props:any):any {
 
    return(
        <Link href={`/noticias/${props.url}`} passHref={true}>
            <NewStyle >
                <div className="img" style={{backgroundImage:`url(${props.img})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                
                <div className="txt">
                    <p className="p4-Regular top">{props.date}</p>
                    <p className="p2-Bold">{props.title}</p>
                </div>   
            </NewStyle>
        </Link>
    )

}