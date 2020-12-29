import React, { Component } from 'react';
import './ImagesLine.css'
import { Div, Image,Text} from "atomize";
class ImagesLine extends Component {
    render() {
        return (
           <Div className="mainrow">
            <Div className="row center-row" >
                                  
            <Text className="images-line-text" >
                                      
            Options From Top Rated Carriers:
            </Text>

    </Div>
                  <Div className="row center-row" >

                      <Image className="image-1" src="assests/1.png" alt="Image 1"/>
                      <Image className="image-2" src="assests/2.png" alt="Image 2"/>
                      <Image className="image-3"  src="assests/3.png" alt="Image 3"/>
                      <Image className="image-4" src="assests/4.png" alt="Image 4"/>
                      <Image className="image-5"  src="assests/5.png" alt="Image 5"/>

                   </Div>
            </Div>
        );
    }
}

export default ImagesLine;