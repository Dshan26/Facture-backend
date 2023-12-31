import React from "react";
import { PropTypes } from "prop-types";

export const RowItemView = ({
  id,
  product,
  price,
  quantity,
  handlerDeleteItem,
}) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button className="btn btn-danger" onClick={() => handlerDeleteItem(id)}>ELiminar</button>
        </td>
      </tr>
    </>
  );
};
RowItemView.PropTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
