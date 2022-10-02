import { useState, useEffect } from 'react';
import { getSocialMediaLinks } from '../api/getSocialMediaLinks';
import useFetch from './useFetch';

const useFetchSocialMediaLinks = () => {
    const [socialMediaLinks, setSocialMediaLinks] = useState([])
    const [fetchSocialMediaLinks, areSocialMediaLinksLoading, socialMediaLinksError] = useFetch(async () => {
        const data = await getSocialMediaLinks();
        setSocialMediaLinks(data);
    });

    useEffect(() => {
        fetchSocialMediaLinks();
    }, [])

    return { socialMediaLinks, areSocialMediaLinksLoading, socialMediaLinksError };
}

export default useFetchSocialMediaLinks;