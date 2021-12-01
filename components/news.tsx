import {NewStyle} from '../styles/newStyle'
import Link from 'next/link'
import {environment}from 'environment'

export default function News(props:any):any {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
    return(
        
        // <Link href={props.location == "home" ? `/publicacoes/${props.url}` :`/${props.url}` }  passHref={true}>
        <Link href={`/publicacoes/${props.url}`}  passHref={true}>
            <NewStyle >
                <div className="img" style={{backgroundImage:`url(${environment.apiUrlDownload}${props.img})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
                
                <div className="txt">
                    <p className="p4-Regular top">{new Date(props.date).getDate() + " " + months[new Date(props.date).getMonth()] + " " +new Date(props.date).getFullYear()}</p>
                    <p className="p2-Bold">{props.title}</p>
                </div>   
            </NewStyle>
        </Link>
    )

}


{/* <Link href={
            {
                pathname: '/publicacoes/[id]',
                query: { id: props.key },
            }
        } passHref> */}