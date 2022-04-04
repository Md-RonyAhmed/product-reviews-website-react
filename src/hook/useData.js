import { useEffect, useState } from "react"

export const useData = () => {
   const [data, setData] = useState();
   useEffect(() => {
     fetch("data.json")
       .then((res) => res.json())
       .then((data) => setData(data));
   }, []);
   return [data, setData];
}