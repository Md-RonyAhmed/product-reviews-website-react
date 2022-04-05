import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
     <div className="bg-slate-200 h-screen">
       <div className="text-center py-10">
         <h1 className="text-8xl font-bold text-red-700 mb-4">404</h1>
         <p className="mb-4 pb-4">
           <small className="text-purple-500 font-bold">Page not found</small>
         </p>
         <Link
           to="/home"
           className="bg-green-300 rounded m-4 p-2 hover:text-white hover:bg-black"
         >
           Back to Home
         </Link>
       </div>
     </div>
   );
};

export default NotFound;