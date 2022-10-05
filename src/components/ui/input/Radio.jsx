import { useState } from "react";

const Radio = ({ size, label, onClick }) => {
    const [checked, setChecked] = useState(false);

    const onCheck = () => {
        setChecked(!checked);
    }

    return (
        <div onClick={onClick} className={'flex mr-10 items-center gap-1'}>
            <div
                className={`mr-1 accent-red h-[10px] w-[10px] rounded-full border-2 border-gray-200 p-1 ${checked ? 'bg-red' : 'bg-none'}`}
                onClick={onCheck}
            />
            <label htmlFor={size}>{label}</label>
        </div>
    )
}

export default Radio