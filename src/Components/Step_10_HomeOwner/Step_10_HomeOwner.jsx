import React, { Component } from 'react';
import ImagesLine from '../ImagesLine'
import { Div,Text,Icon} from "atomize";
import {ProgressBar,Card,Button} from 'react-bootstrap';
import {Select,Form} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step_10_HomeOwner.css';
class Step_10_HomeOwner extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
           dropCheck: 'false',
       	homeOverChecked: false,

    };


}
    render() {
        const { Option } = Select;
        return (
          
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)",height:"930px"}}>
                   
                    <Div className="row-center-step10">
                        <ProgressBar now={20} style={{width:"750px",background: "#E5E5E5",borderRadius: "10px",marginTop:"30px"}} />
                              </Div>

                              <Div className="row row-center-step10" >
                                <Text className="heading-one-step10" tag="h1"> What Is the Year of your car?</Text>
                        </Div>

                            <Div className="row row-center-step10" >
                                <Card className="cardhandle-step10">
                                     
                                       <Div className="row">
                                                <Icon name="LeftArrowSolid" color="#488BFF" className="iconback" />
                                        </Div>

                                          <Div className="row row-center-step10" >
                                             

                                          <Form
						name="basic"
						initialValues={{
							remember: true,
						}}
					
					>
						
						
								<Div className="p-2 col-md-4">
                                <Select className="drop-down-step10" defaultValue="Are You a Home Owner"  onChange={(checked1) => {
											this.props.homeOwnershipForPostData2(checked1 ? 1 : 0);
											this.setState({ homeOverChecked: !this.state.homeOverChecked });
										}}>
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    
                                        </Select>

									{this.state.homeOverChecked && (
										<Form.Item style={{width:"312px"}}>
                                         <Select className="drop-down-step10" defaultValue="Are You Interested in Home Quote"  onChange={
                                             
                                             (value)=>{
                                               
                        if(value !== 'Are You Interested in Home Quote'){
                            this.setState({
                                dropCheck : 'true'
                            })
                        }else{

                        }
                                             }
                                        
                                        
                                        }>
                                            <Option value="Yes">Yes</Option>
                                            <Option value="No">No</Option>
                                            
                                            
                                            </Select>
										</Form.Item>
									)}
								</Div>
							
							

						
					
					</Form>
                    
                                         </Div>
                         
                        { 
             this.state.dropCheck=='true'
             ?
                <Div className="row row-center-step10" style={{marginTop:"103px"}}>
                            <Button className="base-btn-step10" disabled={false}  		onClick={this.props.nextStep} >Get My Qoute</Button>


                              </Div>
                              :
                              <Div className="row row-center-step10" style={{marginTop:"103px"}}>
                              <Button className="base-btn-step10" style={{ background: "#B0B7C3"}}  disabled={true} >  Next </Button>
  
  
                                </Div>
             }
                
                                    
                              
                                </Card>
                            
                            </Div>
        <Div style= {{marginLeft:"75px"}} >
              <ImagesLine/>

              </Div>
             
              </Div>
        );
    }
}

export default Step_10_HomeOwner;