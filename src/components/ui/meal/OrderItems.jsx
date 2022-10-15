import React from "react";
import { ReactComponent as Done } from '../../../assets/icons/done.svg';
import useFetchOrders from "../../../hooks/useFetchOrders";
import PageLoader from '../../PageLoader';
import useFetchAddress from "../../../hooks/useFetchAddress";
import { fixDate } from "../../../pages/career/Vacancy";

const OrderItems = () => {
  const { orders, ordersAreLoading, ordersError } = useFetchOrders();
  if (ordersAreLoading) return <PageLoader />

  return (
    <div>
      {ordersError ?
        <p className="text-red font-bold text-xl text-center"> Hələ heç bir sifariş verməmisiniz </p> :
        <div>
          {orders.map((order) => {
            return <Order key={order.id} order={order} />
          })}
        </div>
      }
    </div>
  );
};

export const Order = ({ order }) => {
  const { address, addressError, isAddressLoading } = useFetchAddress(order.cart.addressId);
  if (isAddressLoading) return <></>

  return (
    <>
      {!addressError &&
        <div div className=" mt-[50px] mb-[40px] relative mr-auto ml-auto Orders w-[80%]" >
          <OrderHeader price={order.cart.totalPrice} createdAt={order.createdAt} address={address} isDelivered={order.isDelivered} />
          <div className="flex p-5 justify-between lg:flex-col items-center">
            <div className="flex lg:flex-col items-center">
              <div className="flex w-[150px]">
                {order.cart.items.map((item) => {
                  const image = item.meal.image;
                  return (
                    <img
                      key={item.itemId}
                      className="w-[81px] h-[81px] border-white object-cover object-center border-solid border-2  rounded-[14px]"
                      src={image}
                    />
                  )
                })}
              </div>
              <div className="sm:flex sm:flex-col lg:mt-2">
                {order.cart.items.map((item) => {
                  return (
                    <span key={item.itemId} className="ml-5"> {item.meal.name}(x{item.amount}) </span>
                  )
                })}
              </div>
            </div>
            <div className="lg:mt-2">
              <button className="bg-red px-[60px] py-2 rounded-[40px] text-white">
                Ətraflı
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export const OrderHeader = ({ createdAt, address, price, isDelivered }) => {
  return (
    <div className="flex p-6 justify-between">
      <div className="flex justify-between w-[550px] lg:flex-col">
        <div>
          <p> Sifariş tarixi: </p>
          <p className="opacity-50 text-[12px]"> {fixDate(createdAt)} </p>
        </div>
        <div>
          <p> Ünvan: </p>
          <p className="opacity-50 text-[12px]"> {address.avenue} {address.building} </p>
        </div>
        <div>
          <p> Qiymət: </p>
          <p className="opacity-50 text-[12px]"> {price}₼ </p>
        </div>
      </div>
      <div className="text-end  ">
        <p className="flex text-red">
          {isDelivered &&
            <>
              <Done /> Çatdırıldı
            </>
          }
        </p>
      </div>
      <hr className="w-[96%] absolute top-[80px] lg:top-[155px]" />
    </div >
  )
}

export default OrderItems;
