import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import ToggleSwitch from './toggle-switch';

const container = document.querySelector('#root');
const root = ReactDOMClient.createRoot(container);

root.render(<ToggleSwitch label="Toggle Switch" />);
