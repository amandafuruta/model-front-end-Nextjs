import styled from 'styled-components'

export const FooterStyle = styled.footer`
    background-color: var(--primary-color);
    
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

            .servicos{
                max-width: 440px;
                width: 100%;
                
                .op{
                    
                    margin-top:32px;
                    display: flex;
                    flex-direction: column;

                    .line{
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        display: flex;

                        a{
                            max-width: 188px;
                            width: 100%;
                            line-height: 22px;
                        }

                    }
                }
            }

            .fale_conosco{
                address{
                    font-style: normal;
                    color: #fff;
                    max-width: 196px;
                    line-height: 21px;
                    margin-bottom: 35px;
                    margin-top:22px;
                }

                span{
                    line-height: 24px;
                }
            }
        }
    }

    .bottom{
        background-color: #086C51;
        text-align: center;
        padding: 22px 0;   
    }
    
    @media(max-width:800px){
        .container{
            .top{
                flex-direction: column;
                align-items: center;
                .servicos{
                    .op{
                        .line{
                            flex-direction:column;
                            margin-bottom: 0 !important;
                            a{
                                margin-bottom: 36px;
                            }
                        }
                    }
                }
                .fale_conosco{
                    max-width: 440px;
                    width: 100%;
                
                }
            }
        }
    }

    @media(max-width:450px){
        .container{
            padding: 0 15px;
        }
    }
`