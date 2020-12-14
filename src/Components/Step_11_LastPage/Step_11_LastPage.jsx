import React, { Component } from 'react';
import { Div,Image} from "atomize";

import './Step_11_LastPage.css';
class Step_11_LastPage extends Component {
    render() {
        return (
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)"}}>
        
         <Div className="row row-center" >
         <Image className="last" src="assests/last.png" alt="car image"/>
                

        </Div>
        </Div>
        );
    }
}

export default Step_11_LastPage;