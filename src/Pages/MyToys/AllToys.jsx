import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from '../allToysRow/AllToysRow';

const AllToys = () => {
    const { user } = useContext(AuthContext)

    const [myToys, setMyToys] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/allToys?limit=${20}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])
    // console.log(myToys)

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
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