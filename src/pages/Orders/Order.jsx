import React from 'react';

const Order = ({ order, refresh, setRefresh }) => {
  const { price,img, _id, serviceId, serviceName,status } = order;
  const handleDelete = () => {
    fetch(`http://localhost:3001/orders/${_id}`, {
      method: "DELETE",
      headers: {
        authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
      console.log(data);
      })
    setRefresh(!refresh);
  }
  // update function here
  const handleUpdate = () => {
    fetch(`http://localhost:3001/orders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization:`Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify({status:'Approved'})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err=>console.error(err))
      setRefresh(!refresh)
  }
  // handle css
  // const handleCss=()=>{
  // if (status.status === 'pending') {
  //   style={``}
  //   }
  // }
  console.log(status);
    return (
        <tr>
        <th>
          <label>
                                {/* close button */}
                                <button type="button" onClick={handleDelete} className="text-white border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-black dark:text-black dark:hover:text-white dark:focus:ring-black"><span className='w-5 h-5 font-bold'>✕</span>
  {/* <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
</button>
          </label>
        </th>
        <td>
          <div className="flex space-x-3">
            <div className="avatar">
              <div className="mask rounded-lg w-36 h-36">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className='mt-3'>
              <div className="font-bold">{ serviceName}</div>
              <div className="text-sm opacity-50">Service ID : { serviceId}</div>
              <div className="text-sm opacity-50">Order ID : { _id}</div>
            </div>
          </div>
        </td>
        <td>
          price : {price.split(".")[0]}$
          {/* Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
        </td>
        <td>{ new Date().toLocaleDateString()}</td>
        <th>
          <button onClick={handleUpdate} className={status.status==='Pending'?`btn btn-warning`:`btn btn-outline btn-success`}   >{status.status }</button>
        </th>
      </tr>
    );
};

export default Order;
// btn bg-[#FF3811] border-0 className={}