import React from 'react'
import { Gradient } from 'react-gradient';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import LandingPage from './pages/LandingPage'

const gradients = [
  ['#CEB9EC', '#FFA4F3'], // lilac -> pink
  ['#C9FFFE', '#BAB9FF'], // blue -> purple
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
          <Routes>
            <Route path="*" component={LandingPage} />
          </Routes>
        </View>
        </BrowserRouter>
      </Gradient>  
  );
}

export default App;
