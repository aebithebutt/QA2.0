import React, { Component } from 'react';

import { Div, Image,Text} from "atomize";
class ImagesLine extends Component {
    render() {
        return (
           <>
            <Div className="row" style={{ display: "flex",justifyContent: "center"}}>
                                  
            <Text className="" style={{fontFamily: "Montserrat",
                            fontStyle: "normal",  fontWeight: "normal",fontSize: 15, marginTop: 41, color: "#A3A3A3",textAlign: "center",
                                  marginRight: 85}}>
                                      
            Options From Top Rated Carriers:
            </Text>

    </Div>
                  <Div className="row " style={{ display: "flex",justifyContent: "center"}}>

                      <Image className="" style={{ width: 137,height:60,marginTop:15,marginLeft:13}} src="assests/1.png" alt="Image 1"/>
                      <Image className="" style={{ width: 128,height:60,marginTop:15,marginLeft:13}} src="assests/2.png" alt="Image 2"/>
                      <Image className="" style={{ width: 120,height:60,marginTop:15,marginLeft:13}} src="assests/3.png" alt="Image 3"/>
                      <Image className="" style={{ width: 145,height:60,marginTop:15,marginLeft:13}} src="assests/4.png" alt="Image 4"/>
                      <Image className="" style={{ width: 110,height:60,marginTop:15,marginLeft:13}} src="assests/5.png" alt="Image 5"/>

                   </Div>
            </>
        );
    }
}

export default ImagesLine;