import styled from 'styled-components'

export const Section1 = styled.section`
    background-color: #FFFF;
    padding: 189px 20px 50px;

    p{
        margin: 0;
    }

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

                p{
                    line-height: 27px;
                }
            }

            a{
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
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

    @media(max-width:850px){
        .container{
            flex-direction: column-reverse;
            align-items: center;

            .right{
                button{
                    margin: 0 auto;
                }
            }
        }
    }

    @media(max-width:450px){
        padding: 90px 20px 50px;
        .container{
            .left{
                display: flex;
                justify-content: center;
                max-width: 315px;
            }
            .right{
                max-width: 350px;

                h1{
                    font-size: 25px;
                }
            }
        }
    }

    @media(max-width:375px){
        .container{
            .right{
                h1, span{
                    text-align: center;
                }
                
            }
        }
    }
`

export const Section2= styled.section`
    max-width: 1920px;
    margin: 0 auto;

    p{
        margin: 0;
    }

    .top{
        height: 345px;
        background-image: url("/images/background.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative; 

        .traco{
           width: 64px; 
           height: 3px;
           background-color: var(--primary-color);
           position: absolute;
           right: calc(50% - 25px);
           top: 215px;
        }

        h2{
            position: absolute;
            max-width: 446px;
            text-align: center;
            margin: 0 auto;
            right: 0;
            left: 0;
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

    @media(max-width:450px){
        .top{
            height: 300px;
            .traco{
                top: 150px;
            }

            h2{    
                font-size: 32px;
                max-width: 360px;
              
            }
        }

        .bottom{
            padding: 55px 20px 50px;
            p{
                max-width: 360px;
            }
        }
    }
`

export const Section3= styled.section`
    background: linear-gradient(180deg, #F8F8F8 28%, #FFF 28%);
    padding: 0 20px 200px;
    text-align: center;

    h3, p{
        text-align: center;
    }

    h3{
        p{
            color: #AAEFAF;
        }
    }

    p{
        color: #fff;
        margin: 0;
    }

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
    
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

    a{
        text-decoration: none;
        display: flex;
        align-items:center;
        justify-content: center;
        margin: 0 auto;
    }

    

    @media(max-width:800px){
        background: #f8f8f8;
     
        .container{
            flex-direction: column;
            .box1{
                margin-bottom: 34px;
            }
            .box2{
                margin-bottom: 34px;
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

    @media(max-width:800px){
        padding: 70px 20px 100px;

        .container{
            .card_container{
                justify-content: center;
            

                .contato{
                    flex-direction: column;
                    max-width: 400px;
                    p{
                        margin: 8px 0 52px;
                    }

                    a{
                        height: 60px;
                    }
                }
            }
        }
    }

    @media(max-width:364px){
        .container{
            .card_container{
                .contato{
                    a{
                        text-align: center;
                    }
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

        .title{
            display: flex;
            max-width: 819px;
            margin: 0 auto;

            .first{
                margin-right: 40px;
            }
        }

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

        p{
            line-height: 29px;
        }
    }

    @media(max-width:970px){
        .container{
            max-width: 750px;
            .title{
                flex-direction: column;
                .first{
                    margin-bottom: 40px;
                }
            }
            .detail2{
                display: none;
            }
        }
    }

    @media(max-width:800px){
        .container{
            padding: 0 30px;
        }
    }

    @media(max-width:450px){
        padding: 39px 20px 111px;
        .container{
            .title{
                .first{
                    margin: 0;
                }
            }
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
    @media(max-width:600px){
        .container{
            h4{
                &:before{
                    right: 42%;
                }
            }
        }
    }


`

export const Section7= styled.section`
    padding: 92px 20px 128px;
    text-align: center;

    .container{
        margin-bottom: 90px;
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
    @media(max-width:600px){
        .container{
            h4{
                &:before{
                    right: 42%;
                }
            }
        }
    }
`

export const Section8= styled.section`
    padding: 150px 20px;
    background-color:#F8F8F8;

    .container{
        h4{
            text-align: center;
            margin: 0 auto 76px;
            padding-top: 37px;
            position: relative;

            &:before{
                content: "";
                width: 64px;
                height: 3px;
                background-color: var(--primary-color);
                position: absolute;
                top: 0;
                right: 47%;

            }
        }

        .depo{
            .swiper {
                width: 100%;
                height: 100%;
            }

            .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #F8F8F8;

                /* Center slide text vertically */
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;

                h5{        
                    margin-top: 0;
                    margin-bottom: 15px;
                }

                p{
                    max-width: 468px;
                    text-align: center;
                }

                span{
                    margin-bottom:  40px;
                    color: #009069;
                }
            }

            .swiper-horizontal{
                .swiper-pagination-bullets{
                    bottom:0px;
                }
                .swiper-pagination-bullet-active{
                    background-color:#009069;
                }
            }
        }
    }

    @media(max-width:600px){
        padding: 90px 20px 65px;
        .container{
            h4{
                &:before{
                    right: 42%;
                }
            }
        }
    }
/* 
    @media(max-width:450px){
        padding: 90px 20px 65px;

        .container{
            h4{
                &:before{
                    right: 44%;
                }
            }
        }
    } */
`