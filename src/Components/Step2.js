import React, { Component } from 'react';
import { Div,Text} from "atomize";
import { Button } from 'react-bootstrap';
import {ProgressBar,Card} from 'react-bootstrap';
import {Input,Tooltip,Select} from 'antd';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Step2.css';
import BasicDropdown from './BasicDropdown'

import ImagesLine from './ImagesLine'

class Step2 extends Component {
    move=()=>{
        this.props.nextStep();
  }
  
    render() {
        const { Option } = Select;

        function handleChange(value) {
          console.log(`selected ${value}`);
        }
        return (
            
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)"}}>
             
                <Div className="row-center">
                   <ProgressBar now={10} style={{width:"750px",background: "#E5E5E5",borderRadius: "10px",marginTop:"30px"}} />
                </Div>

                    <Div className="row row-center" >
                                <Text className="heading-one" tag="h1">Some Basic Information About You </Text>
                        </Div>

            
             <Div className="row row-center" >
                <Card className="cardhandle">
                   
                    <Div className="row" style={{marginTop:"10px"}}>
                            <Div className="col-lg-6 col-md-6 col-sm-6 ">
                           
                 {/* <InputField/>*/}         
                           
                   {/*      <Input className="input-field" placeholder="First Name" 
                                             />  */}
      
                                      <Input className="input-field" placeholder="First Name" 
                                               
                                      />
                  
                                
                                
                                </Div>

                                <Div className="col-lg-6 col-md-6 col-sm-6">
                          
     
                                <Input className="input-field" placeholder="Last Name" />
                                     
                             
                                      </Div>
                         </Div>

                    <Div className="row" style={{marginTop:"0px"}}>
                            <Div className="col-lg-6 col-md-6 col-sm-6">
                                <Input className="input-field" placeholder="Phone Number" />
                                </Div>

                                <Div className="col-lg-6 col-md-6 col-sm-6">
                                <Input className="input-field" placeholder="Email" />
                                      </Div>
                         </Div>

                    <Div className="row" style={{marginTop:"0px"}}>

                            <Div className="col-lg-6 col-md-6 col-sm-6 ">
                                   <BasicDropdown/>     
   
                                </Div>

                                <Div className="col-lg-6 col-md-6 col-sm-6 ">
                               
                                             <Input className="input-field" placeholder="Date of Birth" />
                               
                                </Div>

                    

                                
                         </Div>

                         <Div className="row" >

                                    <Text className="base-txt" >
                                    By hitting Next below, I provide my express written consent to the following. 
                                    Telemarketing calls, text messages, emails, and postal mail from this Web site, 
                                    our marketing and re-marketing network, and up to eight insurance companies or their 
                                    affiliates  or representatives at the phone number (including wireless number), 
                                    email address, and postal address provided by me. Telemarketing calls, text messages, 
                                    emails, and postal mail (including wireless number), email address, and postal 
                                    address provided by me. Calls and text messages transmitting insurance quotes, or 
                                    seeking related additional information from me, using an Automated Telephone Dialing System 
                                    or prerecorded or artificial voices. Electronic video monitoring and recordation of 
                                    my activities on this Site; and I acknowledge that I may revoke my consent at any time 
                                    by Calling1 888-316-1350 or emailing “STOP” to optout@quotehound.com.I AGREE TO ALL 
                                    OF THE ABOVE AND SEND MY QUOTE

                                    </Text>

                                    </Div>

                      
                        <Div className="row row-center" >
                                    <Button className="base-btn" onClick={()=>this.move()}>

                                               Next
                                    
                                      </Button>
                              
                        </Div>

                    </Card>

                    

                    </Div>

                                    <ImagesLine/>

            </Div>
           
        );
    }
}

export default Step2;