import styled from 'styled-components'

export const FooterStyle = styled.footer`
    background-color: var(--primary-color);

    .content{
        padding: 0 20px;
    }
    
    span, a{
        color: #fff;
    }

    a{
        cursor: pointer;
    }

    .container{
        max-width: 940px;
        width: 100%;
        margin: 0 auto;

        .top{
            padding: 35px 15px 48px;
            justify-content: space-between;
            width: 100%;
            display: flex;
        
            .color_txt{
                color: var(--secondary-color);
            }

            p{
                color: #fff;
                font-style: normal;
                line-height: 24px;
                margin: 0;
            }

            address{
                margin-top:22px;
            }

            .servicos{
                max-width: 264px;
                width: 100%;
            }
        }

        .media{
            margin: 30px 0;
            .mediaBox{
                margin: 0 auto;
                max-width: 250px;
                width: 100%;
                display: flex;
                justify-content: space-around;
            }
        }
    }

    .bottom{
        background-color: #086C51;
        text-align: center;
        padding: 22px 0;   
    }
    
    @media(max-width: 850px){
        .container{
            .top{
                flex-direction: column;
                max-width: 300px;
                width: 100%;
                margin: 0 auto;
                
                .kalore{
                    margin: 30px 0;
                }
            }
        }
    }

`