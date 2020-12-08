import React, { Component } from 'react';

import { Div,Text,Image,Button } from "atomize";
import {Navbar} from 'react-bootstrap';
import './NavBar.css';
class NavBar extends Component {
    render() {
        return (
            <Div className="Container" >
                                <Div className="row">
                  
                  <Div className="col-lg-12 col-md-12 col-sm-12 ">
                
                    <Navbar expand={'sm'|'lg'}  /* className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm"*/  >
                       
                      <Div className="col-lg-6 col-md-6 col-sm-6 ">
                           
                              <Image className="img_logo" style={{ width: 262, height: 52}} src="assests/logo.png" alt="Logo"/>
                               
                      </Div>

                            
                            <Div className="col-lg-6 col-md-6 col-sm-6 ">
                            
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