import { cities, districts } from "../assets/storage/addresses";
import { rewriteEmpty } from "./ui/Profile";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { validateNumber } from "./ui/meal/AddressesPage";
import Button from "./ui/Button";
import useResetLink from './../hooks/useResetLink';

export const convertIfNotEmptyToNumber = (value) => {
    return value ? Number(value) : undefined;
}

const AddressesForm = ({ onClose, callback, update }) => {
    const [city, setCity] = useState(cities[0]);
    const [district, setDistrict] = useState(districts[0]);
    const [title, setTitle] = useState('');
    const [avenue, setAvenue] = useState('');
    const [building, setBuilding] = useState('');
    const [block, setBlock] = useState('');
    const [floor, setFloor] = useState('');
    const [flat, setFlat] = useState('');
    const [description, setDescription] = useState('');
    const { token } = useContext(AuthContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        const rightAvenu = rewriteEmpty(avenue);
        const rightBuilding = rewriteEmpty(building);
        const rightFloor = rewriteEmpty(floor);
        const rightFlat = rewriteEmpty(flat);
        const rightBlock = rewriteEmpty(block);
        const rightDescription = rewriteEmpty(description);
        const rightTitle = rewriteEmpty(title);

        const data = {
            city, district,
            avenue: rightAvenu,
            building: convertIfNotEmptyToNumber(building),
            floor: convertIfNotEmptyToNumber(floor),
            flat: convertIfNotEmptyToNumber(flat),
            block: rightBlock,
            description: rightDescription,
            title: rightTitle
        }

        try {
            await callback(token, data);
            onClose();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className="flex py-2 adresses-container w-fit mr-auto ml-auto flex-col  ">
            <div className="flex  w-[92%] ml-auto mr-auto justify-between  ">
                <p className="text-red font-semibold text-[32px]"> Yeni Ünvan </p>
                <Button
                    theme={'default'}
                    onClick={() => onClose()}
                    className="h-[30px] w-[30px] rounded-full"
                > X </Button>
            </div>
            <form onSubmit={onSubmit} className={" py-10  px-10"}>
                <div className={"flex justify-between mb-7"}>
                    <select
                        required={!update}
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        className={"cart-input font-extralight"}
                    >
                        {cities.map((city, index) => <option value={city} key={index}> {city} </option>)}
                    </select>
                    <select
                        required={!update}
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className={"cart-input font-extralight"}
                    >
                        {districts.map((district, index) => <option value={district} key={index}>{district}</option>)}
                    </select>
                </div>
                <div className={"flex justify-between mb-7"}>
                    <input
                        required={!update}
                        value={avenue}
                        onChange={(e) => setAvenue(e.target.value)}
                        className={"cart-input"}
                        placeholder={"Küçə"}
                    />
                    <input
                        required={!update}
                        value={flat}
                        onChange={(e) => { validateNumber(e, setFlat) }}
                        className={"cart-input"}
                        placeholder={"Mənzil"}
                    />
                </div>
                <div className={"flex justify-between mb-7"}>
                    <div className={"flex justify-between w-[47%]"}>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={"cart-input"}
                            placeholder={"Başliq"}
                        />
                        <input
                            required={!update}
                            value={building}
                            onChange={(e) => { validateNumber(e, setBuilding) }}
                            className={"cart-input"}
                            placeholder={"Bina"}
                        />
                    </div>
                    <div className={"flex justify-between w-[47%]"}>
                        <input
                            required={!update}
                            value={block}
                            onChange={(e) => setBlock(e.target.value)}
                            className={"cart-input"}
                            placeholder={"Blok"}
                        />
                        <input
                            required={!update}
                            value={floor}
                            onChange={(e) => { validateNumber(e, setFloor) }}
                            className={"cart-input"}
                            placeholder={"Mərtəbə"}
                        />
                    </div>
                </div>
                <div className={"mb-7"}>
                    <textarea
                        className={"cart-input w-full"}
                        rows={6}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={"Qeyd"}
                    ></textarea>
                </div>
                <div className={"flex justify-end"}>
                    <button
                        className={
                            "bg-red py-4 px-32 rounded-full text-white text-2xl font-light"
                        }
                    >
                        Yadda Saxla
                    </button>
                </div>
            </form >
        </div >
    );
}

export default AddressesForm;