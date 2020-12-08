import React, { Component } from 'react';
import { Div,Text,Icon,Button} from "atomize";
import {ProgressBar,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Step3.css';
import {Select} from 'antd';
import ImagesLine from './ImagesLine'


class Step3 extends Component {
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
                                 <Div className="col-3 p-2">
                                 
                                    <Button className="year-btn" >2020 </Button>

                                      </Div>

                                    <Div className="col-3 p-2">
                                 
                                    <Button className="year-btn" >2019 </Button>

                                      
                                      </Div>
                              

                                      <Div className="col-3 p-2">
                                 
                                      <Button className="year-btn" >2018 </Button>

                                   
                                   </Div>

                                   <Div className="col-3 p-2">
                                 
                                   <Button className="year-btn" >2017 </Button>

                                   
                                   </Div>


                        </Div>

                        <Div className="row row-center-step3" >
                                 <Div className="col-3 p-2">
                                 
                                 <Button className="year-btn" >2016 </Button>

                                      
                                      </Div>

                                    <Div className="col-3 p-2">
                                 
                                    <Button className="year-btn" >2015 </Button>

                                      </Div>
                              

                                      <Div className="col-3 p-2">
                                 
                                      <Button className="year-btn" >2014 </Button>

                                   
                                   </Div>

                                   <Div className="col-3 p-2">
                                   <Button className="year-btn" >2013 </Button>

                                   
                                   </Div>
                                   

                        </Div>

                        <Div className="row row-center-step3">
                                 <Div className="col-3 p-2">
                                 
                                 <Button className="year-btn" >2012 </Button>

                                      
                                      </Div>

                                    <Div className="col-3 p-2">
                                    <Button className="year-btn" >2011 </Button>

                                      </Div>
                              

                                      <Div className="col-3 p-2">
                                 
                                      <Button className="year-btn" >2010 </Button>

                                   
                                   </Div>

                                   <Div className="col-3 p-2">
                                 
                                   <Button className="year-btn" >2009</Button>

                                   
                                   </Div>
                                   

                        </Div>

                        <Div className="row row-center-step3">
                                 <Div className="col-3 p-2">
                                 
                                 <Button className="year-btn" >2008</Button>

                                      
                                      </Div>

                                    <Div className="col-3 p-2">
                                 
                                    <Button className="year-btn" >2007 </Button>

                                      
                                      </Div>
                              

                                      <Div className="col-3 p-2">
                                 
                                      <Button className="year-btn" >2006</Button>

                                   
                                   </Div>

                                   <Div className="col-3 p-2">
                                 
                                   <Button className="year-btn" >2005</Button>

                                   
                                   </Div>
                                   

                        </Div>

                        <Div className="row row-center-step3">
                                 <Div className="col-3 p-2">
                                 
                                 <Button className="year-btn" >2004 </Button>

                                      
                                      </Div>

                                    <Div className="col-3 p-2">
                                 
                                    <Button className="year-btn" >2003</Button>

                                      
                                      </Div>
                              

                                      <Div className="col-3 p-2">
                                 
                                      <Button className="year-btn" >2002</Button>

                                   </Div>

                                   <Div className="col-3 p-2">
                                 
                                   <Button className="year-btn" >2001 </Button>

                                   
                                   </Div>
                                   

                        </Div>

                        <Div className="row row-center-step3">
                                 <Div className="col-3 p-2">
                                 
                                 <Button className="year-btn" >2000</Button>

                                      
                                      </Div>

                                    <Div className="col-3 p-2">
                                 
                                    <Button className="year-btn" >1999 </Button>

                                      
                                      </Div>
                              

                                      <Div className="col-3 p-2">
                                 
                                      <Button className="year-btn" >1998</Button>

                                   
                                   </Div>

                                   <Div className="col-3 p-2">
                                 
                                   <Button className="year-btn" >1997 </Button>

                                   </Div>
                                   

                        </Div>

                        <Div className="row row-center-step3">
                        <Select className="drop-down-step3" defaultValue="Prior Years"  onChange={handleChange}>
                                        <Option value="1996">1996</Option>
                                        <Option value="1995">1995</Option>
                                        <Option value="1994">1994</Option>
                                        <Option value="1993">1993</Option>
                                        <Option value="1992">1992</Option>
                                        <Option value="1991">1991</Option>
                                        <Option value="1990">1990</Option>
                                        <Option value="1989">1989</Option>
                                        <Option value="1988">1988</Option>
                                        <Option value="1987">1987</Option>
                                        <Option value="1986">1986</Option>
                                        <Option value="1985">1985</Option>
                                        <Option value="1984">1984</Option>
                                        <Option value="1983">1983</Option>
                                        <Option value="1982">1982</Option>
                                        <Option value="1981">1981</Option>
                                        <Option value="1980">1980</Option>
                                        <Option value="1979">1979</Option>
                                        <Option value="1978">1978</Option>
                                        <Option value="1977">1977</Option>
                                        <Option value="1976">1976</Option>
                                        <Option value="1975">1975</Option>
                                        <Option value="1974">1974</Option>
                                        <Option value="1973">1973</Option>
                                        <Option value="1972">1972</Option>
                                        <Option value="1971">1971</Option>
                                        <Option value="1970">1970</Option>
                                        <Option value="1969">1969</Option>
                                        <Option value="1968">1968</Option>
                                        <Option value="1967">1967</Option>
                                        <Option value="1966">1966</Option>
                                        <Option value="1965">1965</Option>
                                        <Option value="1964">1964</Option>
                                        <Option value="1963">1963</Option>
                                        <Option value="1962">1962</Option>
                                        <Option value="1961">1961</Option>
                                        <Option value="1960">1960</Option>
                                        <Option value="1959">1959</Option>
                                        <Option value="1958">1958</Option>
                                        <Option value="1957">1957</Option>
                                        <Option value="1956">1956</Option>
                                        <Option value="1955">1955</Option>
                                        <Option value="1954">1954</Option>
                                        <Option value="1953">1953</Option>
                                        <Option value="1952">1952</Option>
                                        <Option value="1951">1951</Option>
                                        <Option value="1950">1950</Option>
                                        <Option value="1949">1949</Option>
                                        <Option value="1948">1948</Option>
                                        <Option value="1947">1947</Option>
                                        <Option value="1946">1946</Option>
                                        <Option value="1945">1945</Option>
                                        <Option value="1944">1944</Option>
                                        <Option value="1943">1943</Option>
                                        <Option value="1942">1942</Option>
                                        <Option value="1941">1941</Option>
                                        <Option value="1940">1940</Option>
                                        <Option value="1939">1939</Option>
                                        <Option value="1938">1938</Option>
                                        <Option value="1937">1937</Option>
                                        <Option value="1936">1936</Option>
                                        <Option value="19 37">1937</Option>
                                        <Option value="19 36">1936</Option>
                                    
   
     

    </Select>
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

export default Step3;