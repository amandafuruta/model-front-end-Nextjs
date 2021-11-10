import styled from 'styled-components'

export const NewStyle = styled.a`
    height: 200px;
    max-width: 905px;
    background-color:#F8F8F8;
    border-radius: 6px;
    display: flex;
    text-decoration: none;
    margin: 0 auto 66px;


    .img{
        height: 100%;
        width: 45%;
        border-radius: 6px 0 0 6px;
    }

    .txt{
        padding-left: 50px ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 0 6px 6px 0;
        position: relative;

        p{
            color: #333333;
        }

        .top:before{
            content: "";
            width: 35px;
            height: 2px;
            background-color: var(--primary-color);
            position: absolute;
            top: 87px;
        }
    }

    &:hover{
        .txt{
            background-color: #009069;
            p{
                color: #fff;
            }

            .top:before{
                background-color: #AAEFAF;
            }
        }
    }
`