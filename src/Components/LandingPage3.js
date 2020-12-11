import React, { Component } from 'react';
import { Div,Text,Input,Image,Button} from "atomize";
import './MainBody.css';
import BottomTag from './BottomTag'
import ImagesLine from './ImagesLine'
class LandingPage3 extends Component {
    move=()=>{
        this.props.nextStep();
  }
    render() {
        return (
            <>
              <Div className="Container">
                  <Div className="row">
                         <Div className="col-lg-6 col-md-6 col-sm-6" >
                              
                                {/*-------------------- Separate Component for Main Body----------------------- */}
                                   <Div className="row row_bodytext1">
            <Text tag="h1" className="body-text1 pg1-text">
                     Get A Peace Of Mind and 
                            </Text>
           </Div>
          
           <Div className="row">
           <Text tag="h1"  className="body-text1 pg1-text">Save On Car Insurance</Text>
           </Div>

       <Div className="row row_bodytext2">
           <Text className="body-text2 pg1-text">
                    Get your free auto quote with Quotehound
           </Text>
       
       </Div>
      
       <Div className="row">
           <Text className="body-text2 pg1-text">
                    today and compare <strong>real</strong> quotes online!
           </Text>
       
       </Div>

       <Div className="row">
           
                  <Input className="body_input pg1-text" placeholder="Address" />
                  <Button className="input_button"  onClick={()=>this.move()}></Button>

       </Div>
                                {/*-------------------- Separate Component for Bottom Tag----------------------- */} 
                                     <BottomTag/>

                                     

                         </Div>

                         
                         <Div className="col-lg-6 col-md-6 col-sm-6 " >

                                <Div className="row" >
                                    <Image src="assests/man.png" alt="image" style={{width:"563px", height:"510px",marginTop:"35px"}} />
                                    </Div>

                                     {/*-------------------- Separate Component for Images----------------------- */}
                     
                                      <Div style={{marginTop:"-60px"}}>
                                            <ImagesLine/>
                                        </Div> 
                         </Div>
                  </Div>

              </Div>
            </>
        );
    }
}

export default LandingPage3;