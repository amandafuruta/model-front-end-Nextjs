import styled from 'styled-components'

export const Publications = styled.section`
    padding-top: 79px;
    
    .title_banner{
        margin-bottom: 71px;
        background-color: #F8F8F8;
        text-align: center;
        padding: 32px 0;
        h1{
            color: var(--primary-color);
            margin: 0;
        }
    }

    .container{
        max-width: 905px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .containerNewsDetails{
        max-width: 600px;
        margin: 0 auto;
        padding: 0 20px;
        text-align: center;

        img{
            max-width: 400px;
            width: 100%;
        }
    }

    .bottom{
        margin: 105px 0 56px;

        h2{
            text-align: center;
            position: relative;
            margin-top: 0;
            margin-bottom: 119px;
            padding-top: 32px;

            &:before{
                content: "";
                width: 64px;
                height: 3px;
                background-color: var(--primary-color);
                position: absolute;
                left: 48%;
                top: 0;
            }
        }
    }

    @media(max-width:600px){
        .bottom{
            h2{
                &:before{
                    left: 45%;
                }
            }
        }
    }
`