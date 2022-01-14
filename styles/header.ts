import styled from 'styled-components'

export const HeaderStyle = styled.header`
    padding: 14px 0 15px;
    position: fixed;
    width: 100%;
    background-color: var(--primary-color);
    z-index: 2;

    a{
        color: #fff;
        position: relative;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        align-items: flex-end;
    }
    
    .sobre{
        position: absolute;
        background-color: var(--primary-color);
        padding: 0;
        right: 42%;
        top: 79px;
        display: none;

        ul{
            padding: 0;
            margin: 0;
            li{
                padding: 10px 44px;
                
                &:hover{
                    background-color: #077658;
                }
            }
        }
    }

    .container{
        max-width: 1030px;
        padding: 0 20px;
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;

        nav{
            max-width: 660px;
            width: 100%;
            display: flex;
            justify-content: space-between;

            ul{
                max-width: 437px;
                width: 100%;
                display: flex;
                justify-content: space-between;

            }

            
        }

        .menu_mobile{
            display: none;
        }
    }

    .open_menu{
        display: none;
    }

    @media(max-width:1055px){
        .container{
            max-width: 935px; 
        }
    }

    @media(max-width:1024px){
        .container{
            display: flex;
            justify-content: center;
            nav{
                display: none;
            }
        }

        .open_menu{
            display: flex;
            position: absolute;
            right: 25px;
            top: 20px;
            background-color: #009069;
            border: none;
        }

        .menu_mobile{
            position: absolute;
            background-color: #009069;
            right: 0;
            top: 73px;
            max-width: 480px;
            width: 100%;
            padding: 50px 0 50px;
            z-index: 2;

            nav{
                ul{
                    width: fit-content;                    
                    margin: 0 auto;
                    padding: 0;

                    li{
                        margin: 0 auto;
                        width: inherit;
                        list-style: none;
                        a{
                            text-decoration: none;
                            text-align: center;
                            color: #fff;
                        }
                    }

                    li+li{
                        margin-top: 40px;
                    }
                }
            }
        }
    }

    

    @media(max-width:450px){
        padding: 20px 0 15px;

        .container{
            max-width: 360px;
        }

        .open_menu{
            top: 24px;
        }
    }

    @media(max-width:405px){
        .container{
            justify-content: flex-start;
        }
        .open_menu{
            right: 12px;
        }
    }
`