import React, { useState, useContext } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AppContext } from "./context/AppContext";


import SearchBarGeoCode from "./SearchBarGeoCode";
import HotelTableList from "./HotelTableList";
import Candidate from "./Candidate";

const containerStyle = {
  width: "80vw",
  height: "30vh",
};
const s = {
  contents: {
    display: "flex",
  }
}

const GoogleMaps = () => {
  const { lat, lng, MAP_KEY} = useContext(AppContext);
  const center = { lat, lng };



  return (
    <div>
      <SearchBarGeoCode />

      <LoadScript googleMapsApiKey={MAP_KEY}>
        <GoogleMap mapContainerStyle={ containerStyle } center={ center } zoom={ 14 }>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>


      <div style={s.contents}>
      <HotelTableList />
      <Candidate />
      </div>
    </div>
  );
};

export default GoogleMaps;
