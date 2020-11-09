import React from "react"
import { createGlobalStyle } from 'styled-components'


const GlobalStyleComponent = createGlobalStyle `
    body {
        text-align: center;
        background-color: #2c2c2c;
        color: white;
    }
    
    h2{
        color:orange;
        font-weight: lighter;
    }   
    input {
        font-size: 1.5em;
        color: white;
        width: 50%;
        grid-column: 1/2;
        height: 30px;
        border-top: none;
        border-left: none;
        border-right: none;
        background-color: #2c2c2c;   
        :focus { 
        outline: none;
            background-color: #2c2c2c;
            ::placeholder{
                color:white;
                }
            }  
        
    }
    
`
function EstiloGeral (props){

    return ( <GlobalStyleComponent>
        
    </GlobalStyleComponent>

    );
}
export default EstiloGeral