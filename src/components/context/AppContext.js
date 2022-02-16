import { createContext, useState} from 'react';
import axios from 'axios';
import {
  Damu,
  Gairozyu,
  Kaisuiyoku,
  Koen,
  Koyou,
  Onsen,
  Sakura,
  Shinrinyoku,
  Shiro,
  Taki,
  Yakei,
  Zekkei,
  Toge,
} from "../../api";

import { initializeApp } from "firebase/app";
  import {getAuth,onAuthStateChanged} from 'firebase/auth'
  import {  getFirestore,collection,getDocs } from "firebase/firestore";


 export const AppContext = createContext();
 
 
const AppContextProvider = ({ children }) => {
  // エラーメッセージ
  const [errMsg, setErrMsg] = useState("");
  //   緯度経度
  const [lat, setLat] = useState(35.6803997);
  const [lng, setLng] = useState(139.7690174);
  // HOTEL
  const [hotel, setHotel] = useState([]);
  // 候補データ挿入
  const [candidate, setCandidate] = useState([]);
  // 登録データ挿入
  const [regist, setRegist] = useState([]);

  // ジャンル検索
  const [spot, setSpot] = useState("");
  const [selectPref, setSelectPref] = useState("");



  const firebaseConfig = {
    apiKey: "AIzaSyAV0ZlS7GGm7APs0Sm5aNt1rx7cf3vt9MM",
    authDomain: "jub-hunting-work.firebaseapp.com",
    projectId: "jub-hunting-work",
    storageBucket: "jub-hunting-work.appspot.com",
    messagingSenderId: "332638597332",
    appId: "1:332638597332:web:057067b0b3b71b46eccb41",
    measurementId: "G-4YKWCQ8LJK",
  };
  const app = initializeApp(firebaseConfig);
  const auth =getAuth(app)
  onAuthStateChanged(auth, user => {
  console.log(user);
})
  const db = getFirestore(app);


  const sightseeing = () => {
    const list = [];
    Damu.map((item) => list.push(item));
    Gairozyu.map((item) => list.push(item));
    Kaisuiyoku.map((item) => list.push(item));
    Koen.map((item) => list.push(item));
    Koyou.map((item) => list.push(item));
    Onsen.map((item) => list.push(item));
    Sakura.map((item) => list.push(item));
    Shinrinyoku.map((item) => list.push(item));
    Shiro.map((item) => list.push(item));
    Taki.map((item) => list.push(item));
    Yakei.map((item) => list.push(item));
    Zekkei.map((item) => list.push(item));
    Toge.map((item) => list.push(item));
    for (let i = 0; i < list.length; i++) {
      list[i].id = i;
    }
    return list;
  };

  const searchSpot = (spot) => {
    const list = [];
    const data = sightseeing();
    data.map((item) => {
      if (item.address.indexOf(spot) !== -1) {
        list.push(item);
      }
    });

    return list;
  };

  // 楽天レストランAPI

  // 緯度経度を取得
  const onSubmitMap = async (data) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_GEOCODE_ENDPOINT}`, {
        params: {
          address: data,
          key: process.env.REACT_APP_MAP_KEY,
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
      const res = await axios.get(process.env.REACT_APP_HOTEL_ENDPOINT, {
        params: {
          applicationId: process.env.REACT_APP_HOTEL_KEY,
          format: "json",
          latitude: lat,
          longitude: lng,
          datumType: 1,
          page: 1,
          hits: 5,
        },
      });
      const { hotels } = await res.data;
      setHotel(hotels);
    } catch (error) {
      setErrMsg(error.message);
    }
  };

  // 関数変数登録
  return (
    <AppContext.Provider
      value={{
        onSubmitMap,
        hotel,
        lat,
        lng,
        errMsg,
        candidate,
        setCandidate,
        regist,
        setRegist,
        sightseeing,
        searchSpot,
        app,
        spot,
        setSpot,
        selectPref,
        setSelectPref,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
 
 export default AppContextProvider;
 