import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cart-slice.js';

const CartTile = ({ cart }) => {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cart?.id));
  }
  return (
    <div className="max-w-full max-h-full  border-2 rounded-xl border-red-800 mt-2 p-3 flex justify-center gap-4">
      <div className="w-[300px] h-[300px] overflow-hidden">
        <img
          src={cart?.image}
          alt={cart?.title}
          className="w-full h-full object-contain"
        ></img>
      </div>
      <div>
        <h2
          className="text-lg font-bold text-wrap w-60 line-clamp-3 mx-auto py-5 "
          title={cart.title}
        >
          {cart?.title}
        </h2>
        <p className="text-lg text-gray-800">
          <span>Prince:</span>
          <span> {cart?.price}</span>
        </p>
        <button
          onClick={handleRemoveFromCart}
          className="uppercase bg-red-900 text-white border-2 rounded-lg font-bold p-3 cursor-pointer"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartTile;
