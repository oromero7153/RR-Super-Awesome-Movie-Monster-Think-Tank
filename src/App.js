import React, { Suspense } from 'react';
import './App.css';
import {Audio} from 'react-loader-spinner'

function App() {
  const AboutUs = React.lazy(() => import('./components/AboutUs'))
  const Packages = React.lazy(() => import('./components/Packages'))


  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
        <Suspense fallback={<Audio
        type="Bars"
        color="#ff00ff"
        height={200}
        width= {200}
        style={{margin:"o auto"}}/>}>
          <AboutUs />
          <Packages />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
