import React from "react";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="flex items-center space-x-2">
      <button
        className="w-8 h-8 bg-gray-300 text-black rounded-full"
        onClick={decrease}
      >
        -
      </button>
      <span className="text-white">{quantity}</span>
      <button
        className="w-8 h-8 bg-gray-300 text-black rounded-full"
        onClick={increase}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
