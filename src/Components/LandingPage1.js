import React, { Component } from 'react';
import { Div,Image} from "atomize";
import background from './rec.png'
import ImagesLine from './ImagesLine'
import BottomTag from './BottomTag'
import MainBody from './MainBody'

class LandingPage1 extends Component {
    render() {
        return (

    <>

           <Div  className="Container">
               
                 <Div className="row">

                         <Div className="col-lg-6 col-md-6 col-sm-6" >
                           
                    {/*-------------------- Separate Component for Main Body----------------------- */}
                            <MainBody/>
                    {/*-------------------- Separate Component for Images----------------------- */}
                            <ImagesLine/>
                    {/*-------------------- Separate Component for Bottom Tag----------------------- */} 
                            <BottomTag/>
                
                                   </Div>

                         <Div className="col-lg-6 col-md-6 col-sm-6 " >


                             <Div style={{width:425, height:576,backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat",
                                 backgroundSize:"cover", marginTop:55,marginLeft:150}}>

                                        <Image className="" style={{ width: 415, height:617,marginTop:25,marginLeft:80}} 
                                                        src="assests/RecUpper.png" alt="Image 5"/>

                                 </Div> 
                            
                             </Div>
             
                         </Div>
                
                </Div>


    </>
        );
    }
}

export default LandingPage1;