import styled from 'styled-components'

interface Props {
    svg: string;
    title: string;
    p: string;
    id: string;
}

export default function Bloco(props:Props){
    return(
        <Style>
            <div className="left" id={props.id == 'third'? 'last' : ''}>
                <img src={props.svg} className="svg"/>
            </div>

            <div className="right">
                <h4>{props.title}</h4>
                <p className="p3-Regular" id={props.id}>{props.p}</p>
            </div>
        </Style>
    )
}

const Style = styled.div`
    display: flex;

    #last{
        .svg{
            padding: 55px 72px;
        }
    }

    .left{
        background-color: #F8F8F8;
        position: relative;
        margin-bottom: 28px;
        margin-right: 64px;
        .svg{
            padding: 55px 76px;
        }

        &:after {
            content: "";
            width: 194px;
            height: 5px;
            background-color: #AAEFAF;
            display: block;
            position: absolute;
            bottom: -12px;
        }
    }

    .right{
        h4{
            font-size: 28px;
            font-weight: normal;
            color: var(--primary-color);
            margin-top:0;
            margin-bottom: 19px;
        }
        p{
            line-height: 26px;
        }

        #first{
            max-width: 480px;
        }

        #second{
            max-width: 457px;
        }

        #third{
            max-width: 436px;
        }
    }

    @media(max-width:650px){
        flex-direction: column;
        align-items: center;

        h4, p{
            text-align: center;
        }

        .left{
            margin-right: 0;
        }
    }
`