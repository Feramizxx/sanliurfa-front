import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { getContactInfo } from './../api/getContactInfo';

const useFetchContactInfo = (lang = 'en') => {
    const [contactInfo, setContactInfo] = useState({});
    const [fetchContactInfo, isContactInfoLoading, contactInfoError] = useFetch(async () => {
        const data = await getContactInfo(lang);
        setContactInfo(data);
    });

    useEffect(() => {
        fetchContactInfo();
    }, [])

    return { contactInfo, isContactInfoLoading, contactInfoError };
}

export default useFetchContactInfo;