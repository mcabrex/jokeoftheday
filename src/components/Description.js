import React from 'react';
import './Description.css';

export default function Description(props) {
  return (
    <div id="description">
      {props.imageIsDefault 
      ? "Login For A Good Joke" 
      : (<div className="flex-center">
          <div className="shift-opacity">
            <div className="pulse-1">IT'S</div>
          </div>
          <div className="shift-opacity">
            <div className="pulse-2">YOU,</div>
          </div>
          <div className="shift-opacity">
            <div className="pulse-3">YOU</div>
          </div>            
          <div className="shift-opacity">
            <div className="pulse-4">ARE</div>
          </div>         
          <div className="shift-opacity">
            <div className="pulse-5">THE</div>
          </div>          
          <div className="shift-opacity">
            <div className="pulse-6">JOKE</div>
          </div>
        </div>)
      }
    </div>
  );
}