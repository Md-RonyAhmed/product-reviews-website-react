import React from 'react';
import { useReviews } from '../../useReviews/useReviews';
import User from '../User/User';

const Home = () => {
   const [users, setUsers] = useReviews();

   return (
      <>
      <h1 className='text-center text-4xl m-4'>Customer Reviews(3)</h1>
       <div className="grid grid-cols-3 gap-4">
         {users.slice(0, 3).map((user) => (
           <User key={user.id} user={user}></User>
         ))}
       </div>
     </>
   );
};

export default Home;