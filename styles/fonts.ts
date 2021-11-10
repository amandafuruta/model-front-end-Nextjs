import { createGlobalStyle } from 'styled-components'

export const FontStyle = createGlobalStyle`
    @font-face{
        font-family: 'Raleway';
        src: url('/fonts/Raleway-ExtraBold.ttf') format('truetype');
        font-weight: 800;
    }

    @font-face{
        font-family: 'Raleway';
        src: url('/fonts/Raleway-Bold.ttf') format('truetype');
        font-weight: 700;
    }

    @font-face{
        font-family: 'Raleway';
        src: url('/fonts/Raleway-SemiBold.ttf') format('truetype');
        font-weight: 600;
    }

    @font-face{
        font-family: 'Raleway';
        src: url('/fonts/Raleway-Medium.ttf') format('truetype');
        font-weight: 500;
    }

    @font-face{
        font-family: 'Raleway';
        src: url('/fonts/Raleway-Regular.ttf') format('truetype');
        font-weight: 400;
    }

    body, button{
        font-family: 'Raleway';
    }

    [class*="title1"]{
        font-size: 40px;
    }

    [class*="title2"]{
        font-size: 36px;
    }

    [class*="title3"]{
        font-size: 32px;
    }

    [class*="title4"]{
        font-size: 26px;
    }

    [class*="title5"]{
        font-size: 24px;
    }

    [class*="p1"]{
        font-size: 18px;
    }

    [class*="p2"]{
        font-size: 16px;
    }

    [class*="p3"]{
        font-size: 15px;
    }

    [class*="p4"]{
        font-size: 14px;
    }

    [class*="-ExtraBold"]{
        font-weight: 800;
    }

    [class*="-Bold"]{
        font-weight: 700;
    }

    [class*="-SemiBold"]{
        font-weight: 600;
    }

    [class*="-Medium"]{
        font-weight: 500;
    }

    [class*="-Regular"]{
        font-weight: 400;
    }

`