import React, { Component } from 'react';
import { Div,Text,Icon,Button} from "atomize";
import {ProgressBar,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step3.css';
import {Select} from 'antd';
import ImagesLine from './ImagesLine'
import carYears from './carYears'
const { Option } = Select;
class Step_three extends Component {

    state = {
		years: "",
		stateName: "",
	};
	UNSAFE_componentWillMount = () => {
		/*		axios.get('/getyears')
					.then(res => {
						this.setState({
							years: {
								minYear: Math.min.apply(null, res.data),
								maxYear: Math.max.apply(null, res.data),
							},
						});
					})
					.catch(err => console.log(err))*/
		this.setState({
			years: {
				minYear: Math.min.apply(null, carYears.list),
				maxYear: Math.max.apply(null, carYears.list),
			},
		});
	};

	UNSAFE_componentWillReceiveProps = (newProps) => {
		this.setState({ stateName: newProps.zipCodeState });
	};

	createVehicleYearBoxes = () => {
		const arr = [];

		for (var i = this.state.years.maxYear; i > this.state.years.maxYear - 24; i--) {
			arr.push(
				<div className="col-3 p-2" key={i}>
					<Button
						value={i}
						className="year-btn"
					
						onClick={(e) => this.moveNext(e)}
					>
						{i}
					</Button>
				</div>
			);
		}
		return arr;
	};

	createVehicleYearSelect = () => {
		const arr = [];

		for (var i = this.state.years.maxYear - 24; i >= this.state.years.minYear; i--) {
			arr.push(
				<Option className="p-0" key={i} value={i}>
					<input
						type="button"
						
					
						value={i}
						onClick={this.moveNext}
					/>
				</Option>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Year(Number(e.target.value));
		this.props.yearForVehicleName(Number(e.target.value));
	};

    render() {
        
        const { Option } = Select;

        function handleChange(value) {
          console.log(`selected ${value}`);
        }
     
        return (


            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)",height:"930px"}}>
                   
                    <Div className="row-center-step3">
                        <ProgressBar now={20} style={{width:"750px",background: "#E5E5E5",borderRadius: "10px",marginTop:"30px"}} />
                              </Div>

                              <Div className="row row-center-step3" >
                                <Text className="heading-one-step3" tag="h1"> What Is the Year of your car?</Text>
                        </Div>

                            <Div className="row row-center-step3" >
                                <Card className="cardhandle-step3">
                                     
                                       <Div className="row">
                                                <Icon name="LeftArrowSolid" color="#488BFF" className="iconback" />
                                        </Div>

                                          <Div className="row row-center-step3" >
                                              <Text className="mainHeading-step3" tag="h1"> Vehicle Year</Text>
                                         </Div>
                                         
                         <Div className="row row-center-step3" >
                         <Div className="row">{this.state.years.length !== 0 && this.createVehicleYearBoxes()}</Div>
							<br />
							{this.state.years.length !== 0 && (
								<Select
								className="drop-down-step3"	
									size="large"
									placeholder="Prior Years"
									optionFilterProp="children"
									filterOption={(input, option) =>
										option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									{this.createVehicleYearSelect()}
								</Select>
							)}





                                
                        </Div>
                        <Div className="row row-center-step3" style={{marginTop:"10px"}}>
                                    <Button className="base-btn-step3" >  Next </Button>


                                      </Div>

                                    
                              
                                </Card>
                            
                            </Div>
        <Div style= {{marginLeft:"75px"}} >
              <ImagesLine/>

              </Div>
              </Div>
        );
    }
}

export default Step_three;