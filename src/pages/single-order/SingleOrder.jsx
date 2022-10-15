import { Navigate, useParams } from "react-router";
import useFetchOrder from "../../hooks/useFetchOrder";
import { AxiosError } from "axios";
import PageLoader from "../../components/PageLoader";
import SeeAlso from "../cart/SeeAlso";
import Card from "../cart/Card";

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
        <div className="pt-40">
            <h2 className="text-red font-bold text-[30px] ml-12 my-6"> Sifarişin detalları </h2>
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
            <h2 className="text-red font-bold text-[30px] ml-12 my-6"> Həmçinin bax </h2>
            <SeeAlso />
        </div>
    );
}

export default SingleOrder;