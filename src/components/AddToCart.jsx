import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";
import CartIcon from "./CartIcon"

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    setShowToast(true);
    dispatch(addCartItems({
      id: product.ID,
      title: product.title,
      cover: product.cover,
      price: product.price,
      stock: product.stock,
      qty,
    }))
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <button className="btn btn-primary px-8 py-5" onClick={addToCart}>
        <CartIcon size={24} color="currentColor" />
        <span className="font-thin ml-3">Add To Cart</span>
      </button>
      {showToast && (
        <div className="toast toast-end">
          <div className="alert">
            <span>
              {qty} {qty > 1 ? "pieces" : "piece"} of {product.title} {qty > 1 ? "have" : "has"} been added to your cart.
            </span>
          </div>
        </div>
      )}
    </>
  );
}