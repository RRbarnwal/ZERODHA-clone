import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../hooks/useAuth";

const Orders = () => {
  const [allOrders, SetAllOrders] = useState([]);
  let { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:3002/orders", {
        headers: {
          Authorization: user,
        },
      })
      .then((res) => {
        SetAllOrders(res.data);
      });
  }, [allOrders]);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import { useAuth } from "../hooks/useAuth";

// const Orders = () => {
//   const [allOrders, setAllOrders] = useState([]);
//   let { user } = useAuth();

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("http://localhost:3002/orders/index", {
//           headers: {
//             Authorization: user,
//           },
//         });
//         setAllOrders(res.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []); // ✅ run only once when component mounts

//   return (
//     <>
//       <h3 className="title">Orders ({allOrders.length})</h3>

//       <div className="order-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Qty.</th>
//               <th>Price</th>
//               <th>Mode</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allOrders.map((stock, index) => (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.price?.toFixed(2)}</td>
//                 <td>{stock.mode}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Orders;
