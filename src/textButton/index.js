import React from 'react'

import "./textButton.css"

export const TextButton = ({ className, label, hover, ...props }) => {
    return (
      <button
        type="button"
        className={`button-text ${className} ${hover ? "hover" : ""}`}
        {...props}
      >
        {label}
      </button>
    );
};
  