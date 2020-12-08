import React, { Component } from 'react';
import { Div,Text,Icon,Image,Tag } from "atomize";
class BottomTag extends Component {
    render() {
        return (
            <Div className="row ">
            <Tag className="" style={{marginBottom: 22,
                          backgroundColor: "#FFFFFF",height: 89,width: 354, marginLeft: 28,borderRadius: 15, marginTop: 138, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)" }}>

                <Image style={{float:"left",marginTop:30,marginLeft:6}} src="assests/footlogo.png"/>
                <Icon name="Cross" color="black" style={{width:15,height:15,float:"right",marginTop:9,
                           marginRight:22}} />
          <Div className="row">
                  <Text style={{marginTop:30,float:"left",marginLeft:11,fontSize:18,fontFamily:"Montserrat",
                                  fontWeight:"normal",fontStyle:"normal"}} tag="h1">
                     <span style={{color:"#488BFF"}}> Julia </span> Saved $210 Today!
                  </Text>
                  </Div>
            
                  <Text style={{float:"left",marginLeft:11,fontSize:12,fontFamily:"Montserrat",
                                  fontWeight:"normal",fontStyle:"normal",color:"#488BFF"}} >
                     5 mins ago
                  </Text>
            </Tag>
       </Div>
        );
    }
}

export default BottomTag;