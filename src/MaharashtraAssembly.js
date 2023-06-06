import React from "react";
import punedata from'./topojsons/Maharashtra/punedata.json';
import nashikdata from './topojsons/Maharashtra/nashikdata.json';
import './App1.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';;
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const MaharashtraAssembly = ({ selectedDistrict}) => {
  
  let districtData=punedata;
  if (selectedDistrict === 'Pune') {
    districtData = punedata;
  } 
  if (selectedDistrict === 'Nashik') {
    districtData = nashikdata;
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Chart',
      },
      datalabels: {
          display: true,
          color: 'black'
       }
    },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
  const data = {
    labels: districtData.assembly_constituencies.map(function(e) {return e.name;}),
    datasets: [
      {
        label: 'Male Voters',
        data: districtData.assembly_constituencies.map(function(e) {return e.male_voters;}),
        backgroundColor: 'white',
      },
      {
        label: 'Female Voters',
        data: districtData.assembly_constituencies.map(function(e) {return e.female_voters;}),
        backgroundColor: 'blue',
      }
    ],
  };
  const data_par= {
    labels: districtData.parliamentary_constituencies.map(function(e) {return e.name;}),
    datasets: [
      {
        label: 'Male Voters',
        data: districtData.parliamentary_constituencies.map(function(e) {return e.male_votes;}),
        backgroundColor: 'white',
      },
      {
        label: 'Female Voters',
        data: districtData.parliamentary_constituencies.map(function(e) {return e.female_votes;}),
        backgroundColor: 'blue',
      }
    ],
  };
  return (
    <>
    <div className="state">
    <div style={{}}>
    <h1 style={{textAlign:'center'}}>Parliamentary Constituencies of {districtData.name}</h1>
    {districtData.parliamentary_constituencies.map(parliamentary => (
          <>
          <div className="card">
          <h3 key={parliamentary.name}>{parliamentary.name}</h3>
          <h4> Mp:{parliamentary.mp}</h4>
          </div>
          </>
          ))}
      <h1 style={{textAlign:'center'}}>Assembly Constituencies of {districtData.name}</h1>
      {districtData.assembly_constituencies.map(assembly => (
        <div key={assembly.name}>
          <h3>{assembly.name}</h3>
          <h4>MLA:{assembly.mla}</h4>
        </div>
      ))}
    </div>
  
  
  <div
      style={{
        width: "400px",
        height: "300px"
      }}
    >

        <Bar options={options} plugins={[ChartDataLabels]} data={data}/>
        <Bar options={options} plugins={[ChartDataLabels]} data={data_par}/>
        </div>
        </div>
        
  </>
);
};



export default MaharashtraAssembly;