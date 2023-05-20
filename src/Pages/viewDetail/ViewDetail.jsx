import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetail = () => {
    const toy = useLoaderData()
    const {} = toy
    console.log(id)

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default ViewDetail;