import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id,title,price,img}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl w-80 h-52" />
  </figure>
  <div className="card-body">
                <h2 className="card-title text-xl font-bold">{ title}</h2>
                <div className="flex justify-between text-orange-500">
                    <p className=' font-semibold'>Price : ${price}</p>
                    <Link to={`/checkout/${_id}`}><button className=''>🡢</button></Link>
    </div>
  </div>
</div>
    );
};

export default Service;