import React, { Component } from 'react';
import { Div,Text,Icon,Button} from "atomize";
import {ProgressBar,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step4.css';
import {Select} from 'antd';
import ImagesLine from '../ImagesLine'
class Step4 extends Component {
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

                                  <Div className="row row-center-step4" >
                                      <Text className="mainHeading-step4" tag="h1"> Vehicle Make</Text>
                                 </Div>
                                 
                 <Div className="row row-center-step4" >
                         <Div className="col-4 p-2">
                         
                            <Button value="Acura" className="car-btn" >Acura </Button>

                              </Div>

                            <Div className="col-4 p-2">
                         
                            <Button value="Alfa Romeo" className="car-btn" >Alfa Romeo </Button>

                              
                              </Div>
                      

                              <Div className="col-4 p-2">
                         
                              <Button value="Aston Martin" className="car-btn" >Aston Martin </Button>

                           
                           </Div>



                </Div>

                <Div className="row row-center-step4" >
                         <Div className="col-4 p-2">
                         
                         <Button value="Audi" className="car-btn" >Audi </Button>

                              
                              </Div>

                            <Div className="col-4 p-2">
                         
                            <Button value="BMW" className="car-btn" >BMW</Button>

                              </Div>
                      

                              <Div className="col-4 p-2">
                         
                              <Button value="Bentley" className="car-btn" >Bentley</Button>

                           
                           </Div>

                 
                           

                </Div>

                <Div className="row row-center-step4">
                         <Div className="col-4 p-2">
                         
                         <Button  value="Buick" className="car-btn" >Buick</Button>

                              
                              </Div>

                            <Div className="col-4 p-2">
                            <Button value="Cadillac" className="car-btn" >Cadillac </Button>

                              </Div>
                      

                              <Div className="col-4 p-2">
                         
                              <Button vaue="Chevrolet" className="car-btn" >Chevrolet</Button>

                           
                           </Div>

                     
                           

                </Div>

                <Div className="row row-center-step4">
                         <Div className="col-4 p-2">
                         
                         <Button value="Chrysler" className="car-btn" >Chrysler</Button>

                              
                              </Div>

                            <Div className="col-4 p-2">
                         
                            <Button value="Dodge" className="car-btn" >Dodge</Button>

                              
                              </Div>
                      

                              <Div className="col-4 p-2">
                         
                              <Button value="FIAT" className="car-btn" >FIAT</Button>

                           
                           </Div>

                           

                </Div>

                <Div className="row row-center-step4">
                         <Div className="col-4 p-2">
                         
                         <Button value="Ford" className="car-btn" >Ford</Button>

                              
                              </Div>

                            <Div className="col-4 p-2">
                         
                            <Button value="GMC" className="car-btn" >GMC</Button>

                              
                              </Div>
                      

                              <Div className="col-4 p-2">
                         
                              <Button value="Honda" className="car-btn" >Honda</Button>

                           </Div>

                          
                           

                </Div>

                <Div className="row row-center-step4">
                    

                            <Div className="col-4 p-2">
                         
                            <Button value="Hyundai" className="car-btn" >Hyundai</Button>

                              
                              </Div>
                      

                           

                </Div>

                <Div className="row row-center-step4">
                <Select className="drop-down-step4" defaultValue="other make"  onChange={handleChange}>
                              
                                <Option  value="chrysler">chrysler</Option>
                                <Option value="citroen">citroen</Option>
                                <Option value="daewoo">daewoo</Option>
                                <Option value="daihatsu">daihatsu</Option>
                                <Option value="de-tomaso">de-tomaso</Option>
                                <Option value="dodge">dodge</Option>
                                <Option value="donkervoort">donkervoort</Option>
                                <Option value="eagle">eagle</Option>
                                <Option value="ferrari">ferrari</Option>
                                <Option value="fiat">fiat</Option>
                                <Option value="ford">ford</Option>
                                <Option value="gaz">gaz</Option>
                                <Option value="ginetta">ginetta</Option>
                                <Option value="gmc">gmc</Option>
                                <Option value="holden">holden</Option>
                                <Option value="honda">honda</Option>
                                <Option value="hayundai">hayundai</Option>
                                <Option value="infiniti">infiniti</Option>
                                <Option value="isuzu">isuzu</Option>
                                <Option value="italdesign">italdesign</Option>
                                <Option value="jaguar">jaguar</Option>
                                <Option value="jeep">jeep</Option>
                                <Option value="jensen">jensen</Option>
                                <Option value="kia">kia</Option>
                                <Option value="lada">lada</Option>
                                <Option value="lamborghini">lamborghini</Option>
                                <Option value="lacia">lacia</Option>
                                <Option value="land-rover">land-rover</Option>
                                <Option value="lexus">lexus</Option>
                                <Option value="lincoln">licnoln</Option>
                                <Option value="lotec">lotec</Option>
                                <Option value="lotus">lotus</Option>
                                <Option value="mahindra">mahindra</Option>
                                <Option value="marcos">marcos</Option>
                                <Option value="mazda">mazda</Option>
                                <Option value="mcc">mcc</Option>
                                <Option value="mclaren">mclaren</Option>
                                <Option value="mercedes-benz">mercedes-benz</Option>
                                <Option value="mercury">mercury</Option>
                                <Option value="mg">mg</Option>
                                <Option value="mitsubishi">mitsubhisi</Option>
                                <Option value="morgan">morgan</Option>
                                <Option value="nissan">nissan</Option>
                                <Option value="nobel">nobel</Option>
                                <Option value="oldsmobile">oldsmobile</Option>
                                <Option value="opel">opel</Option>
                                <Option value="pagani">pagani</Option>
                                <Option value="panoz">panoz</Option>
                                <Option value="peugeot">peugeot</Option>
                                <Option value="plymouth">plymouth</Option>
                                <Option value="pontiac">pontiac</Option>
                                <Option value="porsche">porsche</Option>
                                <Option value="proton">proton</Option>
                                <Option value="renault">renault</Option>
                                <Option value="riley">riley</Option>
                                <Option value="rolls-royce">rolls-royce</Option>
                                <Option value="rover">rover</Option>
                                <Option value="saab">saab</Option>
                                <Option value="samsung">samsung</Option>
                                <Option value="saturn">saturn</Option>
                                <Option value="skoda">skoda</Option>
                                <Option value="ssangyong">ssangyong</Option>
                                <Option value="steyr">steyr</Option>
                                <Option value="subaru">subaru</Option>
                                <Option value="suzuki">suzuki</Option>
                                <Option value="tata">tata</Option>
                                <Option value="tatra">tatra</Option>
                                <Option value="toyota">toyota</Option>
                                <Option value="tvr">tvr</Option>
                                <Option value="vauxhall">vauxhall</Option>
                                <Option value="vector">vector</Option>
                                <Option value="volkswagen">volkswagen</Option>
                                <Option value="volvo">volvo</Option>
                                <Option value="westfield">westfield</Option>
                                <Option value="zaz">zaz</Option>
                                <Option value="Westfield">westfield</Option>
                                <Option value="Zaz">zaz</Option>
                                


</Select>
                </Div>
                <Div className="row row-center-step4" style={{marginTop:"10px"}}>
                            <Button className="base-btn-step4" >  Next </Button>


                              </Div>

                            
                      
                        </Card>
                    
                    </Div>
    <Div  style= {{marginLeft:"75px"}} >
      <ImagesLine/>

      </Div>
      </Div>
           
        );
    }
}

export default Step4;