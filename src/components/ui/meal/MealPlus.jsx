import React, {useState} from "react";
import Plus from "../../../assets/icons/buttons/plus.svg";
import MealModal from "../../items/MealModal";

const MealPlus = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className={'bg-red rounded-tl-[26px] rounded-br-[26px] cursor-pointer px-7 py-3'} onClick={openModal}>
                <img src={Plus}/>
            </div>
            <MealModal modalIsOpen={modalIsOpen} closeModal={closeModal} amount={props.amount} price={props.price} name={props.name} taste={props.taste} />
        </>
    )
}

export default MealPlus;