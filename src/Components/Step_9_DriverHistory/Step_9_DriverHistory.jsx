import React, { Component } from 'react';
import { Div,Text,Icon} from "atomize";
import {Select,Form} from 'antd';
import {ProgressBar,Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step_9_DriverHistory.css';
import ImagesLine from '../ImagesLine'

class Step_9_DriverHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
           dropCheck: 'false',
           dropCheck2:'false',
           dropCheck3:'false',
           dropCheck4:'false'


    };
}

	onFinish = (values) => {
		// this.props.nextStep();
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
    render() {
        const { Option } = Select;
        return (
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)",height:"930px"}}>
                   
                    <Div className="row-center-step9">
                        <ProgressBar now={20} style={{width:"750px",background: "#E5E5E5",borderRadius: "10px",marginTop:"30px"}} />
                              </Div>

                              <Div className="row row-center-step9" >
                                <Text className="heading-one-step9" tag="h1">Your Insurance Information</Text>
                        </Div>

                            <Div className="row row-center-step9" >
                                <Card className="cardhandle-step9">
                                     
                                       <Div className="row">
                                                <Icon name="LeftArrowSolid" color="#488BFF" className="iconback" />
                                        </Div>

                                        
					<Form
						name="basic"
						initialValues={{
							remember: true,
						}}
						onFinish={this.onFinish}
						onFinishFailed={this.onFinishFailed}
					>

                            <Div className="row row-center-step9" style={{marginTop:"47.25px"}} >
                   <Div className="col-lg-6 col-md-6 col-sm-6">    
                 <Select className="drop-down-step9" defaultValue="Do you have liscence"  size="large" onChange={
                     (value) => {
                        console.log(value)
                        if(value !== 'Do you have liscence'){
                            this.setState({
                                dropCheck : 'true'
                            })
                        }else{

                        }
                     }
                 }>
                    	
                               <Option value="Yes">
					            		<button
						            		className=""
						            		style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
							          
							                >
							        	Yes
						            	</button>
				            	</Option>
                  
                  
                                <Option value="No">
                      
						                	<button
						            		className=""
                                            style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
							         
						                        	>
							                	    No
						                    	</button>
                                 </Option>
                            
                              
                     </Select>
                             </Div>

              
                                 <Div className="col-lg-6 col-md-6 col-sm-6">   
                          <Select className="drop-down-step9" disabled={false} defaultValue="Have You Ever Filled for SR-22"  size="large"  onChange={(value) => {
                        console.log(value)
                        if(value !== 'Have You Ever Filled for SR-22'){
                            this.setState({
                                dropCheck2 : 'true'
                            })
                        }else{

                        }
                     }} >
                             <Option value="Yes">
                                <button
									className=""
									style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
								
							    >
									Yes
								</button>
							</Option>

                            <Option value="No">
							
								<button
									className=""
									style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
                                    onChange={(checked3) => {
                                        this.props.sr22ForPostData2(checked3 ? "Yes" : "No");
                                        this.props.Driver_1_Filing_Required(checked3 ? "SR-22" : "None");
                                    }}
								>
									No
								</button>
                                </Option>
                             
                                </Select>
                             </Div>
                      

             </Div>
           
           
             <Div className="row row-center-step9" style={{marginTop:"20px"}} >
          
        <Div className="col-lg-6 col-md-6 col-sm-6">  
        <Select className="drop-down-step9" defaultValue="Tickets Or Claims <3 Years?" disabled={false}  size="large"  onChange={
        (value)=>{
        if(value!=='Tickets Or Claims <3 Years?'){
        this.setState({
                dropCheck3: 'true'
        });
        }
        }
        }>
            
            <Option value="Yes">
                <button
                    className=""
                    style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
            
                >
                    Yes
                </button>

                </Option>
            
                <Option value="No">
                <button
                    className=""
                    style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
            	
                >
                    No
                </button>
            

                </Option>

                </Select>
                
            </Div>
       
                                <Div className="col-lg-6 col-md-6 col-sm-6">  
                                <Select className="drop-down-step9" defaultValue="Number If Tickets and Claims" disabled={false}   size="large"  onChange={
                                    (value)=>{
                                        if(value!=='Number If Tickets and Claims'){
                                            this.setState({
                                                dropCheck4 : 'true'
                                            });
                                         
                                        }
                                        else{

                                        }
                                    }
                                    }>
                                  <Option value="1">
                                    <button
                                        className=""
                                        style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }}
                                    
                                    >
                                        1
                                    </button>
                                 </Option>	
                                    
                                    <Option value="2">
                                    <button
                                        className=""
                                        style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }}
                               
                                    >
                                      2
                                    </button>
                                </Option>
                                
                                <Option value="3">
                                    <button
                                        className=""
                                        style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }}
                                    
                                    >
                                       3
                                    </button>
                                 </Option>
                                    </Select>
                                    </Div>
                              

                     </Div>
                     { 
             this.state.dropCheck=='true' &&   this.state.dropCheck2=='true'  &&   this.state.dropCheck3=='true'  &&   this.state.dropCheck4=='true'
             ?
                <Div className="row row-center-step9" style={{marginTop:"105px"}}>
                            <Button className="base-btn-step9" disabled={false} 	onClick={this.props.nextStep} 	 >  Next </Button>


                              </Div>
                              :
                              <Div className="row row-center-step9" style={{marginTop:"103px"}}>
                              <Button className="base-btn-step9" style={{ background: "#B0B7C3"}}  disabled={true} >  Next </Button>
  
  
                                </Div>
             }
					</Form>
                                         
                              
                                </Card>
                            
                            </Div>
        <Div style= {{marginLeft:"75px"}} >
              <ImagesLine/>

              </Div>
              </Div>
        );
    }
}

export default Step_9_DriverHistory;