import React from "react";
import { PropTypes } from "prop-types";

import { RowItemView } from "./RowItemView";

export const ListItemsView = ({ items, handlerDeleteItem }) => {
  return (
    <>
      <h4>Productos de la factura</h4>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>ELiminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItemView
              key={id}
              id={id}
              product={product}
              price={price}
              quantity={quantity}
              handlerDeleteItem={handlerDeleteItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
ListItemsView.PropTypes = {
  items: PropTypes.array.isRequired
}
