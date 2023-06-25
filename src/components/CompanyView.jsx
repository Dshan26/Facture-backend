import { PropTypes } from "prop-types";
import React from "react";

export const CompanyView = ({ company }) => {
  return (
    <>
      <h3>Datos de la compañia</h3>
      <ul className="list-group">
        <li className="list-group-item active">{company.name}</li>
        <li className="list-group-item">{company.fiscaNumber}</li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  company: PropTypes.object.isRequired,
}