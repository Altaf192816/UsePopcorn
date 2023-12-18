import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';
// function Test(){
//   const [movieRating,setMovieRating] = useState(0);
//   return<>
//   <StarRating color='blue' onRating = {setMovieRating}/>
//   <p>This movie was rated {movieRating} star</p>
//   </>
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating = {5} className = "test" message ={["Terrible","Bad","Okay","Good","Amazing"]}/>
    <StarRating maxRating = {10} color='red' defaultRating={3}/>
    <Test /> */}
  </React.StrictMode>
);

