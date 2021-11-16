import styled from 'styled-components'

export const HeaderStyle = styled.header`
    padding: 10px 0 15px;

    a{
        color: #262626;
        position: relative;
        cursor: pointer;
        text-decoration: none;
    }

    #active:before{
        content: '';
        width: 100%;
        height: 4px;
        background-color: var(--primary-color);
        position: absolute;
        top: -35px;
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

                li{
                    list-style: none;
                }
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
            background-color: #fff;
            border: none;
        }

        .menu_mobile{
            position: absolute;
            background-color: #009069;
            right: 0;
            max-width: 480px;
            width: 100%;
            padding: 82px 0 85px;
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
                        margin-top: 60px;
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
            top: 35px;
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