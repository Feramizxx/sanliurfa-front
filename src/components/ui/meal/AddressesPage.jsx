import { useContext, useState } from "react";
import AdressItem from "./AdressItem";
import "../../../assets/styles/adress.css";
import Button from './../Button';
import useFetchAddresses from './../../../hooks/useFetchAddresses';
import { AuthContext } from './../../../contexts/AuthContext';
import PageLoader from './../../PageLoader';
import { createAddress } from './../../../api/createAddress';
import AddressesForm from "../../AddressesForm";

const AddressesPage = () => {
  const { token } = useContext(AuthContext);
  const { addresses, addressesAreLoading, addressesError, setAddresses } = useFetchAddresses(token);
  const [form, setForm] = useState(false);

  if (addressesAreLoading) return <PageLoader />

  return (
    <div className="pt-[180px] pb-20">
      <div className="relative w-[95%] mr-auto ml-auto justify-between flex flex-row md:flex-col items-center mb-10 ">
        <h1 className="text-[32px] md:mb-1 text-red"> Ünvanlarım </h1>
        <Button
          theme={'default'}
          className="py-2 px-4 rounded-2xl"
          onClick={() => setForm(true)}
        >
          + Yeni ünvan
        </Button>
      </div>

      {!form && addresses.length === 0 &&
        <div className="flex items-center justify-center w-full h-[50vh] bg-white font-bold text-red text-xl">
          Heç bir ünvan tapılmadı...
        </div>
      }

      {form &&
        <AddressesForm
          update={false}
          onClose={() => setForm(false)}
          callback={async (token, data) => {
            const address = await createAddress(token, data);
            setAddresses(prev => [...prev, address]);
          }}
        />
      }

      {Array.isArray(addresses) && addresses.length !== 0 &&
        addresses.map((address) =>
          <AdressItem
            address={address}
            key={address.id}
            setAddresses={setAddresses}
          />
        )
      }
    </div>
  );
};


export const validateNumber = (e, setValue) => {
  const value = parseInt(e.target.value);
  if (!Number.isNaN(value)) {
    setValue(value)
  }
}

export default AddressesPage;