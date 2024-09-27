import React from 'react';
import '../styles/innerbanner.css'; // Import the CSS file

const InnerBanner = ({ title }) => {
  return (
    <div className="inner-banner">
      <h2 className="inner-banner-title">{title}</h2>
    </div>
  );
};

export default InnerBanner;
