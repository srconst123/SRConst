import React from 'react';
import Logos from "assets/images/logo.png"

const Logo = ({ white, ...props }) => {
  return (
    <img src={Logos} alt="Logo" width="160px"/>
  );
};

export default Logo;
