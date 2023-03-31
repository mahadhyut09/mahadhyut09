import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Useeffectdemo(){

let [users,setUsers]=useState([]);
let [error,setError]=useState('');
 useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts")
     .then(resp=>setUsers(resp.data))
     .catch(err=>setError(err.message))
 },[])
 console.log(users)
 return (
     <div className='container m-4'>
         <h1 className='m-3'>API DATA TABLE</h1>
         {error!=='' && <p className='h3 text-danger'>{error}</p>}
         {users.length!==0 && <table className='table table-bordered border-dark border-5 bg-info '>
             <thead className='text-dark'>
                 <tr key="">
                    <td>USERID</td>
                    <td>ID</td>
                    <td>TITLE</td>
                 </tr>
                 </thead>
                 <tbody>
                     { users.map((userObj)=>
                     <tr key={userObj.id}>
                         <td>{userObj.userId}</td>
                         <td>{userObj.id}</td>
                         <td>{userObj.title}</td>

                     </tr>
                     )}
                 </tbody>

            
             </table>}
     </div>
 )
}
export default Useeffectdemo;