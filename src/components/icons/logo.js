import React from 'react';
import Logos from "assets/images/logo.png"

const Logo = ({ white, ...props }) => {
  return (
    <a href="/#"><img src={Logos} alt="Logo" width="100px"/></a>
  );
};

export default Logo;
