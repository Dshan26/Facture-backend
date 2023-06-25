import React, { useEffect, useState } from "react";

export const FormItemsView = ({ handler }) => {
  const [invoiceItemsState, setinvoiceItemsState] = useState({
    product: "",
    price: "",
    quantity: "",
  });
  const { product, price, quantity } = invoiceItemsState;
  useEffect(() => {}, [price]);
  useEffect(() => {}, [invoiceItemsState]);

  const onInputChange = ({ target: { name, value } }) => {
    setinvoiceItemsState({
      ...invoiceItemsState,
      [name]: value,
    });
  };

  const onInvoiceSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (price.trim().length <= 1) return;
    if (isNaN(price.trim())) {
      alert("Error el percio no es un valor numerico");
      return;
    }
    if (quantity.trim().length < 1) {
      alert("Error la cantidad debe ser mayor a 0");
      return;
    }
    if (isNaN(quantity.trim())) {
      alert("Error la cantidad no es un valor numerico");
      return;
    }
    handler(invoiceItemsState);

    setinvoiceItemsState({
      product: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <>
      <form className="w-50" onSubmit={onInvoiceSubmit}>
        <input
          type="text"
          name="product"
          value={product}
          placeholder="Producto"
          className="form-control m-2"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Precio"
          className="form-control m-2"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Cantidad"
          className="form-control m-2"
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-primary m-2">
          Crear Items
        </button>
      </form>
    </>
  );
};
