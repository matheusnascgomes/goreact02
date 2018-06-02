import styled from 'styled-components';

export const ListSearch = styled.div`
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
