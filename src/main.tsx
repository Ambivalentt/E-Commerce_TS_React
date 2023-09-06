import {createRoot} from 'react-dom/client';
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
)
