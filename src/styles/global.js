import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background-color: #F5F5F5;
        text-rendering: optimizeLegibility !import;
        -webkit-font-smoothing: antialiased !import;
        font-family: sans-serif;
    }

    .app{
        display: flex;
    }

    .main_container{
        display: flex;
        flex-direction: column;
    }
`;
