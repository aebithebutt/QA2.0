import React, { Component } from 'react';
import './MainBody.css';
import { Div,Text,Input} from "atomize";
import {Button} from "react-bootstrap";
class MainBody extends Component {
  move=()=>{
        this.props.nextStep();
  }
   
    render() {
        return (
            <>
            <Div className="row row_bodytext1">
            <Text tag="h1" className="body-text1 pg1-text">
                       Free Car Insurance
                            </Text>
           </Div>
          
           <Div className="row">
           <Text tag="h1"  className="body-text1 pg1-text">Quote</Text>
           </Div>

       <Div className="row row_bodytext2">
           <Text className="body-text2 pg1-text">
                    Get your free auto quote with Quotehound
           </Text>
       
       </Div>
      
       <Div className="row">
           <Text className="body-text2 pg1-text">
                    today and compare <strong>real</strong> quotes online!
           </Text>
       
       </Div>

       <Div className="row">
           <Div className="col-6">
           <Input className="body_input pg1-text" placeholder="Address" />
           </Div>
              
           <Div className="col-6">
           <Button className="input_button" onClick={()=>this.move()}></Button>
           </Div>

       </Div>
      
       </>
        );
    }
}

export default MainBody;