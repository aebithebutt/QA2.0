import React, { Component } from 'react';
import './MainBody.css';
import { Div,Text,Input,Button} from "atomize";
class MainBody extends Component {
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
           
                  <Input className="body_input pg1-text" placeholder="Address" />
                  <Button className="input_button"></Button>

       </Div>
       </>
        );
    }
}

export default MainBody;