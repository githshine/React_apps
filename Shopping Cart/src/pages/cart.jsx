import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTile from '../components/cart-tile';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log('cart:', cart);

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cartSubTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setCartTotal(cartSubTotal);
  }, [cart]);

  return (
    <div>
      {cart && cart.length ? (
        <>
          <div className="flex justify-evenly min-h-[85vh] gap-10">
            <div className="max-w-4/5 max-h-[80vh] overflow-y-auto flex flex-col  items-center border-2 border-amber-100 bg-amber-100/30 rounded-lg p-2">
              {cart.map((it) => (
                <CartTile key={it?.id} cart={it} />
              ))}
            </div>
            <div className="flex flex-col items-start p-3 ml-6">
              <h2 className="text-2xl font-bold my-4">Your Cart Summary:</h2>
              <p className="text-xl font-semibold my-3 ml-3">
                <span>Items number:</span>
                <span> {cart.length}</span>
              </p>
              <p className="text-xl font-semibold my-3 ml-3">
                <span>Items costs:</span>
                <span> {cartTotal}</span>
              </p>
              <div className="flex w-full justify-end mt-10 p-3">
                <button className=" uppercase text-xl font-bold border-2 rounded-lg bg-red-900 text-white p-5 px-10 cursor-pointer">
                  Pay
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[80vh]">
          <h2 className="text-2xl font-bold my-6 mb-8">Cart is empty!</h2>
          <Link to={'/'}>
            <button className="uppercase bg-red-900 text-white border-2 rounded-lg font-bold p-3 cursor-pointer">
              Shopping Here
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
