import React, { Component } from 'react';
import { Div,Text,Icon} from "atomize";
import {ProgressBar,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step_8_Currentinsurance.css';
import { Button } from 'react-bootstrap';
import ImagesLine from '../ImagesLine'
import {Form, Slider,Select } from 'antd';
const { Option } = Select;
class Step_8_Currentinsurance extends Component {
    state = {
     
        slider:"",
    };


	onFinish = (values) => {
		this.props.nextStep();
        this.props.currentCompanyForPostData2(values.insuranceCarrier);
      //  console.log(values.insuranceCarrier)
       this.props.continuousCoverageForPostData2(this.state.slider);
     //   console.log(this.state.slider)
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
    };
  


    render() {
        function onChange(value) {
            console.log(`selected ${value}`);
          };
          
          function onBlur() {
            console.log('blur');
          };
          
          function onFocus() {
            console.log('focus');
          };
          
          function onSearch(val) {
            console.log('search:', val);
          };

        
           const { disabled } = this.state;
        return (
       
            <Div className="Container"  style={{background: "rgb(229 229 229 / 17%)",height:"930px"}}>
                   
                    <Div className="row-center-step8">
                        <ProgressBar now={75}  className="step8-progressBar"  />
                              </Div>

                              <Div className="row row-center-step8" >
                                <Text className="heading-one-step8" tag="h1">Current Insurance Information</Text>
                        </Div>

                            <Div className="row row-center-step8 card-row-step8" >
                                <Card className="cardhandle-step8">
                                     
                                       <Div className="row">
                                                <Icon  onClick={() => this.props.goToStep(7)} name="LeftArrowSolid" color="#488BFF" className="iconback-step8" />
                                        </Div>
                                        
                                       

                                        <Div className="row row-center-step8" >
                                        <Form
                                                name="basic"
                                               style={{width:"455px"}}
                                                initialValues={{
                                                    remember: true,
                                                }}
                                                onFinish={this.onFinish}
                                                onFinishFailed={this.onFinishFailed}
                                            >
                                            <Div className="row row-center-step8">
                                             
                                                <Form.Item
                                                    name="insuranceCarrier"
                                                    hasFeedback
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please select an option!",
                                                        },
                                                    ]}
                                                >
                                        <Select
                                                    showSearch
                                                  className="drop-down-step8"
                                                    
                                                    
                                                    onChange={onChange}
                                                    onFocus={onFocus}
                                                    onBlur={onBlur}
                                                  
                                                placeholder="Select an option"
                                                optionFilterProp="children"
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
							                            	}
                                                    
                                                ><Option value="Company Not Listed">Company Not Listed</Option>
                                                <Option value="State Farm Insurance">State Farm Insurance</Option>
                                                <Option value="21st Century">21st Century Insurance</Option>
                                                <Option value="AAA Insurance Co.">AAA Insurance Co.</Option>
                                                <Option value="AIG">AIG</Option>
                                                <Option value="AIU Insurance">AIU Insurance</Option>
                                                <Option value="Alfa">Alfa</Option>
                                                <Option value="Allied">Allied</Option>
                                                <Option value="Allstate Insurance">Allstate Insurance</Option>
                                                <Option value="Amco Ins Co">Amco Ins Co</Option>
                                                <Option value="American Alliance Ins Co">American Alliance Ins Co</Option>
                                                <Option value="American Automobile Insurance">American Automobile Insurance</Option>
                                                <Option value="American Casualty">American Casualty</Option>
                                                <Option value="American Direct Business Insurance">
                                                    American Direct Business Insurance
                                                </Option>
                                                <Option value="American Economy Ins Co">American Economy Ins Co</Option>
                                                <Option value="American Empire Insurance">American Empire Insurance</Option>
                                                <Option value="American Family Insurance">American Family Insurance</Option>
                                                <Option value="American Financial">American Financial</Option>
                                                <Option value="American Home Assurance">American Home Assurance</Option>
                                                <Option value="American Insurance">American Insurance</Option>
                                                <Option value="American International Ins">American International Ins</Option>
                                                <Option value="American International Pacific">American International Pacific</Option>
                                                <Option value="American International South">American International South</Option>
                                                <Option value="American Manufacturers">American Manufacturers</Option>
                                                <Option value="American Motorists Insurance">American Motorists Insurance</Option>
                                                <Option value="American National Insurance">American National Insurance</Option>
                                                <Option value="American Protection Insurance">American Protection Insurance</Option>
                                                <Option value="American Reliable Ins Co">American Reliable Ins Co</Option>
                                                <Option value="American Republic">American Republic</Option>
                                                <Option value="American Service Insurance">American Service Insurance</Option>
                                                <Option value="American Skyline Insurance Company">
                                                    American Skyline Insurance Company
                                                </Option>
                                                <Option value="American Spirit Insurance">American Spirit Insurance</Option>
                                                <Option value="American Standard Insurance - OH">
                                                    American Standard Insurance - OH
                                                </Option>
                                                <Option value="American Standard Insurance - WI">
                                                    American Standard Insurance - WI
                                                </Option>
                                                <Option value="Amex Assurance Co">Amex Assurance Co</Option>
                                                <Option value="Amica Insurance">Amica Insurance</Option>
                                                <Option value="Associated Indemnity">Associated Indemnity</Option>
                                                <Option value="Atlanta Casualty">Atlanta Casualty</Option>
                                                <Option value="Atlantic Indemnity">Atlantic Indemnity</Option>
                                                <Option value="Auto Club Insurance Company">Auto Club Insurance Company</Option>
                                                <Option value="Brooke Insurance">Brooke Insurance</Option>
                                                <Option value="Cal Farm Insurance">Cal Farm Insurance</Option>
                                                <Option value="California Automobile Ins Co">California Automobile Ins Co</Option>
                                                <Option value="California Casualty and Fire Ins Co">
                                                    California Casualty and Fire Ins Co
                                                </Option>
                                                <Option value="California State Auto Assoc">California State Auto Assoc</Option>
                                                <Option value="Century National Ins">Century National Ins</Option>
                                                <Option value="Chubb Group of Ins Co">Chubb Group of Ins Co</Option>
                                                <Option value="Clarendon National Insurance">Clarendon National Insurance</Option>
                                                <Option value="CNA">CNA</Option>
                                                <Option value="Colonial Penn">Colonial Penn</Option>
                                                <Option value="Commerce West">Commerce West</Option>
                                                <Option value="Commercial Union">Commercial Union</Option>
                                                <Option value="Continental Casualty">Continental Casualty</Option>
                                                <Option value="Continental Divide Insurance">Continental Divide Insurance</Option>
                                                <Option value="Continental Insurance">Continental Insurance</Option>
                                                <Option value="Cotton States Insurance">Cotton States Insurance</Option>
                                                <Option value="Country Financial">Country Financial</Option>
                                                <Option value="Countrywide Insurance">Countrywide Insurance</Option>
                                                <Option value="Dairyland Insurance">Dairyland Insurance</Option>
                                                <Option value="Eagle Ins Co">Eagle Ins Co</Option>
                                                <Option value="Electric Insurance">Electric Insurance</Option>
                                                <Option value="Empire Fire and Marine">Empire Fire and Marine</Option>
                                                <Option value="Erie Insurance Company">Erie Insurance Company</Option>
                                                <Option value="Esurance">Esurance</Option>
                                                <Option value="Explorer">Explorer</Option>
                                                <Option value="Farm Bureau/Farm Family/Rural">Farm Bureau/Farm Family/Rural</Option>
                                                <Option value="Farmers Insurance">Farmers Insurance</Option>
                                                <Option value="Farmers Union">Farmers Union</Option>
                                                <Option value="Federal Ins Co">Federal Ins Co</Option>
                                                <Option value="Financial Indemnity">Financial Indemnity</Option>
                                                <Option value="Fire and Casualty Insurance Co of CT">
                                                    Fire and Casualty Insurance Co of CT
                                                </Option>
                                                <Option value="Fireman's Fund">Fireman's Fund</Option>
                                                <Option value="Geico Casualty">Geico Casualty</Option>
                                                <Option value="General Accident Insurance">General Accident Insurance</Option>
                                                <Option value="GMAC Insurance">GMAC Insurance</Option>
                                                <Option value="Great American Ins Co">Great American Ins Co</Option>
                                                <Option value="Guaranty National Insurance">Guaranty National Insurance</Option>
                                                <Option value="Guide One Insurance">Guide One Insurance</Option>
                                                <Option value="Hanover Lloyd's Insurance Company">
                                                    Hanover Lloyd's Insurance Company
                                                </Option>
                                                <Option value="Hartford Accident and Indemnity">Hartford Accident and Indemnity</Option>
                                                <Option value="High Point Insurance">High Point Insurance</Option>
                                                <Option value="IFA Auto Insurance">IFA Auto Insurance</Option>
                                                <Option value="Infinity Insurance">Infinity Insurance</Option>
                                                <Option value="Integon">Integon</Option>
                                                <Option value="Insurance Co of the West">Insurance Co of the West</Option>
                                                <Option value="Kemper Insurance">Kemper Insurance</Option>
                                                <Option value="Leader National">Leader National</Option>
                                                <Option value="Liberty Insurance Corp">Liberty Insurance Corp</Option>
                                                <Option value="Liberty Mutual Insurance">Liberty Mutual Insurance</Option>
                                                <Option value="Liberty Northwest Insurance">Liberty Northwest Insurance</Option>
                                                <Option value="Lumbermens Mutual">Lumbermens Mutual</Option>
                                                <Option value="Maryland Casualty">Maryland Casualty</Option>
                                                <Option value="Mercury">Mercury</Option>
                                                <Option value="MetLife Auto and Home">MetLife Auto and Home</Option>
                                                <Option value="Mid Century Insurance">Mid Century Insurance</Option>
                                                <Option value="Mid-Continent Casualty">Mid-Continent Casualty</Option>
                                                <Option value="Middlesex Insurance">Middlesex Insurance</Option>
                                                <Option value="Mutual of Omaha">Mutual of Omaha</Option>
                                                <Option value="National Ben Franklin Insurance">National Ben Franklin Insurance</Option>
                                                <Option value="National Casualty">National Casualty</Option>
                                                <Option value="National Continental Insurance">National Continental Insurance</Option>
                                                <Option value="National Fire Insurance Company of Hartford">
                                                    National Fire Insurance Company of Hartford
                                                </Option>
                                                <Option value="National Union Fire Insurance of LA">
                                                    National Union Fire Insurance of LA
                                                </Option>
                                                <Option value="National Union Fire Insurance of PA">
                                                    National Union Fire Insurance of PA
                                                </Option>
                                                <Option value="Nationwide General Insurance">Nationwide General Insurance</Option>
                                                <Option value="Northwestern Pacific Indemnity">Northwestern Pacific Indemnity</Option>
                                                <Option value="NJ Skylands Insurance">NJ Skylands Insurance</Option>
                                                <Option value="Ohio Casualty">Ohio Casualty</Option>
                                                <Option value="Omni Insurance">Omni Insurance</Option>
                                                <Option value="Orion Auto Ins Co">Orion Auto Ins Co</Option>
                                                <Option value="Pacific Indemnity">Pacific Indemnity</Option>
                                                <Option value="Pacific Insurance">Pacific Insurance</Option>
                                                <Option value="Patriot General Insurance">Patriot General Insurance</Option>
                                                <Option value="Peak Property and Casualty Insurance">
                                                    Peak Property and Casualty Insurance
                                                </Option>
                                                <Option value="PEMCO Insurance">PEMCO Insurance</Option>
                                                <Option value="Progressive">Progressive</Option>
                                                <Option value="Prudential Insurance Co.">Prudential Insurance Co.</Option>
                                                <Option value="Republic Indemnity">Republic Indemnity</Option>
                                                <Option value="Response Insurance">Response Insurance</Option>
                                                <Option value="SAFECO">SAFECO</Option>
                                                <Option value="Safeway Insurance">Safeway Insurance</Option>
                                                <Option value="Selective InsGroup">Selective InsGroup</Option>
                                                <Option value="Sentinel Insurance">Sentinel Insurance</Option>
                                                <Option value="Sentry Insurance Group">Sentry Insurance Group</Option>
                                                <Option value="Shelter Insurance Co.">Shelter Insurance Co.</Option>
                                                <Option value="St. Paul">St. Paul</Option>
                                                <Option value="Standard Fire Insurance Company">Standard Fire Insurance Company</Option>
                                                <Option value="State and County Mutual Fire Insurance">
                                                    State and County Mutual Fire Insurance
                                                </Option>
                                                <Option value="State Auto Ins Co">State Auto Ins Co</Option>
                                                <Option value="State Farm County">State Farm County</Option>
                                                <Option value="State National Insurance">State National Insurance</Option>
                                                <Option value="Superior Guaranty Insurance">Superior Guaranty Insurance</Option>
                                                <Option value="Superior Insurance">Superior Insurance</Option>
                                                <Option value="TICO Insurance">TICO Insurance</Option>
                                                <Option value="TIG Insurance Group">TIG Insurance Group</Option>
                                                <Option value="Titan">Titan</Option>
                                                <Option value="Travelers Insurance Company">Travelers Insurance Company</Option>
                                                <Option value="Tri-State Consumer Insurance">Tri-State Consumer Insurance</Option>
                                                <Option value="Unigard Ins">Unigard Ins</Option>
                                                <Option value="United Services Automobile Association">
                                                    United Services Automobile Association
                                                </Option>
                                                <Option value="Unitrin Direct">Unitrin Direct</Option>
                                                <Option value="USAA">USAA</Option>
                                                <Option value="USF and G">USF and G</Option>
                                                <Option value="Wawanesa Mutual">Wawanesa Mutual</Option>
                                                <Option value="Workmens Auto Insurance">Workmens Auto Insurance</Option>
                                                <Option value="Zurich Ins Group">Zurich Ins Group</Option>
                                                <Option value="Not Currently Insured">Not Currently Insured</Option>
                                                </Select>
                                                </Form.Item>
                                                </Div>
                                               
                                               
                                                <Form.Item
                                               
                                                >
                                                    <Text tag="h2" style={{}} className="slider-text">Length Of Being Insured</Text>
                                                           <Slider style={{marginTop:"28px"}} defaultValue={10} onChange={(value)=>
                                                        {
                                                          //  console.log(value)

                                                            this.setState({
                                                                slider:value
                                                            })
                                                        }
                                                        } />
                                                           
                                                </Form.Item>
                                            

                                     <Div className="row row-center-step8"  >
                                      <Form.Item>
                                        <Button type="primary" htmlType="submit" className="base-btn-step8" >
                                               Next
                                                </Button>

                                                </Form.Item>
                                             </Div>   
                              </Form>
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

export default Step_8_Currentinsurance;