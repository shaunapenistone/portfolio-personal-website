import React from 'react'

import { Gradient } from 'react-gradient';

import styled from 'styled-components';

const gradients = [
  ['#CEB9EC', '#FFA4F3'], // lilac -> pink
  ['#C9FFFE', '#BAB9FF'], // blue -> purple
];

const View = styled.div`
  width: 100%;
  min-height: 120vh;
  height: 100%
`

function App() {
  return (
    <>
      <Gradient
        gradients={ gradients }
        property="background"
        duration={ 5000 }
        angle="90deg"
      >    
        <View>
        <h1>test</h1>
        </View>
      </Gradient>  
    </>
  );
}

export default App;
