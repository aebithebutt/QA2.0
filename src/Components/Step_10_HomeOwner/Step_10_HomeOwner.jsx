import React, { Component } from 'react';
import ImagesLine from '../ImagesLine'
import { Div,Text,Icon} from "atomize";
import {ProgressBar,Card,Button} from 'react-bootstrap';
import {Select,Form} from 'antd';
import axios from 'axios'
import XMLParser from "react-xml-parser";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step_10_HomeOwner.css';
class Step_10_HomeOwner extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
           dropCheck: 'false',
           homeOverChecked: false,
           error: "",
           loading: false,
           response: "",

    };


}
onFinish = (values) => {
 console.log("on finish")
    this.setState(
        {
          ...this.state,
          loading: true,
        },
        this.PostDataOfBusinessInsurance(this.props.postData)
      );
  console.log(this.props.postData)
}
onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
PostDataOfBusinessInsurance = (postData) => {
  console.log("postData");

    console.log(postData);
    axios.post(
      'https://quotehound.leadspediatrack.com/post.do',
      null,
      {
        params: this.props.postData,
      }
    )
      .then((res) => {
        console.log(`res ${res}`);
        var xml = new XMLParser().parseFromString(res.data);
        if (xml.children[0].value === "Error") {
          this.setState({
            loading: false,
            response: xml.children[1].value,
          });
          console.log(xml.children[1].value);
        } else if (
          xml.children[0].value === "Matched" ||
          xml.children[0].value === "Unmatched"
        ) {
          this.props.nextStep();
          this.props.copyValuesToPostData2();
        }
      })
      .catch((err) => {
        console.log(`err ${err}`);

        if (err) throw err;
      });
  };
  UNSAFE_componentWillReceiveProps = () => {
    if (!this.state.response == "") {
      this.setState({
        ...this.state,
        response: "",
      });
    }
  };


moveForward=()=>{
    this.props.nextStep();
    console.log(this.props.postData)
    console.log("on move forward")
    this.setState(
        {
          ...this.state,
          loading: true,
        },
        this.PostDataOfBusinessInsurance(this.props.postData)
      );
  console.log(this.props.postData)

}
    render() {
        const { Option } = Select;
        return (
          
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)",height:"930px"}}>
                   
                    <Div className="row-center-step10">
                        <ProgressBar now={95} className="step10-progressBar"   />
                              </Div>

                              <Div className="row row-center-step10" >
                                <Text className="heading-one-step10" tag="h1"> What Is the Year of your car?</Text>
                        </Div>

                            <Div className="row row-center-step10 card-row-step10" >
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
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
					
					>
						
						
								<Div className="p-2 col-md-4 col-sm-12 responsive-fields-step10">
                                <Select className="drop-down-step10" defaultValue="Are You a Home Owner"  onChange={(checked1) => {
											this.props.homeOwnershipForPostData2(checked1);
											this.setState({ homeOverChecked: !this.state.homeOverChecked });
										}}>
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    
                                        </Select>

									{this.state.homeOverChecked && (

										<Form.Item >
                                         <Select className="drop-down-step10 " defaultValue="Are You Interested in Home Quote"  onChange={
                                             
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
                            <Button className="base-btn-step10" disabled={false}   onClick={() => this.moveForward()} >Get My Qoute</Button>


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