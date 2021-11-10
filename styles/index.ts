import styled from 'styled-components'

export const Section1 = styled.section`
    background-color: #FFFF;
    padding: 100px 20px 50px;

    .container{
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        max-width: 860px;

        .right{
            max-width: 428px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 10px;
            
            h1{ 
                margin-bottom: 23px;
            }

            span{ 
                max-width: 331px;
                width: 100%;
                margin-bottom: 33px;
            }
        }

        .left{
            max-width: 377px;
            width: 100%;
            img{
               
                width: 100%;
            }
        }
    }
`

export const Section2= styled.section`
    
    .top{
       height: 371px;
       max-width:1348px;
       width: 100%;
       margin: 0 auto;
       display: flex;
       position: relative;

       .left{
            width: 50%;
            position: relative;
            background: linear-gradient(160deg, #FFF 40%, #F8F8F8 40%);
            position: relative;

            &:after{
                content: "";
                position: absolute;
                border-top: 1px solid var(--primary-color);
                max-width: 1177px;
                width: 114%;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                -webkit-transform: rotate(-28deg);
                -ms-transform: rotate(-28deg);
                -webkit-transform: rotate(-28deg);
                -ms-transform: rotate(-28deg);
                transform: rotate(-28.5deg);
                -webkit-transform-origin: 0% 0%;
                -ms-transform-origin: 0% 0%;
                -webkit-transform-origin: 0% 0%;
                -ms-transform-origin: 0% 0%;
                -webkit-transform-origin: 0% 0%;
                -ms-transform-origin: 0% 0%;
                transform-origin: 0% 0%;
                bottom: 0px;
            }
           
       }

       .right{
            width: 50%;
            background: linear-gradient(200deg, #FFF 40%, #F8F8F8 40%);
            position: relative;
            overflow: hidden;

            &:after{
                content: "";
                position: absolute;
                border-top: 1px solid var(--primary-color);
                max-width: 1110px;
                width: 111%;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                -webkit-transform: rotate(-28deg);
                -ms-transform: rotate(-28deg);
                -webkit-transform: rotate(25deg);
                -ms-transform: rotate(25deg);
                transform: rotate(25deg);
                -webkit-transform-origin: 0% 0%;
                -ms-transform-origin: 0% 0%;
                -webkit-transform-origin: 0% 0%;
                -ms-transform-origin: 0% 0%;
                -webkit-transform-origin: 0% 0%;
                -ms-transform-origin: 0% 0%;
                transform-origin: 0% 0%;
                top: 3px;
                
            }
       }

       .traco{
           width: 64px; 
           height: 3px;
           background-color: var(--primary-color);
           position: absolute;
           right: calc(50% - 32px);
           top: 215px;
       }

       h2{
            position: absolute;
            max-width: 446px;
            text-align: center;
            margin: 0;
            right: 34%;
            bottom: 0;
       }
    }
    
    .bottom{
        padding: 55px 20px 110px;
        background-color: #F8F8F8;

        p{
            margin: 0 auto 49px;
            max-width: 538px;
            text-align: center;
        }
    }
`

export const Section3= styled.section`
    background: linear-gradient(180deg, #F8F8F8 50%, #FFF 50%);
    padding: 0 20px 131px;
    h3, p{
        text-align: center;
    }

    h3{
        color: #AAEFAF;
    }

    p{
        color: #fff;
        margin: 0;
    }

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
    
        svg{
            margin-bottom: 18px;
        }

        .box1, .box2, .box3{
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 340px;
            width: 100%;

            div{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h3{
                    margin-bottom:18px;
                    margin-top: 0;
                }

                p{
                    max-width: 265px;
                }
            }
        }

        .box1{
            div{
                height: 230px;
                background-color: #009069;
            }
        }

        .box2{
            div{
                height: 275px;
                background-color: #027E5C;
            }
        }

        .box3{
            div{
                height: 230px;
                background-color: #076048;
            }
        }
    }
`

export const Section4= styled.section`
    .container{
        
        h4{
            max-width: 350px;
            text-align: center;
            margin: 0 auto 70px;
            padding-top: 37px;
            position: relative;

            &:before{
                content: "";
                width: 64px;
                height: 3px;
                background-color: var(--primary-color);
                position: absolute;
                top: 0;
                right: 42%;

            }
        }

        .card_container{
            max-width: 820px;
            flex-wrap: wrap;
            display: flex;
            justify-content: space-between;
            margin: 0 auto 95px;

            .contato{
                width: 100%;
                background-image: url("/images/bg.png");
                background-color: rgba(0, 59, 41, 0.80);
                background-blend-mode: multiply;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                border-radius: 6px;
                display: flex;
                padding: 53px 51px 52px 75px;
                justify-content: space-between;
                margin-top: 20px;
                position: relative;

                p{
                    max-width: 175px;
                    color: #fff;
                    line-height: 22px;
                    margin: 8px 0;

                    &:before{
                        content: "";
                        width: 158px;
                        height: 2px;
                        background-color: #AAEFAF;
                        position: absolute;
                        top: 45px;
                    }
                }

                a{
                    max-width: 252px;
                    width: 100%;
                    border: 1px solid #8DF7B0;
                    border-radius: 6px;
                    background: transparent;
                    color: #fff;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
`

export const Section5= styled.section`
    background-image:  linear-gradient(218deg, rgba(3,70,52,0.86) 0%, rgba(1, 14, 10, 0.86) 100%),url("/images/bg2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 133px 20px 263px ;
    display: flex;
    align-items: center;

    .container{
        max-width: 950px;
        width: 100%;
        margin: 0 auto;
        position: relative;

        .detail{
            margin-bottom: 81px;
        }

        .detail2{
            position: absolute;
            top: 180px;
            right: -2px;
        }

        h5,p{
            color: #fff;
            text-align: center;
        }

        h5{
            margin-top: 0;
            margin-bottom: 65px;
        }
    }
`

export const Section6= styled.section`
    padding: 106px 20px 60px;

    .container{
        max-width: 905px;
        margin: 0 auto;
        h4{
            text-align: center;
            margin: 0 auto 70px;
            padding-top: 37px;
            position: relative;

            &:before{
                content: "";
                width: 64px;
                height: 3px;
                background-color: var(--primary-color);
                position: absolute;
                top: 0;
                right: 49%;

            }
        }

        .link{
            display: flex;
            justify-content: flex-end;

            a{
                color: #009069;
                text-decoration: none;
            }
        }
    }
`

export const Section7= styled.section`
    padding: 92px 20px 128px;

    .container{
        h4{
            text-align: center;
            margin: 0 auto 70px;
            padding-top: 37px;
            position: relative;

            &:before{
                content: "";
                width: 64px;
                height: 3px;
                background-color: var(--primary-color);
                position: absolute;
                top: 0;
                right: 49%;

            }
        }
        
        .logos{
            flex-wrap: wrap;
            max-width: 1180px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            div{
                margin: 5px;
            }
            
            img{
                max-width: 100px;
            }

            img+img{
                margin-left: 80px;
            }
        }
    }
`

export const Section8= styled.section`
    padding: 106px 20px 257px;
    background-color:#F8F8F8;
    .container{
        h4{
            text-align: center;
            margin: 0 auto 70px;
            padding-top: 37px;
            position: relative;

            &:before{
                content: "";
                width: 64px;
                height: 3px;
                background-color: var(--primary-color);
                position: absolute;
                top: 0;
                right: 49%;

            }
        }
    }
`