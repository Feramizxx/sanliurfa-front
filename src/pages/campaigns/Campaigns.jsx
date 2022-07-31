import React, {memo, useState} from "react";
import Campaign from "../../components/items/Campaign";
import Campaign1 from "../../assets/img/campaigns/1.png";
import Campaign2 from "../../assets/img/campaigns/2.png";
import Campaign3 from "../../assets/img/campaigns/3.png";
import Campaign4 from "../../assets/img/campaigns/4.png";
import GreeceSalad from "../../assets/img/foods/GreeceSalad.png";

const Campaigns = memo(() => {
    const [campaigns] = useState([
        Campaign1, Campaign2, Campaign3, Campaign4, Campaign1, Campaign2, Campaign3, GreeceSalad
    ]);

    return (
        <div className={'pt-40 pb-10 px-28 bg-red'}>
            <div className={'flex flex-wrap justify-between items-center'}>
                {campaigns.map((campaign, i) => {
                    return (
                        <Campaign image={campaign} key={i} />
                    )
                })}
            </div>
        </div>
    )
})

export default Campaigns;