import React from 'react';

const User = (props) => {
   const { name, pic, comment, rating } = props.user;
   return (
     <>
       <div className="bg-green-100 p-4 m-4 w-80 h-[480px] rounded-xl">
         <div>
           <img
             className="rounded-xl mx-auto pb-5"
             width="280px"
             height="215px"
             src={pic}
             alt=""
           />
         </div>
         <h4>Name: {name}</h4>
         <p>Comment: {comment}</p>
         <p>
           <small>Rating: {rating}</small>
         </p>
       </div>
     </>
   );
};

export default User;