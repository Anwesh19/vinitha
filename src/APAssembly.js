import React from "react";
import Anantapurdata from'./topojsons/AndhraPradesh/Anantapurdata.json';

const APAssembly = ({ selectedDistrict}) => {
  
  let districtData;
  if (selectedDistrict === 'East Godavari') {
    districtData = Anantapurdata;
  } 
  if (selectedDistrict === 'West Godavari') {
    districtData = Anantapurdata;
  }
  const column1 = districtData.assembly_constituencies.slice(0, 5);
  const column2 = districtData.assembly_constituencies.slice(5,);
  return (
      <div style={{ display: 'flex',backgroundColor:"white" }}>
      <div style={{ flex: 1}}>
      <h1 style={{textAlign:'center'}}>Parliamentary Constituencies of {districtData.name}</h1>
      {districtData.parliamentary_constituencies.map(parliamentary => (
            <><h3 key={parliamentary.name}>{parliamentary.name}</h3>
              <h4> Mp:{parliamentary.mp}<br></br> Population:{parliamentary.population}<br></br> Male Voters:{parliamentary.male_voters}<br></br> Female Voters:{parliamentary.female_voters}</h4></>
            ))}
        <h1 style={{textAlign:'center'}}>Assembly Constituencies of {districtData.name}</h1>
        {column1.map(assembly => (
          <div key={assembly.name}>
            <h3>{assembly.name}</h3>
            <h4>MLA:{assembly.mla}<br />Population:{assembly.population}<br />Male Voters:{assembly.male_voters}<br />Female Voters:{assembly.female_voters}</h4>
          </div>
        ))}
      </div>
      <div style={{ flex: 1,marginTop:'110px' }}>
        {column2.map(assembly => (
          <div key={assembly.name}>
            <h3>{assembly.name}</h3>
            <h4>MLA:{assembly.mla}<br />Population:{assembly.population}<br />Male Voters:{assembly.male_voters}<br />Female Voters:{assembly.female_voters}</h4>
          </div>
        ))}
      </div>
    </div>
  );
  };

export default APAssembly;