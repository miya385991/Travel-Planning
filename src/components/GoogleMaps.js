import React, { useContext } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { AppContext } from "./context/AppContext";

import SearchBarGeoCode from "./SearchBarGeoCode";
import HotelTableList from "./HotelTableList";
import CandidateTableList from "./CandidateTableList";
import RegistTableList from "./RegistTableList";
import TouristArea from "./TouristArea";



const containerStyle = {
  width: "80vw",
  height: "30vh",
};
const s = {
  contents: {
    display: "flex",
    justifyContent: "space-between",
    width: "80vw",
    height: "50vh",
  },
  root: {
    display: "flex",
    margin: "0 auto",
  }

};

const GoogleMaps = () => {
  const { lat, lng, hotel, searchSpot, selectPref } = useContext(AppContext);
   const data = searchSpot(selectPref);
  const center = { lat, lng };




  return (
    <div style={s.root}>
      <RegistTableList />
      <div>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_KEY}>

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >


{/* マーカー処理 */}
              { data.map(spots => {
                return (
                  
                  <Marker
                  key={spots.id}
                  position={{ lat: Number(spots.lat), lng: Number(spots.lng) }}
                  label={spots.name}
                  cursor={spots.name}
                  />
                  );
                }) }

              
            {/* {hotel.map((hotels) => {
              return (
                <Marker
                  key={hotels.hotel[0].hotelBasicInfo.hotelNo}
                  position={{
                    lat: hotels.hotel[0].hotelBasicInfo.latitude,
                    lng: hotels.hotel[0].hotelBasicInfo.longitude,
                  }}
                />
              );
            })} */}
          </GoogleMap>
        </LoadScript>
        <SearchBarGeoCode />

        <div style={s.contents}>
          {/* <HotelTableList /> */}
          <TouristArea />
          <CandidateTableList />
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
