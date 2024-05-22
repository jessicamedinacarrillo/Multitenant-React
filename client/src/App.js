import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getConfig } from './services/config.service';
import Routes from './Routes';

function App() {
  const [config, setConfig] = useState({ loading: true, data: {} });
  const { loading, data } = config;

  useEffect(() => {
    async function getConfigAsync() {
      const response = await getConfig();
      if (response && response.data) {
        setConfig({ loading: false, data: response.data });
      } else {
        setConfig({ loading: false, data: { error: 'Error getting config from server' } });
      }
    }

    getConfigAsync();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {
            loading && 'Getting config from server...'
          }
          {
            data.error && data.error 
          }
          {/* {
            data.name && `The client is: ${data.name}`
          } */}

          <Routes routes={data.routes}/>
      </header>
    </div>
  );
}

export default App;
