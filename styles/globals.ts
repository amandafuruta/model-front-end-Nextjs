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

    .button{
        border: none;
        background-color: var(--primary-color);
        border-radius: 100px;
        padding: 0 34px;
        color:#fff;
        max-width: 135px;
        width: 100%;
        height: 50px;
    }
`