import React from "react";

import Routes from './routes'
import Header from './Components/Header'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header titulo="Dev-list"/>
      <Routes />
    </div>
  );
}

export default App;
