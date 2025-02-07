// onChange = event handler used primarily with form Elements
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes

import React, { useState } from 'react';

function Input() {
  const [name, setName] = useState('Guest');
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('Delivery');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      {/* <input value={name} onChange={(e) => handleChange(e)}></input> */}
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>

      <input
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
      ></input>
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Giftcard">Giftcard</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick up"
          checked={shipping === 'Pick up'}
          onChange={handleShippingChange}
        ></input>
        Pick up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === 'Delivery'}
          onChange={handleShippingChange}
        ></input>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default Input;
