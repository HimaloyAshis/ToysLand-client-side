import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className=' questionBGC p-10'>
            <h2 className='text-4xl font-bold text-center py-5'>Question and answer part</h2>
            <div className='py-10'>
                <h1 className='text-2xl font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <br />
                <p>Here is taking about JWT, a process to verified the valid user, stands for Json Web Token. When a user need data from website user might be verified by JWT. When he verified bt JWt he get to token form JWT, they are access and refresh token. Here access is short lifespan to use data by authorization and refresh is long lifespan token. If by any chance access token is date expired it can be remake by refresh token. But if refresh token got date expired it have to remake once again by authorization process with all information. </p>
                <br />
                <br />

                <h1 className='text-2xl font-semibold'>Compare SQL and NoSQL databases?</h1>
                <br />
                <p>
                    SQL stands for Structured Query Language and NoSQL stands for Not only SQL are tow types of Data Base Management System(DBMS)
                </p>
                <br />

                <p>
                    Data model, they are different. SQL databases use a structured, tabular data model where data is organized into tables with predefined schemas. Tables consist of rows (records) and columns (fields) with well-defined data types.
                    <br />
                    NoSQL database employs various data model including key-value, document, columnar and graph.
                    They provide more flexible schema for allowing more dynamic and unstructured data.
                </p>
                <br />
                <p>Query language , SQL database utilize SQL as the standard query language for data manipulation and data retrieve. SQL offers a rich set of declarative commands to perform complex queries, joins, aggregations, and transactions.

                </p>
                <br />
                <p>NoSQL uses verity of query language to specific to their data model.For example key-value stores often provide simple CRUD operations, while document databases may support query languages based on JSON-like syntax or specific query APIs. </p>
            
                <br />
                <p>Scalability, SQL database follow a vertical scaled approach where they are scaled up by adding more powerful hardware resources (e.g., CPU, RAM). However, some SQL databases now support horizontal scaling through sharding or replication techniques.</p>
                <br />
                <p>NoSQL database are designed for horizontal scalability. They can distribute data across multiple servers or node etc.</p>
                <br />
                <br />
                <h1 className='text-2xl font-semibold'>What is express js? What is Nest JS ?</h1>
                <br />
                <p>Both Express js and Nest js are popular for building a server side application. Here is a review of each.</p>
                <p>Express js is minimalistic unopinionated and lightweight web application framework for Node.js. It provides a set of features and tools for building web applications and APIs. Express.js offers a simple, flexible, and modular approach, allowing developers to create server-side applications quickly and efficiently.</p>
                <br />
                <p>Nest js is a progressive, extensible and opinionated Node js framework built with typescript. It combines elements from both object-oriented programming and functional programming to provide a robust foundation for building scalable and maintainable server-side applications.</p>
                <br />
                <br />
                <h1 className='text-2xl font-semibold'>What is MongoDB aggregate and how does it work?</h1>
                <br />
                <p>In mongoDB, The aggregate is a powerful feature that allows you to perform complex data aggregation and analysis task on collection and document. It provides a flexible way to data process and data transform using pipeline stage. </p>
            </div>
        </div>
    );
};

export default Blog;