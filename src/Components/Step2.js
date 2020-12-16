import React, { Component } from 'react';
import { Div,Text} from "atomize";
import { Button } from 'react-bootstrap';
import {ProgressBar,Card} from 'react-bootstrap';
import {Input,Tooltip,Select,Form} from 'antd';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Step2.css';
//import BasicDropdown from './BasicDropdown'

import ImagesLine from './ImagesLine'

class Step2 extends Component {
    state = {
		startDate: new Date(),
        dateValue: "",
        check:"",
        check2:"",
        check3:"",
        check4:"",
        check5:"",
        check6:"",


	};
    move=()=>{
        this.props.nextStep();
  }
  onFinish = (values) => {
//   this.props.nextStep();
    this.props.Driver_1_First_Name(values.firstName);
    this.props.Driver_1_Last_Name(values.lastName);
    this.props.Driver_1_Birthdate(this.state.dateValue);
};

onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    
};
onChangeHandler = (e) => {
    var value = e.target.value;
    value = value
        .replace(/^(\d\d)(\d)$/g, "$1/$2")
        .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2")
        .replace(/[^\d\/]/g, "");
    this.setState({ dateValue: value });
};
  
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

                <Form
						name="basic"
						initialValues={{
							remember: true,
						}}
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
					>
                   
                    <Div className="row" style={{marginTop:"10px"}}>
                            <Div className="col-lg-6 col-md-6 col-sm-6 ">
                            <Form.Item
							name="firstName"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please enter first name!",
								},
							]}
						>
						
      
                                      <Input className="input-field" 
                                    //  defaultValue="First Name" 
                                      placeholder="First Name" 
                                              
                                            //   onChange={(value) => {
                                            //         console.log(value)
                                            //         if(value !== 'First Name'){
                                            //             this.setState({
                                            //                 check1 : 'true'
                                            //             })
                                            //         }else{
                            
                                            //         }
                                            //     }
                                            // }
                                      />
                  
                                
                                </Form.Item>
                                </Div>

                                <Div className="col-lg-6 col-md-6 col-sm-6">
                                <Form.Item
							name="lastName"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please enter last name!",
								},
							]}
						>
     
                                <Input className="input-field"
                               //  defaultValue="Last Name" 
                                 placeholder="Last Name" 
                                
                            //     onChange={(value) => {
                            //         console.log(value)
                            //         if(value !== 'Last Name'){
                            //             this.setState({
                            //                 check2 : 'true'
                            //             })
                            //         }else{
            
                            //         }
                            //     }
                            // }
                                />
                                     
                             </Form.Item>
                                      </Div>
                         </Div>

                    <Div className="row" style={{marginTop:"0px"}}>
                            <Div className="col-lg-6 col-md-6 col-sm-6">
                                <Input className="input-field" 
                               // defaultValue="Phone Number" 
                                placeholder="Phone Number"  
                                
                            //     onChange={(value) => {
                            //         console.log(value)
                            //         if(value !== 'Phone Number'){
                            //             this.setState({
                            //                 check3 : 'true'
                            //             })
                            //         }else{
            
                            //         }
                            //     }
                            // }
                                />
                                </Div>

                                <Div className="col-lg-6 col-md-6 col-sm-6">
                                <Input className="input-field" 
                                //defaultValue="Email" 
                                placeholder="Email"
                            //      onChange={(value) => {
                            //         console.log(value)
                            //         if(value !== 'Email'){
                            //             this.setState({
                            //                 check4 : 'true'
                            //             })
                            //         }else{
            
                            //         }
                            //     }
                            // }
                                />
                                      </Div>
                         </Div>

                    <Div className="row" style={{marginTop:"0px"}}>

                            <Div className="col-lg-6 col-md-6 col-sm-6 ">
                                
                            <Form.Item
										name="gender"
									
										hasFeedback
										rules={[
											{
												required: true,
												message: "Please select an option!",
											},
										]}
									
									>
                            <Select className="drop-down" defaultValue="Gender" onChange={(value) => 
                                                {this.props.Driver_1_Gender(value)
                                                if(value !== 'Gender'){
                                                    this.setState({
                                                        check5 : 'true'
                                                    })
                                                }
                                                else {

                                                }
                                                
                                                }
                                        
                                                }>
                                  
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                        
                                        <Option value="Non Binary">Non Binary</Option>
                                        </Select>
                                                                    
                                </Form.Item>
                                </Div>

                                <Div className="col-lg-6 col-md-6 col-sm-6 ">
                               
                                             <Input className="input-field" 
                                             	placeholder="MM/DD/YYYY"
                                                 size={"large"}
                                                 maxLength={10}
                                               //  defaultValue="MM/DD/YYYY"
                                                 style={{ width: "100%" }}
                                                 onChange={this.onChangeHandler}
                                                 value={this.state.dateValue}
                                            //      onChange={(value) => {
                                            //         console.log(value)
                                            //         // if(value !== 'MM/DD/YYYY'){
                                            //         //     this.setState({
                                            //         //         check6 : 'true'
                                            //         //     })
                                            //         // }else{
                            
                                            //         // }
                                            //     }
                                            // }
                     
                                             />
                               
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

                          
             { 
           //  this.state.check1=='true' &&   this.state.check2=='true'  &&   this.state.Check3=='true'  &&   this.state.check4=='true' &&
                this.state.check5=='true' // &&   this.state.check6=='true'
             ?
                        <Div className="row row-center" >
                                   <Form.Item>
                                    <Button className="base-btn" htmlType="submit"
                                    disabled={false}
                                    onClick={()=>this.move()}
                                    >

                                               Next
                                    
                                      </Button>
                                  
                                      </Form.Item>
                                      </Div>
                                      :
                              <Div className="row row-center-step6">
                              <Form.Item>
                              <Button className="base-btn-step6" style={{ background: "#B0B7C3"}}  disabled={true} >  Next </Button>
                              </Form.Item>
  
                                </Div>
           
                       
                    }
                </Form>
                    </Card>

                    

                    </Div>

                                    <ImagesLine/>

            </Div>
           
        );
    }
}

export default Step2;