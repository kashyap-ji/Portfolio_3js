import React, { useEffect, useRef } from 'react';
import './Header.css';
import ME from '../../images/myphoto.webp';
import HeaderSocials from './HeaderSocials';
import { RiFontSize } from 'react-icons/ri';
import { Application } from '@splinetool/runtime';

const Header = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const appInstance = new Application(canvas);
    appInstance.load('https://prod.spline.design/SvQxyzFYgzOM9syL/scene.splinecode');
  }, []);

  return (
    <header>
      <div className='mobile'><canvas ref={canvasRef} id="canvas3d" className="canvas-overlay" /></div>
      <div className="container header__container">
        <h3 className="greet">Hello I'm</h3>
        <h1 className="name">Raj Kashyap</h1>
        <h5 className="greet">Web Developer</h5>

        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        {/* <canvas ref={canvasRef} id="canvas3d" className="canvas-overlay" /> */}
      </div>
    </header>
  );
};

export default Header;
