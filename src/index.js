import ReactDOM from 'react-dom/client'; 
import { BrowserRouter } from 'react-router-dom'; // <-- меняем на 
BrowserRouter 
import App from './App'; 
import './index.css'; 
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
<React.StrictMode> 
<BrowserRouter> 
<App /> 
</BrowserRouter> 
</React.StrictMode> 
); 
