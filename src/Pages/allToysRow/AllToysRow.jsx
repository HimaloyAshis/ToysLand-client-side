import React from 'react';

const MyToysRow = ({toy}) => {

    const {Seller_Name,Toy_Name,SubCategory,Ratting,Url,Available_Quantity,Price} = toy
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
                <button className="btn ">View Detail</button>
            </th>
        </tr>
    );
};

export default MyToysRow;