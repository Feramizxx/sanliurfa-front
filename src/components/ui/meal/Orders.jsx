import React from "react";
import "../../../assets/styles/order.css";
import img from "../../../assets/img/Children.png";
import OrderItems from "./OrderItems";
import useResetLink from "../../../hooks/useResetLink";

const Orders = () => {
  useResetLink();

  return (
    <>
      <div className="pb-12">
        <h1 className="ml-[40px] pt-[170px] text-[32px] text-red">Sifarişlərim</h1>
        <OrderItems />
      </div>

    </>
  );
};

export default Orders;
