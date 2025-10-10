import { HeadProvider, Link, Meta, Title } from "react-head";

import App from './App.jsx'
import {CssBaseline}  from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeadProvider>
      <CssBaseline />
      <div onContextMenu={(e)=>e.preventDefault()}>
        <App />
      </div>
    </HeadProvider>
  </StrictMode>
);
