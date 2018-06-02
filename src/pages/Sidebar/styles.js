import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    height: 100vh;
    width: 320px;
    padding: 30px;

`;

export const FormStyled = styled.form`
    display: flex;
    justify-content: space-around;
    padding-bottom: 24px;
    border-bottom: 1px solid #EEE;
    *{
        border-radius: 3px;
    }

    input{
        background: #EEE;
        height: 35px;
        padding: 0 8px;
        font-size: 14px;
        color: #808080;
        border: 0;
    }

    button{
        width: 40px;
        background: #59EA9A;
        border: 0;
        color: #FFF;
    }
`;

export const ListSeach = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`;

export const ListItems = styled.div`

    display: flex;
    align-items: center;

    .text{
        display: flex;
        flex-direction: column;
        margin-left: 8px;

        p{
            font-weight: bold;
            margin-bottom: 2px;
            font-size: 14px;
        }
        small{
            font-size: 12px;
            color: #a2a0a0;
        }
    }

    img{
        border-radius: 3px;
        height: 45px;
        width: 45px;
    }

    .icon_select{
        font-weight: bold;
        margin-left: 67px;
        color: #a2a0a0;
    }
`;
