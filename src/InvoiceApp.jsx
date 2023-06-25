import React, { useEffect, useState } from "react";
import { calculateTotal, getInvoice } from "./services/getInvoice";
import { InvoiceView } from "./components/InvoiceView";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastName: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscaNumber: 0,
  },
  items: [],
};

export const InvoiceApp = () => {
  const [activeForm, setActiveForm] = useState(false);
  const [total, setTotal] = useState(0);
  const [invoice, setInvoice] = useState(invoiceInitial);
  const [counter, setCounter] = useState(4);
  const [items, setItems] = useState([]);

  const { id, name, client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const handlerAddInvoice = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);
    setCounter(counter + 1);
  };

  const handlerDeleteItem = (id) => {
    setItems(items.filter( item => item.id !== id ))
  }

  const onclickAcitveForm = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Factura</div>
          <div className="card-body">
            <InvoiceView id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <ClientView client={client} />
              </div>
              <div className="col">
                <CompanyView company={company} />
              </div>
            </div>
            <ListItemsView items={items} handlerDeleteItem={handlerDeleteItem} />
            <TotalView total={total} />
            <button className="btn btn-secondary" onClick={onclickAcitveForm}>
              {!activeForm ? "Agregar Item" : "Ocualtar Items"}
            </button>
            {!activeForm || <FormItemsView handler={handlerAddInvoice} />}
          </div>
        </div>
      </div>
    </>
  );
};
