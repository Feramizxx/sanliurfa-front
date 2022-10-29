import React, { useState } from "react";
import { roundPrice } from "../../../helpers";

const Checkbox = ({ name, price, setSelectedAdditions, setTotalPrice, productId }) => {
    const [checked, setChecked] = useState(false);
    const validatedPrice = (price ? price : 0);

    const addAddition = (addition) => {
        setSelectedAdditions(prev => [...prev, addition]);
        setTotalPrice(prev => roundPrice(prev + validatedPrice));
    }

    const removeAddition = (addition) => {
        setSelectedAdditions(prev => prev.filter(item => item.name !== addition.name));
        setTotalPrice(prev => roundPrice(prev - validatedPrice));
    }

    const onClick = () => {
        const addition = {
            name,
            productId,
            amount: 1,
            price
        }

        if (checked) {
            removeAddition(addition);
        } else {
            addAddition(addition);
        }
        setChecked(!checked);
    }



    return (
        <div className={'mr-3 mb-5 max-w-fit'}>
            <input type={'checkbox'} name={'additions'} className={'hidden'} id={name} onClick={onClick} />
            <label htmlFor={name} className={`px-4 py-2 rounded-full text-[13px] relative group hover:bg-red hover:text-white
                                                  ${checked ? 'bg-red text-white' : 'bg-[#F1F1F1] lg2:hover:!bg-[#F1F1F1] lg2:hover:!text-black'}`}>
                <span className={`${price ? 'group-hover:invisible lg2:group-hover:visible' : ''}`}>
                    {name === 'Vegeterian' && <span>&#x1f331;</span>} {name}
                </span>
                {price && (
                    <span className={`absolute text-white top-0 left-0 w-full h-full text-center hidden translate-y-1.5 group-hover:block lg2:group-hover:hidden`}>
                        {price}
                    </span>
                )}
            </label>
        </div>
    )
}

export default Checkbox;