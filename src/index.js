import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const FILES = [
  {"fileType":"jpg","size":"4.3MB","name":"me on skis.jpg","status":"Synced"},
  {"fileType":"mov","size":"1.3GB","name":"cats falling.mov","status":"Uploaded"},
  {"fileType":"txt","size":"0.9KB","name":"My December expenses.txt","status":"Uploaded"},
  {"fileType":"mp3","size":"3.4MB","name":"disturbed_sound_of_silence.mp3","status":"New"},
];

ReactDOM.render(<App files={FILES}/>, document.getElementById('root'));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
