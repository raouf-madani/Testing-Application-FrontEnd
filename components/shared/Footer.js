import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="Footer-paneltesting">
      <Image
        style={{marginBottom: '5px'}}
        src="/SE_Logo_White_RGB.svg"
        height="45px"
        width="120px"
        alt="se-logo"
      />
      <div className="copyright">Copyright © Siemens energy 2021</div>
    </div>
  );
};

export default Footer;
