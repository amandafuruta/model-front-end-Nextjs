import styled from 'styled-components'

export const HeaderStyle = styled.header`
    padding: 10px 0 15px;

    a{
        color: #262626;
        position: relative;
        cursor: pointer;
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
    }
`