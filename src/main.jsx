import { createRoot } from 'react-dom/client';
import '../node_modules/flowbite/dist/flowbite.min.js';
import './index.css'
import App from './App.jsx'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

createRoot(document.getElementById('root')).render(
    <App />
)
