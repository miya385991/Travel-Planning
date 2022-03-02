import React, { useContext } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { AppContext } from "./context/AppContext";

import SearchBarGeoCode from "./SearchBarGeoCode";
import CandidateTableList from "./CandidateTableList";
import RegistTableList from "./RegistTableList";
import Tables  from "./Tables";

import { doc, getDoc } from "firebase/firestore";




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
  const { lat, lng, hotel, searchSpot, selectPref,db } = useContext(AppContext);
   const data = searchSpot(selectPref);
  const center = { lat, lng };

  const onMapClick = async (e) => {
    const docRef = doc(db, "user", "23D3CzjckFgVg0glQ6Gi");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  // onMapClick();             


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
              {/* { data.map(spots => {
                return (
                  
                  <Marker
                  key={spots.id}
                  position={{ lat: Number(spots.lat), lng: Number(spots.lng) }}
                  label={spots.name}
                  cursor={spots.name}
                  />
                  );
                }) } */}

              
            {/* {hotel.map((hotels) => {
              return (
                <Marker
                  key={hotels.hotel[0].hotelBasicInfo.hotelNo}
                  position={{
                    lat: hotels.hotel[0].hotelBasicInfo.latitude,
                    lng: hotels.hotel[0].hotelBasicInfo.longitude,
                  }}
                />
              ); */}
            {/* })} */}
          </GoogleMap>
        </LoadScript>
        <SearchBarGeoCode />

        <div style={ s.contents }>
          <Tables />
          <CandidateTableList />
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
