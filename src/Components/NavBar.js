import React, { Component } from 'react';

import { Div,Text,Image,Button} from "atomize";
//import {Button} from '';
import {Navbar} from 'react-bootstrap';
import './NavBar.css';
class NavBar extends Component {
    render() {
        return (
            <Div className="Container" >
                                <Div className="row">
                  
                  <Div className="col-12">
                
                    <Navbar expand={'sm'|'lg'}  /* className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm"*/  >
                       
                      <Div className="col-6">
                           
                              <Image className="img_logo"  src="assests/logo.png" alt="Logo"/>
                               
                      </Div>

                            
                            <Div className="col-6 ">
                            
                                <Button  className="nav-btn">
                                      <Text className="nav-text">Call To Get Your Quote</Text>
                                 </Button>
                            
                            </Div>
                    </Navbar>
                    </Div>
                     
              </Div>
            </Div>
        );
    }
}

export default NavBar;