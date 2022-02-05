import { createContext, useState,useEffect } from 'react';
import axios from 'axios';

 export const AppContext = createContext();

 
 
 
const AppContextProvider = ({ children }) => {


  const [errMsg, setErrMsg] = useState('');

  // googleMapsApiKey
  const MAP_KEY = "AIzaSyCb_Tevfk6FLokLvWIkHUmCRWOSc4or3B8";

  // geocode endpoint
  const GEOCODE_ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json`;
  const [lat, setLat] = useState(35.6803997);
  const [lng, setLng] = useState(139.7690174);

  // HOTEL
  const [hotel, setHotel] = useState([]);

  // 楽天トラベルホテルAPI
  const HOTEL_KEY = "1027735861150545317";
  const HOTEL_ENDPOINT = `https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426`;

  // 楽天レストランAPI
  
  // 緯度経度を取得
  const onSubmitMap = async (data) => {
    try {
      
      const res = await axios.get(`${GEOCODE_ENDPOINT}`, {
        params: {
          address: data.example,
          key: MAP_KEY,
        },
      });
      const { lat, lng } = await res.data.results[0].geometry.location;

      // 経度緯度取得後処理
      setLat(lat);
      setLng(lng);
      onSubmitHotel(lat, lng);
      

    } catch (error) {
      setErrMsg(error.message);
    }
  };

  // 緯度経度を取得から楽天トラベルホテルAPIを叩く
  const onSubmitHotel = async (lat, lng) => {
    try {
      const res = await axios.get(HOTEL_ENDPOINT, {
        params: {
          applicationId: HOTEL_KEY,
          format: "json",
          latitude: lat,
          longitude: lng,
          searchRadius: 1,
          datumType: 1,
        }
      });
      const { hotels } = await res.data;
      setHotel(hotels);
    } catch (error) {
      setErrMsg(error.message);
    }
  }





  return (
    <AppContext.Provider value={{ MAP_KEY, onSubmitMap , hotel, lat, lng ,errMsg}}>
      {children}
    </AppContext.Provider>
  );
};
 
 export default AppContextProvider;
 