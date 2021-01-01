import React, { Component } from 'react';
import { Div,Text,Image,Icon} from "atomize";
import {ProgressBar,Card,Button} from 'react-bootstrap';
import ImagesLine from '../ImagesLine'
import './Step_7_Addanother.css';
import ImagesLineBlock from '../ImagesLineBlock'
class Step_7_Addanother extends Component {
    state = {
		table: [],
		postData2: [],
	};

	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ table: newProps.table });
		this.setState({ postData2: newProps.postData2 });
	};

	updateTableData = (index) => {
		this.props.deleteTableItem([...this.state.table.slice(0, index), ...this.state.table.slice(index + 1)]);

		var tempArray = this.state.postData2;
		tempArray.vehicles = [...tempArray.vehicles.slice(0, index), ...tempArray.vehicles.slice(index + 1)];
		this.props.deleteVehicleForPostData2(tempArray);
	};
    
    moveForward=(e)=>{
        this.props.nextStep();
    }

    render() {
        return (
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)"}}>
             
            <Div className="row-center">
               <ProgressBar now={65} className="step7-progressBar"  />
            </Div>
           
          

                <Div className="row row-center" >
                            <Text className="heading-one-step7" tag="h1">Add Another Vehicle</Text>
                    </Div>

        
         <Div className="row row-center-step7 card-row-step7" >
            <Card className="cardhandle-step7">
            <Div className="row">
                                                <Icon  onClick={() => this.props.goToStep(6)} name="LeftArrowSolid" color="#488BFF" className="iconback-step7" />
                                        </Div>

           <Div style={{marginTop:"117px"}}>
         
           {this.state.table.length !== 0 &&
							this.state.table.map((entry, index) => (
              <Div className="row row-center" >
                   
         
                    <Card className="inner-card ">
                
                            <Div className="row  ">
                                    <Div className="col-2">
                                            <Image style={{marginTop:"16px",marginLeft:"16px"}} src="assests/car 1.png" alt="car image"/>
                                        </Div>
                                                                     
                                   
                                    
                                    <Div className="col-6">
                                 
                        
                                  <Div className="row">
                                              
                                                <span className="year-name" >
                                                    {entry.year} {entry.name} 
                                                </span>
                                               
                                                </Div>
                                                <Div className="row model">
                                                <span>
                                                   {entry.model}
                                                </span>
                                               
                                                </Div>
                                              
                         
                      
                                  
                                         </Div>

                                         <Div className="col-2">           
                                     <Div className="row">
                                           <Icon name="Plus"  className="icon-plus"
                                            style={{}}
                                            onClick={() => this.props.goToStep(3)}  />
                                   </Div>
                                   </Div>
                                             
                                     
                                    <Div className="col-2">
                                    <Div className="row">
                                            <Card className="icon-card">
                                           <Div className="row">
                                              <Icon
                                              name="Cross"
                                                   className="icon-cross"
                                                    onClick={() => this.updateTableData(index)}
                                                />
                                               </Div>
                                              
                                             
                                                </Card>
                                                </Div>   
                                                </Div>
                                

                            </Div>
                              
                           
    
                        
                    </Card>
               

                    </Div>

            ))}
                    
                    
</Div>
                    <Div className="row row-center" >
                                <Button className="base-btn-step7" 	onClick={(e) => this.moveForward(e)}>Next</Button>
                          
                          </Div>
                       

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

export default Step_7_Addanother;