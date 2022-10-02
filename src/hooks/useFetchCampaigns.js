import { useState } from 'react';
import useFetch from './useFetch';
import { getCampaigns } from './../api/getCampaigns';
import { useEffect } from 'react';

const useFetchCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [fetchCampaigns, campaignsAreLoading, campaignsError] = useFetch(async () => {
        const data = await getCampaigns();
        setCampaigns(data);
    })

    useEffect(() => {
        fetchCampaigns();
    }, [])

    return { campaigns, campaignsAreLoading, campaignsError };
}

export default useFetchCampaigns;