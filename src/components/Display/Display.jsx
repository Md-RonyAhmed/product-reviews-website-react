import React from 'react';
import img from '../../img/macrainbow.jpg';
const Display = () => {
   return (
     <>
       <div>
         <h1 className="text-4xl">Your Next Laptop</h1>
         <h1 className="text-4xl">Your Best Laptop</h1>
         <p>
           This is a review site. You can review your any kind of Electronics
           devices like smartphones, laptops, PC etc. This is the best site for
           you that you can understand which is the best products that you can
           buy.
         </p>
         <button className="h-8 w-32 bg-green-300 rounded mt-2">
           Live Demo
         </button>
       </div>
       <div>
         <h1>Hello</h1>
         <img className="h-48 w-48 object-cover" src={img} alt="" />
       </div>
     </>
   );
};

export default Display;