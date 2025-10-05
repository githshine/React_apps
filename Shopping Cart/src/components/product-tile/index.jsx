import React from 'react';

const ProductTile = ({ product }) => {
  console.log('product:', product);

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl ">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-full w-full"
          ></img>
        </div>
        <div>
          <h2 className="w-40 truncate">{product.title}</h2>
        </div>
        <button className="uppercase bg-black text-white/90 rounded-lg p-3">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductTile;
