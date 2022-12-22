import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthProvider';
import Order from './Order'

const Orders = () => {
  const { user,logOut } = useContext(authContext);
  const [refresh, setRefresh] = useState(false);
  const [orders,setOrders]=useState([])
  useEffect(() => {
    if (!user?.email || !localStorage.getItem('token')) {
      return;
    }
    fetch(`http://localhost:3001/orders?email=${user?.email}`, {
      headers: {
        "authorization":`Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (res.status === 401 ||res.status=== 403) {
          return logOut()
        }
        return res.json()
      })
      .then(data => {
        setOrders(data)
      })
    .catch(err=>console.log(err))
  },[user?.email,refresh,localStorage.getItem('token')])
    return (
        <div className="overflow-x-auto w-full mt-5">
  <table className="table w-full">
    <thead className='ml-10'>
                    <tr>
                        <th></th>
        <th>Order</th>
        <th>Price</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
            {orders.map(order => <Order key={order._id} order={order} setRefresh={ setRefresh} refresh={refresh} />)}
    </tbody>
  </table>
</div>
    );
};

export default Orders;