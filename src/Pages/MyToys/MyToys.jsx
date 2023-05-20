import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const MyToys = () => {
    const {user} = useContext(AuthContext)

    const [myToys, setMyToys]= useState()
    

    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyToys(data))
    },[user])
    console.log(myToys)

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // myToys.map(toy=>console.log(toy))
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;