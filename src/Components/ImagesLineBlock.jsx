import React, { Component } from 'react';
import './ImagesLineBlock.css'
import { Div, Image,Text} from "atomize";
class ImagesLineBlock extends Component {
    render() {
        return (
            
                 <Div className="mainrow-block">
            <Div className="row center-row-block" >
                                  
            <Text className="images-line-text" >
                                      
            Options From Top Rated Carriers:
            </Text>

    </Div>
                  <Div className="row center-row-block" >

                      <Image className="image-1-block" src="assests/1.png" alt="Image 1"/>
                     </Div>

                     <Div className="row center-row-block" >
                      
                      <Image className="image-2-block" src="assests/2.png" alt="Image 2"/>
                      </Div>
                      <Div className="row center-row-block" >
                      <Image className="image-3-block"  src="assests/3.png" alt="Image 3"/>
                      </Div>
                      <Div className="row center-row-block" >
                      <Image className="image-4-block" src="assests/4.png" alt="Image 4"/>
                      </Div>
                      <Div className="row center-row-block" >
                      <Image className="image-5-block"  src="assests/5.png" alt="Image 5"/>
                   </Div>
            </Div>
         
        );
    }
}

export default ImagesLineBlock;