import React from 'react';

const Display = () => {
   return (
     <div>
       <div>
         <h1>Your Next Laptop</h1>
         <h1>Your Best Laptop</h1>
         <p>
           This is a review site. You can review your any kind of Electronics
           devices like smartphones, laptops, PC etc. This is the best site for
           you that you can understand which is the best products that you can
           buy.
         </p>
         <button>Live Demo</button>
       </div>
       
         <img
           className="h-48 w-48 object-cover"
           src="./img/macrainbow.jpg"
           alt=""
         />
     
     </div>
   );
};

export default Display;