import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { ThemeProvider,StyleReset} from 'atomize';
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import LandingPage1 from './Components/LandingPage1';
import LandingPage2 from './Components/LandingPage2';
import LandingPage3 from './Components/LandingPage3';
import NavBar from './Components/NavBar';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4/Step4'
import Step_4 from './Components/Step4/Step_4'
import Step5 from './Components/Step5/Step5'
import Step_5 from './Components/Step5/Step_5'
import Step_6 from './Components/Step6/Step_6'
import Step_7_Addanother from './Components/Step_7_Addanother/Step_7_Addanother'
import Step_8_Currentinsurance from './Components/Step_8_Currentinsurance/Step_8_Currentinsurance'
import Step_9_DriverHistory from './Components/Step_9_DriverHistory/Step_9_DriverHistory'
import Step_10_HomeOwner from './Components/Step_10_HomeOwner/Step_10_HomeOwner'
import Step_11_LastPage from './Components/Step_11_LastPage/Step_11_LastPage'
import Step_three from './Components/Step_three'
import StepWizard from "react-step-wizard";

 
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
    },
    postData2: {
      email: "",
      phone: "",
      address: "",
      zip: "",
      home_ownership: 0,
      vehicles: [
        // {
        // 	year: "",
        // 	model: "",
        // 	primary_purpose: "",
        // 	annual_mileage: "",
        // 	ownership: "",
        // },
      ],
      drivers: [
        {
          driver: "",
          gender: "",
          marital_status: "",
          birth_date: "",
          education: "",
          credit_rating: "",
          sr_22: "No",
        },
      ],
      current_company: "",
      continuous_coverage: "",
      //coverage_type: "",
    },
    year: 0,
    name: "Ford",
    zipCodeCity: "",
    username: "",
    table: [],
    home_ownership: 0,
    sr_22: "No",
    current_company: "",
    continuous_coverage: "",
  };

  maintainTable = () => {
    this.setState({
      table: [
        ...this.state.table,
        {
          name: this.state.name,
          model: this.state.postData.Vehicle_1_Model,
          year: this.state.year,
        },
      ],
    });
  };

  deleteTableItem = (value) => {
    this.setState({ table: value });
  };

  vehicleForPostData2 = (ownershipValue) => {
    const tempData = this.state.postData2;
    tempData.vehicles.push({
      year: this.state.postData.Vehicle_1_Year,
      model: this.state.postData.Vehicle_1_Model,
      primary_purpose: this.state.postData.Vehicle_1_Primary_Use,
      annual_mileage: this.state.postData.Vehicle_1_Annual_Mileage,
      ownership: ownershipValue,
    });

    this.setState({ postData2: tempData });
  };

  deleteVehicleForPostData2 = (value) => {
    this.setState({ postData2: value });
  };
  copyValuesToPostData2 = () => {
    var tempArray = {
      email: this.state.postData.Driver_1_Email,
      phone: this.state.postData.Driver_1_Daytime_Phone,
      address: this.state.postData.Driver_1_Address,
      zip: this.state.postData.Driver_1_Zip,
      home_ownership: this.state.home_ownership,
      vehicles: this.state.postData2.vehicles,
      drivers: [
        {
          driver:
            this.state.postData.Driver_1_First_Name +
            " " +
            this.state.postData.Driver_1_Last_Name,
          gender: this.state.postData.Driver_1_Gender,
          marital_status: this.state.postData.Driver_1_Marital_Status,
          birth_date: this.state.postData.Driver_1_Birthdate,
          education: this.state.postData.Driver_1_Education,
          credit_rating: this.state.postData.Driver_1_Credit_Rating,
          sr_22: this.state.sr_22,
        },
      ],
      current_company: this.state.current_company,
      continuous_coverage: this.state.continuous_coverage,
      coverage_type: this.state.postData.Vehicle_1_Coverage_Type,
    };
    this.setState({ postData2: tempArray });
    window.MediaAlphaExchange = {
      placement_id: "1WNbWprsUtu4bb-7VkTVgf2l57oZew",
      version: "17",
      type: "ad_unit",
      ua_class: "auto",
      data: tempArray,
    };
    window.MediaAlphaExchange__load("target");
    return this.state.postData2;
  };
    yearForVehicleName = (value) => {
      this.setState({ year: value });
    };
   
  nameForVehicalModel = (value) => {
    this.setState({ name: value });
  };
  currentCompanyForPostData2 = (value) => {
    this.setState({ current_company: value });
  };
  continuousCoverageForPostData2 = (value) => {
    this.setState({ continuous_coverage: value });
  };
  sr22ForPostData2 = (value) => {
    this.setState({ sr_22: value });
  };
  homeOwnershipForPostData2 = (value) => {
    this.setState({ home_ownership: value });
  };
   render() {


     return (
        <ThemeProvider>
    

          <NavBar/>
 
          {/* <BrowserRouter>
        <Switch>
           <Route path="/land1" component={LandingPage1} > </Route>
           <Route path="/land2" component={LandingPage2} > </Route>
           <Route path="/land3" component={LandingPage3} > </Route>
         </Switch>
        </BrowserRouter>
        */}

   <StepWizard initialStep={1}>
  <LandingPage1/>
  <LandingPage2/>
  <LandingPage3/>
  <Step2
   Driver_1_Gender={(value) =>
    this.setState({
      postData: { ...this.state.postData, Driver_1_Gender: value },
    })
  }
  Driver_1_Birthdate={(value) =>
    this.setState({
      postData: { ...this.state.postData, Driver_1_Birthdate: value },
    })
  }
  Driver_1_First_Name={(value) =>
    this.setState({
      postData: {
        ...this.state.postData,
        Driver_1_First_Name: value,
      },
    })
  }
  Driver_1_Last_Name={(value) =>
    this.setState({
      postData: { ...this.state.postData, Driver_1_Last_Name: value },
    })
  }
  />  
<Step_three 
yearForVehicleName={this.yearForVehicleName}
Vehicle_1_Year={(value) =>
this.setState({
postData: { ...this.state.postData, Vehicle_1_Year: value },
})
}
/>

<Step_4
              year={this.state.year}
              nameForVehicalModel={this.nameForVehicalModel}
              Vehicle_1_Make={(value) =>
                this.setState({
                  postData: { ...this.state.postData, Vehicle_1_Make: value },
                })
              }
          />

<Step_5
          searchModel={{ year: this.state.year, make: this.state.name }}
          Vehicle_1_Model={(value) =>
            this.setState({
              postData: { ...this.state.postData, Vehicle_1_Model: value },
            })
          }
          />
    
     <Step_6

name={this.state.name}
Vehicle_1_Primary_Use={(value) =>
  this.setState({
    postData: {
      ...this.state.postData,
      Vehicle_1_Primary_Use: value,
    
    },
  })
}

Vehicle_1_Annual_Mileage={(value) =>
  this.setState({
    postData: {
      ...this.state.postData,
      Vehicle_1_Annual_Mileage: value,
    },
  })
} 

Vehicle_1_Coverage_Type={(value) =>
  this.setState({
    postData: {
      ...this.state.postData,
      Vehicle_1_Coverage_Type: value,
    },
  })
}

name={this.state.name}
maintainTable={this.maintainTable}
vehicleForPostData2={this.vehicleForPostData2}
Vehicle_1_Ownership={(value) =>
  this.setState({
    postData: {
      ...this.state.postData,
      Vehicle_1_Ownership: value,
    },
  })
}

/>
  <Step_7_Addanother
 table={this.state.table}
 deleteTableItem={this.deleteTableItem}
 postData2={this.state.postData2}
 deleteVehicleForPostData2={this.deleteVehicleForPostData2}
          />
           <Step_8_Currentinsurance
         currentCompanyForPostData2={this.currentCompanyForPostData2}
         continuousCoverageForPostData2={this.continuousCoverageForPostData2}
         />
           <Step_9_DriverHistory
      sr22ForPostData2={this.sr22ForPostData2}
      Driver_1_Filing_Required={(value) =>
        this.setState({
          postData: {
            ...this.state.postData,
            Driver_1_Filing_Required: value,
          },
        })
      }
     />

  <Step_10_HomeOwner  
  homeOwnershipForPostData2={this.homeOwnershipForPostData2}
  />
   <Step_11_LastPage/>
</StepWizard>  


</ThemeProvider>
     );
}
 }

 export default App;

