import React,{useContext} from 'react'
import { AppContext } from "./context/AppContext";
import HotelTableList from "./HotelTableList";
import TouristArea from "./TouristArea";

const Tables = () => {
    const { spot } = useContext(AppContext);

  return <>{spot === "spot" ? <TouristArea /> : <HotelTableList />}</>;
}

export default Tables