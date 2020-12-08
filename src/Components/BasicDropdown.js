import { Dropdown, Anchor,Div } from "atomize";
import React, { Component } from 'react';
import {Select} from 'antd';
import './BasicDropdown.css'

class BasicDropdown extends React.Component {
 
  render() {
  const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
    return (
      <Select className="drop-down" defaultValue="Gender"  onChange={handleChange}>
      <Option value="male">Male</Option>
      <Option value="female">Female</Option>
     
      <Option value="custom">Custom</Option>
    </Select>
    );
  }
}
export default BasicDropdown;