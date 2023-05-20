import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyToysRow = ({ toy, toys, setToys }) => {
    

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/Toys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remaining = toys.filter(toy=>toy._id !== _id)
                        setToys(remaining)

                    })

            }
        })

    }

    return (
        <tr key={toy._id}>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={toy.Url} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>

            <td >
                {toy.Seller_Name}
            </td>
            <td>
                {toy.Toy_Name}
            </td>
            <td>{toy.SubCategory}</td>
            <td> {'$ ' + toy.Price}</td>
            <td>{toy.Available_Quantity}</td>
            <th>
                <Link to={`/vieDetail/${toy._id}`} className="btn ">Update</Link>
            </th>
            <th>
                <button onClick={() => handleDelete(toy._id)} className="btn ">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;