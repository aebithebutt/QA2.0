import React, { Component } from 'react';
import ImagesLine from '../ImagesLine'
import { Div,Text,Icon} from "atomize";
import {ProgressBar,Card} from 'react-bootstrap';
import {Select,Button} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImagesLineBlock from '../ImagesLineBlock'
import './Step_6.css';

class Step_6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
           primaryuse:"",
           mileage:"",
           coverage:"",
           ownership:"",
           dropCheck: 'false',
           dropCheck2:'false',
           dropCheck3:'false',
           dropCheck4:'false'


    };
}

primaryUse = (e) => {
        
    this.props.vehicle_primary_use(e.target.lastChild.data,e.target.lastChild.data);
}
mileage=(e)=>{
    this.props.annual_mileage(e.target.lastChild.data);
}
coverage=(e)=>{
    this.props.desired_coverage_level(e.target.lastChild.data);
}
 ownership=(e)=>{
     this.props.vehicle_ownership(e.target.lastChild.data);
         this.props.vehicleForPostData2(e.target.lastChild.data);
        // this.props.maintainTable();
 }


    moveForward=()=>{

     
        this.props.nextStep();
    //    this.props.vehicle_primary_use(this.state.primaryuse);
    //    this.props.annual_mileage(this.state.mileage); 
    //    this.props.desired_coverage_level(this.state.coverage);
    //    this.props.vehicle_ownership(this.state.ownership);
       this.props.maintainTable();
     //  this.props.maintainTable();
    //   this.props.vehicleForPostData2(e.target.lastChild.data);
    
    //   
    //    
    // 
    }
    render() {
       
        const { Option } = Select;
        function handleChange(value) {
            console.log(`selected ${value}`);
          }

        return (
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)"}}>
                   
            <Div className="row-center-step6">
                <ProgressBar now={55} className="step6-progressBar" />
                      </Div>

                      <Div className="row row-center-step6" >
                        <Text className="heading-one-step6" tag="h1">Some Information About You {this.props.name}</Text>
                </Div>

                    <Div className="row row-center-step6 card-row-step6" >
                        <Card className="cardhandle-step6">
                             
                               <Div className="row">
                                        <Icon name="LeftArrowSolid" color="#488BFF" className="iconback-step5" />
                                </Div>
                     
                 <Div className="row row-center-step6" style={{marginTop:"47.25px"}} >
                   <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields-step6">    
                 <Select className="drop-down-step6" defaultValue="Primary use"  size="large" onChange={
                     (value) => {
                    
                        console.log(value)
                        if(value !== 'Primary use'){
                            this.setState({
                                dropCheck : 'true',
                                primaryuse:value
                            })
                        }else{

                        }
                     }
                 }>
                    	
                               <Option value="Commute">
					            		<button
						            		className=""
						            		style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
							           	onClick={(e) => this.primaryUse(e)}
							                >
							        	Commute
						            	</button>
				            	</Option>
                  
                  
                                <Option value="Pleasure">
                      
						                	<button
						            		className=""
                                            style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
                                             onClick={(e) => this.primaryUse(e)}
						                        	>
							                	Pleasure
						                    	</button>
                                 </Option>
                            
                                <Option value="Business">
					
							               <button
                                              className=""
                                              style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
                                               onClick={(e) => this.primaryUse(e)}
						                      	>
							                	Business
                                           </button>
					
                                  </Option>
                     </Select>
                             </Div>

                     {/**    {
                                 this.state.dropCheck === 'true'
                                 ? */}    
                                 <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields-step6">   
                          <Select className="drop-down-step6" disabled={false} defaultValue="Mileage"  size="large"  onChange={(value) => {
                        console.log(value)
                        if(value !== 'Mileage'){
                            this.setState({
                                dropCheck2 : 'true',
                               mileage:value
                            })
                        }else{

                        }
                     }} >
                             <Option value="Under 5,000">
                                <button
									className=""
									style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
								 onClick={(e) => this.mileage(e)}
							    >
									Under 5,000
								</button>
							</Option>

                            <Option value="5,0001-10,000">
							
								<button
									className=""
									style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
                                     onClick={(e) => this.mileage(e)}
								>
									5,001 - 10,000
								</button>
                                </Option>
                             
                                <Option value="10,001-15,000">
						
								<button
									className=""
									style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
                                     onClick={(e) => this.mileage(e)}
								>
									10,001 - 15,000
								</button>
                                </Option>
                                <Option value="15,000+">
							
								<button
									className=""
                                    style={{ marginTop:"3px",backgroundColor:"transparent",border:"none"}} 
									 onClick={(e) => this.mileage(e)}
								>
									15,000+
								</button>
                                </Option>
                                </Select>
                             </Div>
                        {/**  :
                             <Div className="col-lg-6 col-md-6 col-sm-6">   
                          <Select className="drop-down-step6" disabled={true} defaultValue="Mileage"  size="large"  onChange={handleChange} >
                             <Option value="Under 5,000">
                                <Button
									className=""
									style={{ marginTop:"3px",backgroundColor:"transparent" }} 
								        onClick={(e) => this.next(e)}
							    >
									Under 5,000
								</Button>
							</Option>

                            <Option value="5,000-10,000">
							
								<Button
									className=""
									style={{ marginTop:"3px",backgroundColor:"transparent" }} 
									onClick={(e) => this.next(e)}
								>
									5,001 - 10,000
								</Button>
                                </Option>
                             
                                <Option value="10,001-15,000">
						
								<Button
									className=""
									style={{ marginTop:"3px",backgroundColor:"transparent" }} 
									onClick={(e) => this.next(e)}
								>
									10,001 - 15,000
								</Button>
                                </Option>
                                <Option value="15,000+">
							
								<Button
									className=""
                                    style={{ marginTop:"3px",backgroundColor:"transparent" }} 
									onClick={(e) => this.next(e)}
								>
									15,000+
								</Button>
                                </Option>
                                </Select>
                             </Div>
                             } */}   


             </Div>


             <Div className="row row-center-step6" style={{marginTop:"20px"}} >
        {/**      {
            this.state.dropCheck2 === 'true'
                                    ? */}           
        <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields-step6">  
        <Select className="drop-down-step6" defaultValue="Coverage Wanted" disabled={false}  size="large"  onChange={
        (value)=>{
        if(value!=='Coverave Wanted'){
        this.setState({
                dropCheck3: 'true',
                coverage:value

        });
        }
        }
        }>
            
            <Option value="Superior">
                <button
                    className=""
                    style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
            	 onClick={this.coverage}
                >
                    Superior
                </button>

                </Option>
            
                <Option value="Standard">
                <button
                    className=""
                    style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
                     onClick={this.coverage}
                >
                    Standard
                </button>
            

                </Option>

                <Option value="Basic">
                <button
                    className=""
                    style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
                     onClick={this.coverage}
                >
                    Basic
                </button>
                </Option>
            
                <Option value="state_0minimum">
                <button
                    className=""
                    style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }} 
                     onClick={this.coverage}
                >
                    State minimum
                            </button>
                
                    </Option>

                </Select>
                
            </Div>
        {/**:
            <Div className="col-lg-6 col-md-6 col-sm-6">  
            <Select className="drop-down-step6" defaultValue="Coverage Wanted" disabled={true}  size="large"  onChange={handleChange}>
                
                <Option value="Superior">
                    <Button
                        className=""
                        style={{ marginTop:"3px",backgroundColor:"transparent" }} 
                		onClick={this.next}
                    >
                        Superior
                    </Button>
            
                    </Option>
                
                    <Option value="Standard">
                    <Button
                        className=""
                        style={{ marginTop:"3px",backgroundColor:"transparent" }} 
                		onClick={this.next}
                    >
                        Standard
                    </Button>
                

                    </Option>

                    <Option value="Basic">
                    <Button
                        className=""
                        style={{ marginTop:"3px",backgroundColor:"transparent" }} 
                    	onClick={this.next}
                    >
                        Basic
                    </Button>
                    </Option>
                
                    <Option value="State minimum">
                    <Button
                        className=""
                        style={{ marginTop:"3px",backgroundColor:"transparent" }} 
                		onClick={this.next}
                    >
                        State minimum
                                </Button>
                    
                        </Option>

                    </Select>
                    
                </Div>
                                } */}    
                            


                   {/**    { 
                                        this.state.dropCheck3 ==='true'
                                        ? */}    
                                <Div className="col-lg-6 col-md-6 col-sm-12 responsive-fields-step6">  
                                <Select className="drop-down-step6" defaultValue="Ownership" disabled={false}   size="large"  onChange={
                                    (value)=>{
                                        if(value!=='Ownership'){
                                            this.setState({
                                                dropCheck4 : 'true',
                                                ownership:value
                                            });
                                         
                                        }
                                        else{

                                        }
                                    }
                                    }>
                                  <Option value="Leased">
                                    <button
                                        className=""
                                        style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }}
                                    	onClick={this.ownership}
                                    >
                                        Leased
                                    </button>
                                 </Option>	
                                    
                                    <Option value="Financed">
                                    <button
                                        className=""
                                        style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }}
                                         onClick={this.ownership}
                                    >
                                        Financed
                                    </button>
                                </Option>
                                
                                <Option value="Owned">
                                    <button
                                        className=""
                                        style={{ marginTop:"3px",backgroundColor:"transparent",border:"none" }}
                                         onClick={this.ownership}
                                    >
                                        Owned
                                    </button>
                                 </Option>
                                    </Select>
                                    </Div>
                                {/**    :
                                    <Div className="col-lg-6 col-md-6 col-sm-6">  
                                    <Select className="drop-down-step6" defaultValue="Ownership" disabled={true}   size="large"  onChange={handleChange}>
                                      <Option value="Leased">
                                        <Button
                                            className=""
                                            style={{ marginTop:"3px",backgroundColor:"transparent" }}
                                        	onClick={this.next}
                                        >
                                            Leased
                                        </Button>
                                     </Option>	
                                        
                                        <Option value="Financed">
                                        <Button
                                            className=""
                                            style={{ marginTop:"3px",backgroundColor:"transparent" }}
                                     	onClick={this.next}
                                        >
                                            Financed
                                        </Button>
                                    </Option>
                                    
                                    <Option value="Owned">
                                        <Button
                                            className=""
                                            style={{ marginTop:"3px",backgroundColor:"transparent" }}
                                       	onClick={this.next}
                                        >
                                            Owned
                                        </Button>
                                     </Option>
                                        </Select>
                                        </Div>
                           }
*/} 


                     </Div>

                
             { 
             this.state.dropCheck=='true' &&   this.state.dropCheck2=='true'  &&   this.state.dropCheck3=='true'  &&   this.state.dropCheck4=='true'
             ?
                <Div className="row row-center-step6" style={{marginTop:"103px"}}>
                            <Button className="base-btn-step6" disabled={false}  	onClick={(e) => this.moveForward(e)} >  Next </Button>


                              </Div>
                              :
                              <Div className="row row-center-step6" style={{marginTop:"103px"}}>
                              <Button className="base-btn-step6" style={{ background: "#B0B7C3"}}  disabled={true} >  Next </Button>
  
  
                                </Div>
             }
                

                            
                             
                        </Card>
                </Div>
            
                  
    <Div  style= {{marginLeft:"75px"}} >
      <ImagesLine/>

      </Div>
      <Div className="col-sm-12" style={{marginTop:"50px"}} >
                                               <ImagesLineBlock/>
                                          </Div>
    </Div>

        );
    }
}

export default Step_6;