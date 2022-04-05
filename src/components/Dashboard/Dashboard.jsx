import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useData } from '../../hook/useData';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Dashboard = () => {
   const [data, setData] = useData();
   return (
     <div className='bg-slate-100'>
       <Header></Header>
       <h1 className="text-3xl text-center m-4">Area Chart</h1>
       <div>
         <AreaChart
           className="mx-auto"
           width={730}
           height={250}
           data={data}
           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
         >
           <defs>
             <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
               <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
             </linearGradient>
             <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
               <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
               <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
             </linearGradient>
           </defs>
           <XAxis dataKey="name" />
           <YAxis />
           <CartesianGrid strokeDasharray="3 3" />
           <Tooltip />
           <Area
             type="monotone"
             dataKey="revenue"
             stroke="#8884d8"
             fillOpacity={1}
             fill="url(#colorUv)"
           />
           <Area
             type="monotone"
             dataKey="investment"
             stroke="#82ca9d"
             fillOpacity={1}
             fill="url(#colorPv)"
           />
         </AreaChart>
       </div>
       <h1 className="text-3xl text-center m-4">Bar Chart</h1>
       <div className="m-8">
         <BarChart className="mx-auto" width={730} height={250} data={data}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           <Legend />
           <Bar dataKey="investment" fill="#8884d8" />
           <Bar dataKey="revenue" fill="#82ca9d" />
         </BarChart>
       </div>
       <h1 className="text-3xl text-center m-4">Line Chart</h1>
       <div>
         <LineChart
           className="mx-auto"
           width={731}
           height={250}
           data={data}
           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
         >
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           <Legend />
           <Line type="monotone" dataKey="month" stroke="#8884d8" />
           <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
         </LineChart>
       </div>
       <Footer/>
     </div>
   );
};

export default Dashboard;