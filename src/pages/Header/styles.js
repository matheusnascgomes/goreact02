import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100px;
    padding: 30px;
    background-color: #FFF;

    .info_header{

        display: flex;

        img{
            border-radius: 3px;
            height: 25px;
            width: 25px;
        }

        .text{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 8px;
        }
        .text p{
            font-weight: bold;
        }
    }
`;

export const FilterStatus = styled.select`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 127px;
    height: 42px;
    border: 1px solid #ddd;
    background: #fff;
    color: #999;
    font-size: 15px;
    font-family: Helvetica, sans-serif;
    padding: 12px;
    border-radius: 3px;
`;
