import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="w-[100%] ">
  {
    cart.length > 0  ? 
    (<div className=" flex  justify-center  ">


      <div className="  w-[35%] ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="  w-[35%] h-100vh text-center">

        <div>
          <div className=" text-green-600 font-semibold mt-10 text-2xl">Your Cart</div>
          <div className=" text-green-600 font-semibold text-5xl " >Summary</div>
          <p>
            <span className="  font-semibold ">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <button className=" text-white bg-green-600 font-semibold w-[25] h-[33] mt-6">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
