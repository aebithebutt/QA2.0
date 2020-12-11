import React, { Component } from 'react';
import { Div,Text,Icon} from "atomize";
import {ProgressBar,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Step_4.css';
import axios from 'axios'
import {Select} from 'antd';
import ImagesLine from '../ImagesLine'

const { Option } = Select;

class Step_4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			names: "",
		};
	}

	UNSAFE_componentWillReceiveProps = (newProps) => {
		/*var namesArray = [];
		carQuery.map(
			(data) =>
				data.model_year === newProps.year &&
				!namesArray.includes(data.model_make_id) &&
				namesArray.push(data.model_make_id)
		);
		this.setState({ names: namesArray });*/
		if (newProps.year > 0) {
			axios.post('https://qhautoformreact.herokuapp.com/getmake', { year: newProps.year })
				.then(res => {
					this.setState({ names: res.data });
				})
				.catch(err => console.log(err))
		}
	};

	createVehicleNameBoxes = () => {
		const arr = [];
		for (var i = 0; i < 16; i++) {
			arr.push(
				<div key={i} className="col-4 p-2">
					<Button
						value={this.state.names[i]}
						className="car-btn"
					//	style={{ width: "100%", height: "80px", textTransform: "capitalize" }}
						onClick={(e) => this.moveNext(e)}
					>
						{this.state.names[i]}
					</Button>
				</div>
			);
		}
		return arr;
	};

	createVehicleNameSelect = () => {
		const arr = [];

		for (var i = 16; i < this.state.names.length; i++) {
			arr.push(
				<Option className="p-0" key={i} value={i}>
					<input
						type="button"
						className=""
						style={{ marginTop:"3px",backgroundColor:"transparent" }} 
						value={this.state.names[i]}
						onClick={this.moveNext}
					/>
				</Option>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Make(e.target.value);
		this.props.nameForVehicalModel(e.target.value);
	};

    render() {
        const { Option } = Select;

        function handleChange(value) {
          console.log(`selected ${value}`);
        }
        return (
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)",height:"930px"}}>
                   
            <Div className="row-center-step4">
                <ProgressBar now={20} style={{width:"750px",background: "#E5E5E5",borderRadius: "10px",marginTop:"30px"}} />
                      </Div>

                      <Div className="row row-center-step4" >
                        <Text className="heading-one-step4" tag="h1"> What Is the Make of your car?</Text>
                </Div>

                    <Div className="row row-center-step4" >
                        <Card className="cardhandle-step4">
                             
                               <Div className="row">
                                        <Icon name="LeftArrowSolid" color="#488BFF" className="iconback-step4" />
                                </Div>

                                  <Div className="row row-center-step4" style={{marginBottom:"20px"}} >
                                      <Text className="mainHeading-step4" tag="h1"> Vehicle Make</Text>
                                 </Div>
                                 
                 <Div className="row row-center-step4">
				 <Div className="row">{this.state.names.length !== 0 && this.createVehicleNameBoxes()}</Div>
						<br />
						{this.state.names.length !== 0 && (
							<Select
							className="drop-down-step4"
								// style={{ width: "400px" }}
								size="large"
								placeholder="Other Makes"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toUpperCase()) >= 0
								}
							>
								{this.createVehicleNameSelect()}
							</Select>
						)}

               </Div>
         
		   {/**      <Div className="row row-center-step4" style={{marginTop:"10px"}}>
                            <Button className="base-btn-step4" 	 >  Next </Button>


                              </Div>
*/}
           
                            
                      
                        </Card>
                    
                    </Div>
    <Div  style= {{marginLeft:"75px"}} >
      <ImagesLine/>

      </Div>
      </Div>
           
        );
    }
}

export default Step_4;