import { Navigate, useParams } from "react-router";
import useFetchOrder from "../../hooks/useFetchOrder";
import { AxiosError } from "axios";
import PageLoader from "../../components/PageLoader";
import SeeAlso from "../cart/SeeAlso";
import Card from "../cart/Card";
import { OrderHeader } from "../../components/ui/meal/OrderItems";
import useFetchAddress from "../../hooks/useFetchAddress";
import Button from '../../components/ui/Button';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const SingleOrder = () => {
    const { id } = useParams();
    if (id) {
        if (Number.isNaN(Number(id))) {
            return <Navigate to='/' />
        }
    }

    const { order, isOrderLoading, orderError } = useFetchOrder(id);
    if (isOrderLoading) return <PageLoader />

    if (orderError && orderError instanceof AxiosError) {
        if (orderError.code === 404) {
            return <Navigate to='/' />
        }
    }

    return (
        <div className="pt-40 flex justify-center">
            <div>
                <h2 className="text-red font-bold text-[30px] ml-12 my-6"> Sifarişin detalları </h2>
                <div className="w-full flex items-center flex-col">
                    <SingleOrderHeader
                        addressId={order.cart.addressId}
                        isDelivered={order.isDelivered}
                        price={order.cart.totalPrice}
                        createdAt={order.createdAt}
                    />
                    <div className={'py-20 px-48 sm:px-10'}>
                        {order.cart.items.map((item, index) =>
                            <Card
                                meal={item.meal}
                                index={index + 1}
                                price={item.price}
                                amount={item.amount}
                                key={index}
                                clickable={false}
                            />
                        )}
                    </div>
                    <SingleOrderFooter cart={order.cart} />
                </div>
                <h2 className="text-red font-bold text-[30px] ml-12 my-6"> Həmçinin bax </h2>
                <SeeAlso />
            </div>
        </div>
    );
}


const SingleOrderHeader = ({ addressId, price, createdAt, isDelivered }) => {
    const { address, isAddressLoading, addressError } = useFetchAddress(addressId);
    if (isAddressLoading) return <></>

    return (
        <div className="w-screen max-w-[800px]">
            {!addressError && <OrderHeader
                address={address}
                price={price}
                createdAt={createdAt}
                isDelivered={isDelivered}
            />}
        </div>
    );
}

const SingleOrderFooter = ({ cart }) => {
    const { orderAgain } = useContext(CartContext);

    return (
        <div className="w-screen max-w-[1400px]">
            <hr
                style={{
                    border: '0.5px solid rgba(0, 0, 0, 0.5)'
                }}
            />
            <div>
                <div className="p-6">
                    <div className="flex justify-between text-xl font-semibold my-6">
                        <span> Çatdırılma </span>
                        <span> Ödənişsiz </span>
                    </div>
                    <div className="flex justify-between text-[2rem] font-semibold">
                        <span> Ümumi məbləğ </span>
                        <span className="text-red"> {cart.totalPrice}₼ </span>
                    </div>
                </div>
                <div className="flex justify-end pt-12 pr-12">
                    <Button
                        theme='default'
                        className='py-2 px-12 rounded-full font-medium'
                        onClick={() => orderAgain(cart)}
                    >
                        Yenidən sifariş et
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder;