import React from 'react';
import Display from '../Display/Display';
import Header from '../Header/Header';

const About = () => {
   return (
     <div className='bg-slate-200 h-screen'>
       <Header />
       <h1 className="text-5xl text-center m-6">About Us</h1>
       <div className='m-4 grid grid-cols-2 gap-3 pb-7'>
         <Display></Display>
       </div>
     </div>
   );
};

export default About;