import {createGlobalStyle} from 'styled-components'

export const GlobalStyle=createGlobalStyle`
    :root{
        --primary-color: #009069;
        --secondary-color: #AAEFAF;
    }

    html {
        scroll-behavior: smooth;
    }

    body{
        margin: 0;
        
    }

    .btnSmall{
        max-width: 67px;
        
    }

    .btnBig{
        max-width: 150px;
    }

    .button{
        border: none;
        background-color: var(--primary-color);
        border-radius: 100px;
        padding: 0 34px;
        color:#fff;
        width: 100%;
        height: 50px;

        &:hover{
            background-color: #077658;
        }
    }

    .buttonWhite{
        border: none;
        background-color: #fff ;
        border-radius: 100px;
        padding: 0 34px;
        color:var(--primary-color);
        max-width: 135px;
        width: 100%;
        height: 50px;
    }

    li{
        list-style: none;
    }

    .hvr-grow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    }
    .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .whats-fixed {
        position: fixed;
        right: 30px;
        bottom: 50px;
        width: 70px;
        z-index: 999;

        svg {
            width: 100%;
            height: auto;

            .bg-whats {
            fill: #25d366;
            transition: 0.3s;
            }
        }
        svg:hover {
            .bg-whats {
                transition: 0.3s;
            fill: #09bd4d;
            }
        }
    }

    @-webkit-keyframes hvr-hang {
        0% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
        50% {
            -webkit-transform: translateY(4px);
            transform: translateY(4px);
        }
        100% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
    }
    @keyframes hvr-hang {
        0% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
        50% {
            -webkit-transform: translateY(4px);
            transform: translateY(4px);
        }
        100% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
    }

    @-webkit-keyframes hvr-hang-sink {
        100% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
    }

    @keyframes hvr-hang-sink {
        100% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
    }
    .hvr-hang {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    .hvr-hang, .hvr-hang:focus, .hvr-hang:active {
        -webkit-animation-name: hvr-hang-sink, hvr-hang;
        animation-name: hvr-hang-sink, hvr-hang;
        -webkit-animation-duration: .3s, 1.5s;
        animation-duration: .3s, 1.5s;
        -webkit-animation-delay: 0s, .3s;
        animation-delay: 0s, .3s;
        -webkit-animation-timing-function: ease-out, ease-in-out;
        animation-timing-function: ease-out, ease-in-out;
        -webkit-animation-iteration-count: 1, infinite;
        animation-iteration-count: 1, infinite;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-direction: normal, alternate;
        animation-direction: normal, alternate;
    }

    


`