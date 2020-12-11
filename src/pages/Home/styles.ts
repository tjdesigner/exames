import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    margin-left: 60px;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    color: #fff;
    border-left: 1px solid #cdd8e0;
`

export const Back = styled.div`
    display: flex;
    align-items: center;
    padding: 0 7px;
    height: 100px;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 428px;
    margin: 0 auto;

    > h1 {
        color: #083245;
        margin: 0;
        margin-bottom: 48px;
    }

    > input {
        border-radius: 4px;
        height: 48px;
        border: 1px solid #ebeef0;
        background-color: #fff;
        transition: all 0.6s ease;
        padding: 10px;

        &::placeholder {
            color: #8398a2;
        }

        &:focus {
            outline: 0;
            border-color: #2291fd;
        }
    }

    p {
        color: #8398a2;
        font-size: 14px;
        line-height: 18px;
    }

    .label {
        margin: 7px 0;
    }

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 24px 0;

        svg {
            margin-right: 5px;
        }

        .info {
            text-align: center;

            > a {
                text-decoration: none;
                color: #2291fd;
            }
        }
    }
`
