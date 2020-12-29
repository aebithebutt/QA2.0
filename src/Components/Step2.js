import React, { Component } from 'react';
import { Div,Text} from "atomize";
import { Button } from 'react-bootstrap';
import {ProgressBar,Card} from 'react-bootstrap';
import {Input,Tooltip,Select,Form} from 'antd';
import ImagesLineBlock from './ImagesLineBlock'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Step2.css';
//import BasicDropdown from './BasicDropdown'

import ImagesLine from './ImagesLine'

class Step2 extends Component {

  formRef = React.createRef();
    state = {
		startDate: new Date(),
        dateValue: "",
        check:"",
        check2:"",
        check3:"",
        check4:"",
        check5:"",
        check6:"",
        username: "",
        years: "",
        stateName: "",
        error: "",
        loading: false,
        response: "",
        Primary_Phone: "",
        Gender:"",


  };
  

  //   move=()=>{
  //       this.props.nextStep();
  // }
  onFinish = (values) => {
   
    console.log(this.state.dateValue)
    console.log(values.firstName)
    console.log(values.lastName)
    console.log(values.email)
    console.log(this.state.Primary_Phone)
    console.log(this.state.Gender)
    
    // console.log(this.props.first_name);
   this.props.first_name(values.firstName);
   this.props.last_name(values.lastName);
   this.props.dob(this.state.dateValue);
   
   this.props.email_address(values.email);
    //console.log(this.props.email_address)
   this.props.phone_home(this.state.Primary_Phone);
   this.props.gender(this.state.Gender)

   this.props.nextStep();
   // console.log("Post Data 1 = ");
   // console.log(this.props.postData);
    // console.log("Post Data 2 = ");
    // console.log(this.props.copyValuesToPostData2());
  

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
    this.setState({ 
        dateValue: value,
        // check6: 'true'
    
    });
};

simplePhone = (value) => {
    const reg = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/;
    value = value.replace(reg, "$1$2$3");
    if (reg.test(value)) {
      this.setState({
        ...this.state,
        Primary_Phone: value,
      });
      console.log(value);
    }
  };
  
    render() {
        const { Option } = Select;

        function handleChange(value) {
          console.log(`selected ${value}`);
        }
        return (
            
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)"}}>
           
                <Div className="row-center">
                   <ProgressBar now={10} className="step2-progressBar" />
                </Div>

                    <Div className="row row-center " >
                                <Text className="heading-one" tag="h1">Some Basic Information About You </Text>
                        </Div>

            
             <Div className="row row-center card-row" >
                <Card className="cardhandle">

                <Form
                 ref={this.formRef}
						name="basic"
						initialValues={{
							remember: true,
						}}
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
					>
                   
                    <Div className="row " style={{marginTop:"10px"}}>
                            <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields">
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
                                    name="firstName"
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

                                <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields">
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
                            <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields">
                            <Form.Item
							name="phoneNumber"
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please enter Phone Number!",
                                },
                                {
                                    max: 14,
                                    message: "Please Enter Valid Phone Number ",
                                  },
                                  {
                                    pattern: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/,
                                    message: "Please Enter Valid Phone Number ",
                                  },
							]}
						>
                              
                                <Input className="input-field" 

                                            onChange={(e) => {
                                                let value = e.target.value;
                                                const reg = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/;
                                                value = value.replace(reg, "($1) $2-$3");
                                                if (reg.test(value)) {
                                                this.formRef.current.setFieldsValue({
                                                    phoneNumber: value,
                                                });
                                                console.log(value);
                                                }
                                                this.simplePhone(value);
                                            }}
                                            maxLength="14"
                                            type="text"
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
                                </Form.Item>
                                </Div>

                                <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields">
                                <Form.Item
                                          name="email"
                                          hasFeedback
                                          rules={[
                                            {
                                              required: true,
                                              message: "Please enter Email!",
                                                            },
                                                              {
                                                                type: "email",
                                                              },
                                                          
                                          ]}
                                        >
                              
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
                                </Form.Item>
                                      </Div>
                         </Div>

                    <Div className="row" style={{marginTop:"0px"}}>

                            <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields">
                                
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
                                               
                                               {
                                               
                                                if(value !== 'Gender'){
                                                    this.setState({
                                                        Gender:value,
                                                        check5 : 'true'
                                                    })
                                                }
                                                else {

                                                }
                                                
                                                }
                                        
                                                }>
                                  
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                        
                                        <Option value="Non-Binary">Non-Binary</Option>
                                        </Select>
                                                                    
                                </Form.Item>
                                </Div>

                                <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields">
                                {/* <Form.Item
							name=""
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please enter last name!",
								},
							]}
						> */}
                                             <Input className="input-field" 
                                             	placeholder="MM/DD/YYYY"
                                                 size={"large"}
                                                 maxLength={10}
                                               //  defaultValue="MM/DD/YYYY"
                                                 style={{ width: "100%" }}
                                                 onChange={this.onChangeHandler}
                                                 value={this.state.dateValue}
                                                //  onChange={(value) => {
                                                //     console.log(value)
                                                   
                                                //         this.setState({
                                                //             check6 : 'true'
                                                //         })
                                                    
                                                // }
                                          //  }
                     
                                             />
                    {/* </Form.Item> */}
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

{/*                           
             { 
           //  this.state.check1=='true' &&   this.state.check2=='true'  &&   this.state.Check3=='true'  &&   this.state.check4=='true' &&
                this.state.check6=='true' // &&   this.state.check6=='true'
             ? */}
                        <Div className="row row-center" >
                                   <Form.Item>
                                    <Button className="base-btn" type="primary" htmlType="submit" 
                                  //  disabled={false}
                                    // onClick={()=>this.move()}

                                    >

                                               Next
                                    
                                      </Button>
                                  
                                      </Form.Item>
                                      </Div>

                                     
                                       {/* :
                              <Div className="row row-center-step6">
                              <Form.Item>
                              <Button className="base-btn-step6" style={{ background: "#B0B7C3"}}  disabled={true} >  Next </Button>
                              </Form.Item>
  
                                </Div>
           
                       
                    }  */}
                </Form>
                    </Card>

                    

                    </Div>

                                    <ImagesLine/>

                                    <Div className="col-sm-12" style={{marginTop:"50px"}} >
                                               <ImagesLineBlock/>
                                          </Div>

                                   
            </Div>
           
        );
    }
}

export default Step2;