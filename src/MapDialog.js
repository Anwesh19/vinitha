import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import ReactTooltip from 'react-tooltip';
import StateChart from './StateChart';
import MapDialog1 from './MapDialog1';
import './App1.css'
import maharastradata from'./topojsons/states/maharastradata.json';
// import CloseIcon from '@material-ui/icons/Close';
import BackIcon from '@material-ui/icons/FirstPage';

const MapDialog = (props) => {
  const [contentD, setContentD] = useState("");
  const [DTName, setDTName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const selectedState=props.StateName
  
  const stateData = selectedState === 'Maharashtra' ? maharastradata : {};
  return ( 
    <>
    <div className="statep">
    <Dialog fullScreen  open={props.show} onClose={props.closeModal} style={{ backgroundColor: 'black !important' }}>
      <MapDialog1 show={show} DistrictName={DTName}  closeModal={handleClose} />
      <StateChart setTooltipContent={setContentD} setDistrictName={setDTName} selectedState={props.StateName} setShowDistrict={setShow} />
      <ReactTooltip>{contentD}</ReactTooltip>
      <h5 className="stname"> {props.StateName}</h5>
          {/* <CloseIcon className=''  onClick={props.closeModal} /> */}
        <BackIcon id='close'  onClick={props.closeModal} />
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="front">
                Capital
            </div>
            <div className="back">
            {stateData.capital}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="content">
              <div className="front">
                  Population
              </div>
              <div className="back">
                  {stateData.population}
              </div>
          </div>
        </div>
        <div className="card">
                <div className="content">
                  <div className="front">
                    Assembly Constituencies
                  </div>
                  <div className="back">
                    {stateData.assembly_constituencies}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    Chief Minister
                  </div>
                  <div className="back">
                    {stateData.chief_minister}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="front">
                    Area
                  </div>
                  <div className="back">
                    {stateData.area}
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="content">
                  <div className="front" >
                    Parliamentary Constituencies
                  </div>
                  <div className="back">
                    {stateData.parliamentary_constituencies}
                  </div>
                </div>
              </div>
              


            </div>
    </Dialog>
    </div>
    
        </>

  )
};

export default MapDialog;