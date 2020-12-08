import React, { Component } from 'react';
import { Div,Image } from "atomize";
import MainBody from './MainBody'
import BottomTag from './BottomTag'
import ImagesLine from './ImagesLine'
class LandingPage2 extends Component {
    render() {
        return (
            <>
              <Div className="Container">
                  <Div className="row">
                         <Div className="col-lg-6 col-md-6 col-sm-6" >
                              
                                {/*-------------------- Separate Component for Main Body----------------------- */}
                                    <MainBody/>
                                {/*-------------------- Separate Component for Bottom Tag----------------------- */} 

                                  <Div style={{marginTop:" 75px"}}>   
                                     <BottomTag/>              
                                    </Div>
                         </Div>

                         <Div className="col-lg-6 col-md-6 col-sm-6 " >

                                <Div className="row" style={{marginTop:"37px"}}>
                                    <Image src="assests/car.png" alt="Car" />
                                    </Div>

                                     {/*-------------------- Separate Component for Images----------------------- */}
                     
                                        <Div style={{    marginTop: "-230px", marginLeft: "-55px"}}>
                                            <ImagesLine/>
                                        </Div>
                         </Div>
                  </Div>
              </Div>
            </>
        );
    }
}

export default LandingPage2;