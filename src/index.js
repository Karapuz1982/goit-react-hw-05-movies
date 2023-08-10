// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import  App  from './components/App.js/App';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter basename='/goit-react-hw-05-movies'>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js/App';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-05-movies'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
