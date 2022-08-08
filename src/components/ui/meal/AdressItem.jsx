import React,{useEffect} from "react";

const AdressItem = (props) => {

  return (
    <div className="adresses-container mb-10 w-[85%] mr-auto ml-auto px-10 py-5 flex  flex-col ">
      <div className="flex justify-between  mb-2">
        <h3 className="font-semibold">{props.title}</h3>
        <p className="flex items-center">
          <svg
            className="mr-2"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1995 0.800001C12.9909 0.591335 12.7431 0.42581 12.4705 0.312879C12.1979 0.199948 11.9057 0.141823 11.6106 0.141823C11.3156 0.141823 11.0234 0.199948 10.7507 0.312879C10.4781 0.42581 10.2304 0.591335 10.0218 0.800001L1.57207 9.24972C1.32064 9.50114 1.13778 9.81314 1.04235 10.156L0.158352 13.3131C0.137927 13.3863 0.137327 13.4636 0.156613 13.5371C0.175898 13.6106 0.214376 13.6777 0.268104 13.7314C0.321832 13.7851 0.388877 13.8236 0.462371 13.8429C0.535866 13.8622 0.613166 13.8616 0.686352 13.8411L3.84292 12.9571C4.18574 12.8612 4.49807 12.6786 4.74978 12.4269L13.1995 3.97714C13.6207 3.55579 13.8574 2.98438 13.8574 2.38857C13.8574 1.79277 13.6207 1.22135 13.1995 0.800001ZM10.6281 1.40572C10.8887 1.14512 11.2422 0.998751 11.6108 0.998805C11.9794 0.998858 12.3329 1.14533 12.5935 1.406C12.8541 1.66667 13.0005 2.02019 13.0004 2.38877C13.0004 2.75736 12.8539 3.11084 12.5932 3.37143L11.7132 4.25086L9.74806 2.28514L10.6281 1.40572ZM9.14235 2.89143L11.1081 4.85714L4.14349 11.8211C3.99598 11.9687 3.81296 12.0757 3.61207 12.132L1.18864 12.8103L1.86692 10.3874C1.92329 10.1866 2.03033 10.0036 2.17778 9.856L9.14235 2.89143Z"
              fill="black"
            />
          </svg>
          <span>
            Düzəliş et
            <hr className="text-black" />
          </span>
        </p>
      </div>
      <hr className="text-black" />
      <div className="flex justify-between md:flex-col mt-4 w-[100%]">
        <div className="flex flex-col">
          <span></span>
          <span>Şəhər: {props.city}</span>
          <span>Rayon: {props.adress}</span>
          <span>Küçə: {props.street}</span>
        </div>
        <div className="flex flex-col">
          <span>Bina: {props.building}</span>
          <span>Mərtəbə: {props.floor}</span>
          <span>Blok: {props.blok}</span>
        </div>
        <div className="text-red flex items-end">
          <button value={props.id} onClick={props.removeAdress}>
            Sil
            <hr />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdressItem;
