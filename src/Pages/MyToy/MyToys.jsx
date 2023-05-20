import React, { useContext, useEffect, useState } from 'react';
import './MyToys.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])



    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Toy Name</th>
                        <th>Sub-Category</th>
                        <th>price</th>
                        <th>Available Quantity</th>
                        <th>View Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        toys.map(toy =>(
                            <tr key={toy._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={toy.Url} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {toy.Seller_Name}
                                </td>
                                <td>
                                    {toy.Toy_Name}
                                </td>
                                <td>{toy.SubCategory}</td>
                                <td> {'$ ' + toy.Price}</td>
                                <td>{toy.Available_Quantity}</td>
                                <th>
                                    <Link to={`/vieDetail/${''}`} className="btn ">View Detail</Link>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>


            </table>
        </div>
    );
};

export default MyToys;