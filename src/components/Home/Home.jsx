import React from 'react';
import { useReviews } from '../../hook/useReviews';
import Display from '../Display/Display';
import User from '../User/User';

const Home = () => {
   const [users, setUsers] = useReviews();

   return (
     <>
       <div className="grid grid-cols-2 gap-3 m-4">
         {<Display></Display>}
       </div>
       <h1 className="text-center text-4xl m-4">Customer Reviews(3)</h1>
       <div className="grid grid-cols-3 gap-4">
         {users.slice(0, 3).map((user) => (
           <User key={user.id} user={user}></User>
         ))}
         </div>
         <button className='h-8 w-32 bg-green-300 rounded m-4'>Show All Reviews</button>
     </>
   );
};

export default Home;