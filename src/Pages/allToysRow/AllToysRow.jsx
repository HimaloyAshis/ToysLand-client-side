import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({toy}) => {

    const {Seller_Name,Toy_Name,SubCategory, _id,Url,Available_Quantity,Price} = toy
    console.log(toy)

    return (
        <tr>
           
            <td>
                {Seller_Name}
            </td>
            <td>
                {Toy_Name}
            </td>
            <td>{SubCategory}</td>
            <td> { '$ ' + Price}</td>
            <td>{Available_Quantity}</td>
            <th>
                <Link to={`/vieDetail/${_id}`} className="btn ">View Detail</Link>
            </th>
        </tr>
    );
};

export default MyToysRow;