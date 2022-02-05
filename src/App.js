
import './App.css';

import Header from './components/Header';
import GoogleMaps from './components/GoogleMaps';
import AppContextProvider from './components/context/AppContext';
// import React,{useContext} from 'react';
// import { AppContext } from './context/context';

function App() {

  
  return (
    <div className="App">
      <AppContextProvider>

      <Header />
      <GoogleMaps />
      </AppContextProvider>
    </div>
  );
}

export default App;
