import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { ThemeProvider,StyleReset} from 'atomize';
import {Switch, Route} from 'react-router-dom'
import LandingPage1 from './Components/LandingPage1';
import LandingPage2 from './Components/LandingPage2';
import LandingPage3 from './Components/LandingPage3';
import NavBar from './Components/NavBar';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4/Step4'
import Step5 from './Components/Step5/Step5'
import Step6 from './Components/Step6/Step6'
import Step_three from './Components/Step_three'


 
import React, { Component } from 'react';
 
 class App extends Component {
 
  state = {
    postData: {
      // extra entries
      Key: "rRkWg9.WrP.Ahm.Ic9hNr9kZruQMcRpNruwIc9tVxVpWrV4MgexMl8QKHpEE",
      TYPE: "22",
      IP_Address: "",
      SRC: "Quantum_Website_Auto",
      Pub_ID: 13,
      Sub_ID: 12,
      Trusted_Form_URL: "",
      User_Agent: "",
      Landing_Page: "quantumassurance.com",
      TCPA_Consent: "Yes",
      TCPA_Language:
        "By hitting submit below, I provide my express written consent to the following. Telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates  or representatives at the phone number (including wireless number), email address, and postal address provided by me. Telemarketing calls, text messages, emails, and postal mail (including wireless number), email address, and postal address provided by me. Calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automated Telephone Dialing System or prerecorded or artificial voices. Electronic video monitoring and recordation of my activities on this Site; and I acknowledge that I may revoke my consent at any time by Calling 1 888-316-1350 or emailing “STOP” to  optout@quantumassurance.com.  I AGREE TO ALL OF THE ABOVE AND SEND MY QUOTE",
      Format: "JSON",
      LeadiD_Token: "",
      Vehicle_1_Average_One_Way_Mileage: 0,
      Vehicle_1_Parking: "unknown",
      Vehicle_1_Average_Days_Per_Week_Used: 0,
      Vehicle_1_Desired_Collision_Coverage: "No Coverage",
      Vehicle_1_Desired_Comprehensive_Coverage: "No Coverage",
      Driver_1_License_Status: "unknown",
      Driver_1_Age_When_First_Licensed: 0,
      Driver_1_Occupation: "Student",
      Driver_1_Current_Residence: "Other",
      Driver_1_Tickets_Accidents_Claims_Past_3_Years: "unknown",
      Driver_1_Insured_Past_30_Days: "unknown",
      Driver_1_Continuously_Insured_Years: 1,
      Driver_1_Additional_Drivers: "No",
      Driver_1_Additional_Vehicles: "No",
      Driver_1_Bankruptcy_In_Past_5_Years: "unknown",
      Driver_1_DUI_DWI_In_The_Past_5_Years: "unknown",
      Driver_1_Reposessions_In_The_Past_5_Years: "unknown",
      // S1
      Driver_1_Zip: "",
      Driver_1_City: "",
      Driver_1_State: "",
      Driver_1_Licensed_State: "",
      // S2
      Vehicle_1_Year: 0,
      // S3
      Vehicle_1_Make: "",
      // S4
      Vehicle_1_Model: "",
      // S5
      Vehicle_1_Primary_Use: "unknown",
      // S6
      Vehicle_1_Annual_Mileage: 0,
      // S7
      Vehicle_1_Coverage_Type: "",
      // S8
      Vehicle_1_Ownership: "",
      // S9

      // S10
      // Current Insurance Carrier
      // Continuous Coverage
      // S11
      // Active Licence?
      // Ticket/Claim in Last 3 years?
      Driver_1_Filing_Required: "None",
      // S12
      // Homeowner
      Driver_1_Marital_Status: "Single",
      Driver_1_Gender: "",
      // S13
      Driver_1_Education: "",
      Driver_1_Credit_Rating: "unknown",
      // S14
      Driver_1_Birthdate: "",
      // S15
      Driver_1_First_Name: "",
      Driver_1_Last_Name: "",
      // S16
      Driver_1_Address: "",
      Driver_1_Email: "",
      Driver_1_Daytime_Phone: "",
    }
  };
    yearForVehicleName = (value) => {
      this.setState({ year: value });
    };

   render() {


     return (
        <ThemeProvider>
       <NavBar/>
     
<Step_three 
yearForVehicleName={this.yearForVehicleName}
Vehicle_1_Year={(value) =>
this.setState({
postData: { ...this.state.postData, Vehicle_1_Year: value },
})
}
/>


{/**      <Step6/>    */}  

{/*   <LandingPage1/> */}
{/*   <LandingPage2/> */}
{/*   <LandingPage3/> */}


{/**     <Step2/>     */}      
{/**      <Step3/>    */}
{/**     <Step4/>     */}   
{/*      <Step5/>     */}


       <StyleReset></StyleReset>
  </ThemeProvider>
         
  
     );
   }
 }
 
 export default App;