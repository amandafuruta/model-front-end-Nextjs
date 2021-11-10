import {NewStyle} from '../styles/newStyle'

export default function News(props:any):any {
    console.log(props.img);
    return(
        <NewStyle href={props.url}>
            <div className="img" style={{backgroundImage:`url(${props.img})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
            
            <div className="txt">
                <p className="p4-Regular top">{props.date}</p>
                <p className="p2-Bold">{props.title}</p>
            </div> 

            
        </NewStyle>
    )

}