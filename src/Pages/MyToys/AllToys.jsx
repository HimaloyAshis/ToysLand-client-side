import React, { useContext, useEffect, useState } from 'react';
import './AllToys.css'
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from '../allToysRow/AllToysRow';
import { useLocation } from 'react-router-dom';


const AllToys = () => {
    const { user } = useContext(AuthContext)
    const [change, setChange] = useState()
    const location = useLocation()

    const [myToys, setMyToys] = useState([])
    console.log(myToys)

    useEffect(() => {
        const routeName = location.pathname 
        document.title = `ToysLand - ${routeName}`;
    }, [location.pathname]);



    useEffect(() => {
        fetch(`https://toy-verse-server-assignment.vercel.app/allToys?limit=${20}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    // console.log(myToys)

    const handleSearch =()=>{
        fetch(`https://toy-verse-server-assignment.vercel.app/toySearchByName/${change}`)
        .then(res=>res.json())
        .then(data=>setMyToys(data))
    }


    return (
        <div>
            <div className="overflow-x-auto w-full allToy">
                <div className='text-center py-4'>
                    <input onChange={(e)=>setChange(e.target.value)} className='input ' type="search" name="search" placeholder='Search by Toy name' id="" />
                    <button onClick={handleSearch} className='btn'>Search</button>
                </div>
                <table className="table w-full allToy">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>price</th>
                            <th>Available Quantity</th>
                            <th>View Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <MyToysRow key={toy._id} toy={toy}></MyToysRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;