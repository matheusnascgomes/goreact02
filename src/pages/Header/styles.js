import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100px;
    padding: 30px;
    width: 100%;

    .info_header{

        display: flex;

        img{
            border-radius: 3px;
            height: 45px;
            width: 45px;
        }

        .text{
            display: flex;
            flex-direction: column;
            margin-left: 8px;
        }
    }

    .filter{

        select{
            height: 42px;
            border: 1px solid #DDD;
        }
    }
`;
