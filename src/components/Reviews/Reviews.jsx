import React from 'react';
import { useReviews } from '../../hook/useReviews';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import User from '../User/User';

const Reviews = () => {
   const [users, setUsers] = useReviews();
   return (
     <div className='bg-slate-200'>
       <Header></Header>
       <h1 className="text-center text-4xl m-4">Customer Reviews</h1>
       <div className="grid grid-cols-3 gap-4">
         {users.map((user) => (
           <User key={user.id} user={user}></User>
         ))}
       </div>
       <Footer/>
     </div>
   );
};

export default Reviews;