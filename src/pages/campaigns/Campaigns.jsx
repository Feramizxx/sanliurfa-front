import React, { memo, useState } from "react";
import Campaign from "../../components/items/Campaign";
import Campaign1 from "../../assets/img/campaigns/1.png";
import Campaign2 from "../../assets/img/campaigns/2.png";
import Campaign3 from "../../assets/img/campaigns/3.png";
import Campaign4 from "../../assets/img/campaigns/4.png";
import GreeceSalad from "../../assets/img/foods/GreeceSalad.png";
import useFetchCampaigns from './../../hooks/useFetchCampaigns';
import PageLoader from './../../components/PageLoader';
import { STORAGE_BASE_URL } from "../../api/config";

const Campaigns = memo(() => {
    const { campaigns, campaignsAreLoading, campaignsError } = useFetchCampaigns();
    if (campaignsAreLoading) return <PageLoader />

    return (
        <div className={'pt-40 pb-10 px-28 bg-red lg2:px-10'}>
            {!campaignsError ?
                <div className={'flex flex-wrap justify-between items-center md:flex-col'}>
                    {campaigns.map((campaign) => {
                        return (
                            <Campaign image={STORAGE_BASE_URL + campaign.imageUrl} key={campaign.id} />
                        )
                    })}
                </div> :
                <div className="w-full h-screen flex items-center justify-center">
                    <p className="text-xl font-bold text-white"> Could not load campaigns... </p>
                </div>
            }
        </div>
    )
})

export default Campaigns;