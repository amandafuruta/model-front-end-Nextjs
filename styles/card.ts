import styled from 'styled-components'

export const Card = styled.div`
    background-color: #f9f9f9;
    max-width: 316px;
    width: 100%;
    height: 138px;
    border: 1px solid rgba(2, 126, 92, 0.27);
    border-radius: 6px;
    padding: 0 41px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 26px;

    p{
        color: #333333;
        max-width: 275px;
        height: 58px;
        line-height: 29px;

        &:before {
            content: "";
            width: 64px;
            height: 3px;
            background-color: var(--primary-color);
            position: absolute;
            top: 25px;
        }
    }

    &:hover{
        background-color: #027E5C;
        p{
            color: #fff;
            &:before{
                background-color: #AAEFAF;
            }
        }
    }
`