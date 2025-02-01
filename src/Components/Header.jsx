import React from 'react';
import TypingEffect from "../Components/TypingEffect";
import Flag from "../Components/Flag";


const Header = () => {
  return (
    <div className='wrapper'>
    <>
    <div className='Head'>
      <svg className='laptop' xmlns="http://www.w3.org/2000/svg" width="650" height="520" viewBox="0 0 640 512"><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16M576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512zm-64 272H128V64h384z"/></svg>
    </div>
    <h4 className='Name'>ALIZA KHAN </h4>
      
          <TypingEffect />
          <Flag />


    </>
    </div>
  );
};

export default Header;
