import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider';

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(authContext);
  const { id } = useParams();
  const [info, setInfo] = useState({})
  console.log(id,info);
    const { title, price, service_id,img } = info;
    useEffect(() => {
        fetch(`https://server-carservice.vercel.app/service/${id}`)
            .then(res => res.json())
            .then(data => setInfo(data))
        .catch(err=>console.error(err))
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
      const name = `${form.fname.value} ${form.lname.value}`;
      const number = form.number.value;
        const email = form.email.value;
        const message = form.message.value;
        const order = {
          name: name,
          number:number,
            email: email,
          message: message,
            img,
            serviceName: title,
            serviceId:service_id,
          price: price,
          status:{
            status:'Pending'
          }
        }
        fetch('https://server-carservice.vercel.app/orders', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
      form.reset()
      navigate('/')
    }
    return (
        <div className='lg:w-[1140px] lg:h-[700px] mx-auto my-32'>
            <form onSubmit={handleSubmit} className='p-24 bg-gray-100 rounded-lg'>
                <div className="flex">
                <div className="mb-1 sm:mb-2 w-1/2 mr-3">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      First Name
                    </label>
                    <input
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="fname"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2 w-1/2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="lname"
                    />
                  </div>
                </div>
                {/* contact details */}
                <div className="flex">
                <div className="mb-1 sm:mb-2 w-1/2 mr-3">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      placeholder="+88012356789"
                      required
                      type="number"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="number"
                      name="number"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2 w-1/2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
              <input
                defaultValue={user?user.email:'not registered'}
                      placeholder="example@gmail.com"
                      required
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Message
                    </label>
                    <input
                      placeholder="Message"
                      required
                      type="textarea"
                      className="flex-grow w-full h-60 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="textarea"
                      name="message"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FF3811] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Order Confirm
                    </button>
                  </div>
                </form>
        </div>
    );
};

export default Checkout;