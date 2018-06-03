import styled from 'styled-components';

export const ListSearch = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
`;

export const ListItems = styled.div`

display: flex;
align-items: center;
margin: 4px 0;

img{
    border-radius: 3px;
    height: 45px;
    width: 45px;
}

.block_info{

    display: flex;
    justify-content: space-between;
    width: 100%;

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

    .icon_select{
        font-weight: bold;
        color: #a2a0a0;
    }

}
`;
