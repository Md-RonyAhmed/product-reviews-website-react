import { useEffect, useState } from "react"

export const useReviews = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      fetch('Users.json')
         .then(res => res.json())
         .then(data => setUsers(data));
   }, []);
   return [users, setUsers];
}