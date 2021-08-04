import React, {useState} from "react";
import "./Map.scss"
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import {GoogleMap, LoadScript, Marker,InfoWindow} from "@react-google-maps/api";

const locations = [
    {
        name: "IIITDM Jabalpur",
        location: {
            lat: 23.1768539,
            lng: 80.0245566
        }
    }
]
const mapStyles = {
    margin:"10vh 0",
    height: "75vh",
    width: "100%"
};

const defaultCenter = {
    lat: 23.1768539,
    lng: 80.0245566
}

const Map = () => {
    const [selected,setSelected]=useState({});
    const onSelect = item => {
        setSelected(item);
    }
    return (
        <div className="map container">
            <div className="row">
                <h2 className="map-h2">Come Visit Us At Our Campus</h2>
                <div className="col-lg-6">
                    <LoadScript
                        googleMapsApiKey='AIzaSyDuyD9nq6tzG9O5FHwGBSbp9vjQ0I11OlA'>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={18}
                            center={defaultCenter}
                        >
                            {
                                locations.map(item => {
                                    return (
                                        <Marker key={item.name}
                                                position={item.location}
                                                onClick={() => onSelect(item)}
                                        />
                                    )
                                })
                            }
                            {
                                selected.location &&
                                (
                                    <InfoWindow
                                        position={selected.location}
                                        clickable={true}
                                        onCloseClick={() => setSelected({})}
                                    >
                                        <p>{selected.name}</p>
                                    </InfoWindow>
                                )
                            }
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className="col-lg-6">
                    <p><a href={`tel:+917985163374`}><PhoneIcon/> Contact Us: 7985163374</a></p>
                    <p><a href={`mailto:ers@iiitdmj.ac.in`}><EmailIcon/> Email Id : ers@iiitdmj.ac.in</a></p>
                </div>
            </div>
        </div>
    );
}

export default Map;