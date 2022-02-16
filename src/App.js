
import './App.css';

import Header from './components/Header';
import GoogleMaps from './components/GoogleMaps';
import Login from "./components/Login";
import Signin from "./components/SignIn";
import Project from "./components/Project";
import Profile from "./components/Profile";
import AppContextProvider from './components/context/AppContext';
import { Routes, Route, Link } from "react-router-dom";
import Album from './components/Album';


function App() {


  return (
    <div className="App">
      <AppContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/map" element={<GoogleMaps />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
}

export default App;
