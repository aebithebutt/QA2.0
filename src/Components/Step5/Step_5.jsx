import React, { Component } from 'react';
import ImagesLine from '../ImagesLine'
import { Div,Text,Icon} from "atomize";
//import {Button} from 'antd';
import { Button } from 'react-bootstrap';
import {ProgressBar,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step_5.css';
import axios from 'axios'

class Step_5 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			models: "",
		};
	}

	/*UNSAFE_componentWillReceiveProps = (newProps) => {
		var modelsArray = [];
		carQuery.map(
			(data) =>
				data.model_make_id === newProps.searchModel.make &&
				data.model_year === newProps.searchModel.year &&
				!modelsArray.includes(data.model_name) &&
				modelsArray.push(data.model_name)
		);
		this.setState({ models: modelsArray });
	};*/

	UNSAFE_componentWillReceiveProps = (newProps) => {
		axios.post('https://qhautoformreact.herokuapp.com/getmodel', { year: newProps.searchModel.year, make: newProps.searchModel.make })
			.then(res => this.setState({ models: res.data }))
			.catch(err => console.log(err))
	};


	createVehicleNameBoxes = () => {
		const arr = [];
		var column = "";
		if (this.state.models.length >= 4) {
			column = "col-md-3 col-4";
		} else if (this.state.models.length === 3) {
			column = "col-4";
		} else if (this.state.models.length === 2) {
			column = "col-6";
		} else if (this.state.models.length === 1) {
			column = "col-12";
		}

		for (var i = 0; i < this.state.models.length; i++) {
			arr.push(
				<div key={i} className={"text-center " + column}>
					<Button
						value={this.state.models[i]}
						className="car-model-btn"
				     	style={{marginTop:"15px"}}
						onClick={(e) => this.moveNext(e)}
					>
						{this.state.models[i]}
					</Button>
				</div>
			);
		}
		return arr;
	};

	moveNext = (e) => {
		this.props.nextStep();
		this.props.Vehicle_1_Model(e.target.value);
	};
    render() {
        return (
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)"}}>
                   
            <Div className="row-center-step5">
                <ProgressBar now={42} style={{width:"750px",background: "#E5E5E5",borderRadius: "10px",marginTop:"30px"}} />
                      </Div>

                      <Div className="row row-center-step5" >
                        <Text className="heading-one-step5" tag="h1"> What Is the Model of your car?</Text>
                </Div>

                    <Div className="row row-center-step5" >
                        <Card className="cardhandle-step5">
                             
                               <Div className="row">
                                        <Icon name="LeftArrowSolid" color="#488BFF" className="iconback-step5" />
                                </Div>

                                  <Div className="row row-center-step5" >
                                      <Text className="mainHeading-step5" tag="h1"> Vehicle Model</Text>
                                 </Div>
                           
                 <Div className="row row-center-step5" style={{marginTop:"15px"}} >
			<Div className="row">{this.state.models.length !== 0 && this.createVehicleNameBoxes()}</Div>
                             </Div>

{/*              
                <Div className="row row-center-step5" style={{marginTop:"20px"}}>
                            <Button className="base-btn-step5">  Next </Button>


                              </Div> */}

                            
                      
                        </Card>
                    
                    </Div>
    <Div  style= {{marginLeft:"75px"}} >
      <ImagesLine/>

      </Div>
      </Div>
        );
    }
}

export default Step_5;