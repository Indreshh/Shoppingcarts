
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >

      <div className="flex gap-8 mt-10 ">

        <div className="h-[140px]  w-[130px]">
          <img src={item.image} className=" h-full w-full" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description.split("").slice(0,8).join("") + "..."}</h1>
          <div className="flex justify-between">
            <p className="text-green-600 font-semibold mt-4">${item.price}</p>
            <div 
            onClick={removeFromCart}>
              <FcDeleteDatabase className="bg-red-400 h-6 w-6 rounded-md mt-5"/>
            </div>
            </div>
            <div class="border-b-4 border-black mt-4"></div>
          

        </div>


      </div>

    </div>
  );
};

export default CartItem;
