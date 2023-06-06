import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MaharashtraAssembly from './MaharashtraAssembly';
import APAssembly from './APAssembly';
import TelanganaAssembly from './TelanganaAssembly';
import maharashtra from './topojsons/states/maharashtra.json';
import andhrapradesh from './topojsons/states/andhrapradesh.json';
import telangana from './topojsons/states/telangana.json';
import BackIcon from '@material-ui/icons/FirstPage';
import './App1.css';


const MapDialog2 = props => {
    if (maharashtra.objects.maharashtra_district.geometries.map(s => s.properties.district).includes(props.DistrictName)){
    return (
        <Dialog fullScreen  open={props.show} onClose={props.closeModal} style={{ backgroundColor: 'black !important' }}>
                <BackIcon id='close'  onClick={props.closeModal} />
                <MaharashtraAssembly selectedDistrict={props.DistrictName} />
        </Dialog>
    );  
}
if (andhrapradesh.objects.andhra_pradesh.geometries.map(s => s.properties.district).includes(props.DistrictName)){
    return (
        <Dialog fullScreen open={props.show} onClose={props.closeModal}  style={{ backgroundColor: 'black !important' }}>
           <APAssembly selectedDistrict={props.DistrictName} />
        </Dialog>
    );
}
    if (telangana.objects.telangana.geometries.map(s => s.properties.district).includes(props.DistrictName) ){
        return (
            <Dialog fullScreen open={props.show} onClose={props.closeModal}  style={{ backgroundColor: 'black !important' }}>
               <TelanganaAssembly selectedDistrict={props.DistrictName} />
            </Dialog>
        );

}
};
export default MapDialog2;
