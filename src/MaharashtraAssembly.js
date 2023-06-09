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
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
        color: 'white'

      },
      title: {
        display: true,
        text: 'Bar Chart',
        color: 'white',

      },
      datalabels: {
          display: true,
          color: 'white',
       }
    },
  scales: {
    x: {
      stacked: true,
      color:'white'
    },
    y: {
      stacked: true,
      color:'white'
    },
  },
};
  const data = {
    labels: districtData.assembly_constituencies.map(function(e) {return e.name;}),
    datasets: [
      {
        label: 'Male Voters',
        data: districtData.assembly_constituencies.map(function(e) {return e.male_voters;}),
        backgroundColor: '#4d6073',
        color: 'white'

      },
      {
        label: 'Female Voters',
        data: districtData.assembly_constituencies.map(function(e) {return e.female_voters;}),
        backgroundColor: '#03446A',
        color: 'white'

      }
    ],
  };
  const data_par= {
    labels: districtData.parliamentary_constituencies.map(function(e) {return e.name;}),
    datasets: [
      {
        label: 'Male Voters',
        data: districtData.parliamentary_constituencies.map(function(e) {return e.male_votes;}),
        backgroundColor: '#4d6073',
        color: 'white'
      },
      {
        label: 'Female Voters',
        data: districtData.parliamentary_constituencies.map(function(e) {return e.female_votes;}),
        backgroundColor: '#03446A',
        color: 'white'
      }
    ],
  };
  return (
    <>
    <div className="wrap">

    <div className="tab">
      <div className="prlmnt">
        <h3 >Parliamentary Constituencies of {districtData.name}</h3>
        <table>
          <thead>
          <tr>
            <th>parliament</th>
            <th>MP</th>
          </tr>
          </thead>
        </table>
          
          {districtData.parliamentary_constituencies.map(parliamentary => (
          <table >
            <tbody>
            <tr>
              <td>{parliamentary.name}</td>
              <td> {parliamentary.mp}</td>
            </tr>
            </tbody>
          </table>
          ))}

      </div>
      <div className="asmbly">
      <h3 >Assembly Constituencies of {districtData.name}</h3>
      <table>
        <tr>
            <th>Assembly</th>
            <th>MLA</th>
        </tr>
      </table>
        {districtData.assembly_constituencies.map(assembly => (
        <table >
          <tr>
            <td>{assembly.name}</td>
            <td>{assembly.mla}</td>
          </tr>
        </table>
        
      ))}
      </div>
  
  
      


    </div>
    <div className="graph" style={{width: "400px",height: "300px"}}>
        <Bar className="bar" options={options} plugins={[ChartDataLabels]} data={data_par}/>
        <Bar className="bar" options={options} plugins={[ChartDataLabels]} data={data}/>
    </div>
    </div>
        
  </>
);
};



export default MaharashtraAssembly;