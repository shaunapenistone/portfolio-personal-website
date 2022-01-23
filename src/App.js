import React from 'react'
import { Gradient } from 'react-gradient';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './pages/LandingPage'

const gradients = [
  ['#BAB9FF', '#C9FFFE'], // blue -> purple
  ['#CEB9EC', '#FFA4F3'], // lilac -> pink
];

const View = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%
`

function App() {
  return (
      <Gradient
        gradients={ gradients }
        property="background"
        duration={ 5000 }
        angle="90deg"
      >    
        <BrowserRouter>
          <View>
            <Navbar />
            {/* <LandingPage /> */}
            <Routes>
              <Route path="/" element={<LandingPage />}/>
            </Routes>
          </View>
        </BrowserRouter>
      </Gradient>  
  );
}

export default App;
