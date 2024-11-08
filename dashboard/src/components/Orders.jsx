// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  // const [ allOrders , setAllOrders] = useState([]);

  // useEffect( ()=>{
  //   axios.post("http://localhost:8000/newOrder")
  //   .then ( (res)=>{
  //      setAllOrders(res.data);
        
  //    res.send("Order added");
  //   }) ;
  // }, [])
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders  </p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
