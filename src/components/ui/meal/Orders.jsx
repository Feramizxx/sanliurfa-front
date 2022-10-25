import React from "react";
import "../../../assets/styles/order.css";
import OrderItems from "./OrderItems";
import useResetLink from "../../../hooks/useResetLink";
import { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";

const Orders = () => {
  const { content } = useContext(LanguageContext);
  useResetLink();

  return (
    <div className="pb-12">
      <h1 className="ml-[40px] pt-[170px] text-[32px] text-red"> {content.titles.orders} </h1>
      <OrderItems />
    </div>
  );
};

export default Orders;
