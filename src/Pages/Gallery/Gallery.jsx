import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='py-20 gallery'>
            <div className='text-center '>
                <h2 className='text-4xl text-white font-bold'>ToysLand Gallery</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10'>
                <img src="https://parade.com/.image/t_share/MTkwNTgxMzA1NjUzNDcxMTAw/toy-story-characters-jessie.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR83CVw3sQtrd42V11wY-5OB8v9m3dfisC90A&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePdTp3cTNsQmT1FPy5Nqgqve9tyS1zOZ2og&usqp=CAU" alt="" />
                <img src="https://parade.com/.image/t_share/MTkwNTgxMzA1NjUzNDcxMTAw/toy-story-characters-jessie.png" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmFTOW_vkV5p9vfL10o4coouJ4xNbFn5q3uvOYK89rItqgYHYvyP18_A1gkk8QsP6Zgw&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ECcbg8Ip9Jg8HQtk7fRJ4g1H4sMn5cPLxw&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WMTAdks1YB45ds_POW_UxCKxTOHSHE9YzA&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjgXsq8AEGOE99rIxU6iloVvQea64mRnl0w&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjgXsq8AEGOE99rIxU6iloVvQea64mRnl0w&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0UP3wTwX5rkTC16bYTw2UECeJ0VFFsrRbQ&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-WvjCODO6okIZtu-tM3M9EoXZLG0eIdRHw&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4w1lO2JjF-eVZCYkYDqds1kwqyxps8wfaA&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default Gallery;