import React from 'react';
import { render } from 'react-dom';
import App from './App';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Component = 
<div style={{ 
     display: "flex", 
     width: window.innerWidth, 
     height: window.innerHeight
  }}>
  <App />
</div>

render(Component, document.getElementById('root'));
