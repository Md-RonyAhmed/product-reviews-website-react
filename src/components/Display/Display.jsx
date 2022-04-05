import React from 'react';
import img from '../../img/macrainbow.jpg';
const Display = () => {
   return (
     <>
       <div className="my-8 py-4">
         <h1 className="text-4xl text-black">Your Next Laptop</h1>
         <h1 className="text-4xl text-purple-600 mt-2">Your Best Laptop</h1>
         <p className="text-justify text-lg my-4">
           This is a review site. You can review your any kind of Electronics
           devices like smartphones, laptops, PC etc. This is the best site for
           you that you can understand which is the best products that you can
           buy.
         </p>
         <button className="h-8 w-32 bg-green-300 rounded mt-2 hover:text-white hover:bg-black">
           Live Demo
         </button>
       </div>
       <div>
         <img className="object-cover rounded" src={img} alt="" />
       </div>
     </>
   );
};

export default Display;