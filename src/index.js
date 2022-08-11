
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from '../src/components/app';
import { BrowserRouter } from "react-router-dom";

//npm install node-sass

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);








