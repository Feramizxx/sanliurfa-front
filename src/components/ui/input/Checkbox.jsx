import React, {useState} from "react";

const Checkbox = (props) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className={'mr-3 mb-5 max-w-fit'}>
            <input type={'checkbox'} name={'additions'} className={'hidden'} id={props.name} onChange={() => {setChecked(!checked)}} />
            <label htmlFor={props.name} className={`px-4 py-2 rounded-full text-[13px] relative group hover:bg-red hover:text-white
                                                  ${checked ? 'bg-red text-white' : 'bg-[#F1F1F1] lg2:hover:!bg-[#F1F1F1] lg2:hover:!text-black'}`}>
                <span className={`${props.price ? 'group-hover:invisible lg2:group-hover:visible' : ''}`}>
                    {props.name === 'Vegeterian' && <span>&#x1f331;</span>} {props.name}
                </span>
                {props.price && (
                    <span className={`absolute text-white top-0 left-0 w-full h-full text-center hidden translate-y-1.5 group-hover:block lg2:group-hover:hidden`}>
                        {props.price}
                    </span>
                )}
            </label>
        </div>
    )
}

export default Checkbox;