import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 1.5rem;

    .issue{
        display: flex;
        padding: 20px;
        margin: 20px;
        background: #fff;
        width: 296px;

        img{
            border-radius: 50%;
            width: 64x
            height:64px
        }

        .block_info{
            margin-left: 8px;


            .text{
                font-weight: bold;
            }

            .user_name{
                font-size: 12px;
                color: #989898;
            }

            button{
               background-color: #B286D1;
               border: 1px solid #B286D1;
               height: 25px;
               width: 100px;
               font-size: 10px;
               color: #fff;
               border-radius: 4px;
               font-weight: bold;
            }
        }

    }
`;
