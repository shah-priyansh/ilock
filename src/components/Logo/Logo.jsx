import React from 'react';
import './Logo.css';

const Logo = ({ variant = 'default' }) => {
  return (
    <div className="logo-container" data-variant={variant}>

      <div className="logo-text">
        <img src="/images/logo.svg" alt="Capital Custodia" />
      </div>
    </div>
  );
};

export default Logo;
