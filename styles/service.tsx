import styled from 'styled-components'

export const ServiceStyle = styled.section`
    padding-top: 79px;
    

    h2{
        font-size: 28px;
        font-weight: normal;
        color: var(--primary-color);
    }

    p{
        line-height: 26px;
    }

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

    .section1{
        padding: 0 73px 112px;
        max-width: 1295px;    
        margin: 0 auto;
        
        .container{
            display: flex;
            justify-content: end;
            align-items: center;
            margin-bottom: 50px;

            .texto{
                margin-right: 67px;
                min-width: 324px;

                h1{
                    margin: 0;
                    max-width: 324px;
                    line-height: 49px;
                    color: var(--primary-color);
                }
            }

            .img{
                max-width: 650px;
                width: 100%;
                img{
                    width: 100%;
                }
            }
        }

        .textBottom{     
            width: fit-content;
            margin-left: 167px;


            p{
                
                max-width: 802px;
            }
        }

        
    }

    .section2{
        padding: 0 20px 85px  ;
        .container{
            display: flex;
            justify-content: center;
            .image{
                background-image: url("/images/img2.png");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                height: 300px;
                max-width: 430px;
                width: 100%;
                background-color: rgba(0, 59, 41, 0.4);
                background-blend-mode: multiply;
                margin-right: 57px;
            }

            .text{
                h2{
                    max-width: 333px;
                    line-height: 39px;
                    margin: 0 0 23px;
                }
                p{
                    max-width: 500px;
                }
            }
        }
    }

    .section3{
        display: flex;
        justify-content: center;      
        padding: 0 20px 64px;
    }

    .section4{
        background-image: url("/images/greenService.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 193px 0 186px;

        .container{
            display: flex;
            align-items: center;
            justify-content: center;

            h5{
                font-size: 42px;
                font-weight: normal;
                color: #AAEFAF;
                max-width: 270px;
                margin: 0 64px 0 0;
            }

            p{
                color: #fff;
                max-width: 290px;
            }
        }
    }

    .section5{
        padding: 147px 20px;
        display: flex;
        justify-content: center;

        .container{
            max-width: 1000px;
            width: 100%;

            h6{
                font-size: 28px;
                font-weight: normal;
                color: var(--primary-color);
                margin: 0;
            }
            p{
                max-width: 364px;
            }

            .bottom{
                max-width: 1000px;
            }

            .top{
                max-width: 947px;
                margin-bottom: 103px;
            }

            .top, .bottom{
                display: flex;
                justify-content: space-between;
                

                #first{
                    p{
                        max-width: 450px;
                    }
                }

                #second{
                    p{
                        max-width: 456px;
                    }
                }
            }
        }
    }

    @media(max-width: 1300px){
        .section1{
            .textBottom{
                margin-left: 120px;
            }
        }
    }

    @media(max-width:1237px){
        .section1{
            padding: 0 103px 112px;
            .textBottom{
                margin: 0 ;
            }
        }
    }

    @media(max-width:870px){
        .section1{        
            padding: 0 20px 112px;
        }
    }

    @media(max-width:870px){
        .section1{        
            .container{
                flex-direction: column;
                .texto{
                    margin-right: 0;
                    margin-bottom: 70px;
                    h1{
                        max-width: unset;
                        text-align: center;
                    }
                }
            }
        }

        .section5{
            .container{
                .top,.bottom{
                    width: fit-content;
                    margin: 0 auto 50px;
                    flex-direction: column;
                }

                .top, .bottom{
                    .first{
                        margin-bottom: 50px;
                    }
                }

                .bottom{
                    #first, #second{
                        p{
                            max-width: 400px;
                            
                        }
                    }
                }
            }
        }
    }

    @media(max-width:650px){
        .section2{
            .container{
                flex-direction: column;
                align-items: center;

                .image{
                    margin-right: 0;
                }
                .text{
                    h2{
                        max-width: unset;
                        text-align: center;
                        margin-top: 50px;
                    }
                    p{
                        text-align: justify;
                        margin: 0 auto;
                    }
                }
            }
        }

        .section4{
            .container{
                flex-direction: column;
                h5{
                    margin-right: 0;
                    max-width: 292px;
                }
            }
        }
    }
`