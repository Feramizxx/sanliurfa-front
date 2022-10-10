import React, { memo, useContext } from 'react';
import Logo from "../ui/Logo";
import SocialMediaLink from "../ui/SocialMediaLink";
import AppShop from "../ui/AppShop";
import TheJavaChipLogo from "../ui/TheJavaChipLogo";
import { NavLink } from "react-router-dom";
import { scrollTop } from "../../helpers";
import { LinkContext } from "../../contexts/LinkContext";
import { getFooterTheme } from '../../helpers';
import { LanguageContext } from "../../contexts/LanguageContext";
import useFetchContactInfo from './../../hooks/useFetchContactInfo';
import PageLoader from './../PageLoader';
import useFetchSocialMediaLinks from './../../hooks/useFetchSocialMediaLinks';

const Footer = memo(() => {
    const linkContext = useContext(LinkContext);
    const { content, value } = useContext(LanguageContext);
    const theme = getFooterTheme(linkContext.value);
    const { contactInfo, isContactInfoLoading, contactInfoError } = useFetchContactInfo(value);
    const { socialMediaLinks, areSocialMediaLinksLoading, socialMediaLinksError } = useFetchSocialMediaLinks();

    const themes = {
        default: {
            bg: '#BB2025',
            text: 'white',
            logo: 'white',
            fill: 'white',
            lineColor: 'white'
        },
        white: {
            bg: 'white',
            text: 'black',
            logo: 'default',
            fill: 'black',
            lineColor: '#BB2025'
        }
    }

    const onClick = (num) => {
        scrollTop();
        linkContext.setValue(num);
    }


    return (
        <footer className={`font-Roboto`} style={{
            backgroundColor: themes[theme].bg,
            color: themes[theme].text
        }}>
            <section className='p-9 footer'>
                <div>
                    <Logo theme={themes[theme].logo} />
                    <p className='w-56 text-sm mt-3'>
                        Suspendisse vitae sollicitudin nunc velit.
                        Suspendisse ante posuere a massa. Consequat
                        hac aliquam felis netus lacus at.
                    </p>
                </div>
                <div>
                    <p className='footer-list-title'> Keçidlər </p>
                    <ul>
                        <li className='footer-list-item'> <NavLink to={'/'} onClick={() => onClick(1)}> {content.links.home} </NavLink> </li>
                        <li className='footer-list-item'> <NavLink to={'menu'} onClick={() => onClick(3)}> {content.links.menu} </NavLink> </li>
                        <li className='footer-list-item'> <NavLink to={'campaigns'} onClick={() => onClick(4)}> {content.links.campaigns} </NavLink> </li>
                        <li className='footer-list-item'> <NavLink to={'contact'} onClick={() => onClick(7)}> {content.links.contact} </NavLink> </li>
                    </ul>
                </div>
                <div>
                    <p className='footer-list-title'> Əlaqə </p>
                    {!contactInfoError ?
                        <>
                            {isContactInfoLoading ||
                                <ul>
                                    <li className='footer-list-item'> <a href={`tel:${contactInfo.contacts.mobile || '#'}`}> {contactInfo.contacts.mobile || "Mobile number is not provided..."} </a> </li>
                                    <li className='footer-list-item'> <a href={`mailto:${contactInfo.contacts.email} || '#'`}> {contactInfo.contacts.email || "Email is not provided..."} </a> </li>
                                    <li className='footer-list-item'> {contactInfo.contacts.address || 'Address is not provided...'} </li>
                                </ul>
                            }
                        </> :
                        <p className='footer-list-item'> `Could not load contact info...` </p>
                    }
                </div>
                <div>
                    <p className='footer-list-title mb-2'> Social Media </p>
                    <p className='max-w-96 text-sm'> Be the first one to know  about discounts, offers, news, giveaways and events </p>
                    {!socialMediaLinksError ?
                        <>
                            {areSocialMediaLinksLoading ||
                                <div className='flex my-4'>
                                    <SocialMediaLink className={'mr-2'} href={socialMediaLinks.find((link) => link.name === 'facebook').url || '#'} theme={theme}>
                                        <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.04074 15.2138V7.93153H0.535156V5.42192H2.04074V3.91516C2.04074 1.86782 2.89088 0.650391 5.30624 0.650391H7.3171V3.16029H6.06017C5.11993 3.16029 5.05773 3.51101 5.05773 4.16555L5.05431 5.42164H7.33133L7.06489 7.93125H5.05431V15.2138H2.04074Z" fill={themes[theme].fill} />
                                        </svg>
                                    </SocialMediaLink>
                                    <SocialMediaLink className={'mr-2'} href={socialMediaLinks.find((link) => link.name === 'linkedin').url || '#'} theme={theme}>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.99078 14.2429H0.078125V5.50488H2.99078V14.2429V14.2429Z" fill={themes[theme].fill} />
                                            <path d="M1.52579 3.56311H1.50925C0.640047 3.56311 0.078125 2.91554 0.078125 2.10625C0.078125 1.27984 0.657162 0.650391 1.54286 0.650391C2.42855 0.650391 2.97398 1.27984 2.99078 2.10625C2.99078 2.91554 2.42855 3.56311 1.52579 3.56311V3.56311Z" fill={themes[theme].fill} />
                                            <path d="M13.6715 14.2426H10.8093V9.67518C10.8093 8.52794 10.3952 7.74509 9.35903 7.74509C8.56828 7.74509 8.09728 8.27284 7.89042 8.78258C7.81474 8.96526 7.79616 9.21979 7.79616 9.47494V14.2429H4.93359C4.93359 14.2429 4.97132 6.50668 4.93359 5.70558H7.79616V6.91482C8.17605 6.33351 8.85642 5.50488 10.3761 5.50488C12.2595 5.50488 13.6716 6.72534 13.6716 9.34762L13.6715 14.2426V14.2426Z" fill={themes[theme].fill} />
                                        </svg>
                                    </SocialMediaLink>
                                    <SocialMediaLink href={socialMediaLinks.find((link) => link.name === 'instagram').url || '#'} theme={theme}>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.11719 1.5H10.6172V0.5H4.11719V1.5ZM1.36719 4.25C1.36719 2.73822 2.60593 1.5 4.11719 1.5V0.5C2.05377 0.5 0.367188 2.1858 0.367188 4.25H1.36719ZM1.36719 10.75V4.25H0.367188V10.75H1.36719ZM4.11719 13.5C2.60599 13.5 1.36719 12.2612 1.36719 10.75H0.367188C0.367188 12.8135 2.05371 14.5 4.11719 14.5V13.5ZM10.6172 13.5H4.11719V14.5H10.6172V13.5ZM13.3672 10.75C13.3672 12.2612 12.1284 13.5 10.6172 13.5V14.5C12.6807 14.5 14.3672 12.8135 14.3672 10.75H13.3672ZM13.3672 4.25V10.75H14.3672V4.25H13.3672ZM10.6172 1.5C12.1284 1.5 13.3672 2.73822 13.3672 4.25H14.3672C14.3672 2.1858 12.6806 0.5 10.6172 0.5V1.5ZM4.16016 7.49989C4.16016 9.27132 5.59639 10.7081 7.36854 10.7081V9.70812C6.14875 9.70812 5.16016 8.71911 5.16016 7.49989H4.16016ZM7.36854 4.2915C5.59643 4.2915 4.16016 5.72777 4.16016 7.49989H5.16016C5.16016 6.28006 6.14871 5.2915 7.36854 5.2915V4.2915ZM10.5769 7.49989C10.5769 5.7277 9.13993 4.2915 7.36854 4.2915V5.2915C8.5878 5.2915 9.57693 6.28014 9.57693 7.49989H10.5769ZM7.36854 10.7081C9.13997 10.7081 10.5769 9.2714 10.5769 7.49989H9.57693C9.57693 8.71904 8.58777 9.70812 7.36854 9.70812V10.7081ZM10.8867 4.2915C10.7139 4.2915 10.5742 4.15172 10.5742 3.979H9.57422C9.57422 4.70361 10.1612 5.2915 10.8867 5.2915V4.2915ZM11.1992 3.979C11.1992 4.15172 11.0595 4.2915 10.8867 4.2915V5.2915C11.6122 5.2915 12.1992 4.70361 12.1992 3.979H11.1992ZM10.8867 3.6665C11.0595 3.6665 11.1992 3.80629 11.1992 3.979H12.1992C12.1992 3.25439 11.6122 2.6665 10.8867 2.6665V3.6665ZM10.5742 3.979C10.5742 3.80629 10.7139 3.6665 10.8867 3.6665V2.6665C10.1612 2.6665 9.57422 3.25439 9.57422 3.979H10.5742Z" fill={themes[theme].fill} />
                                        </svg>
                                    </SocialMediaLink>
                                </div>
                            }
                        </> : <p className='footer-list-item'> Could not load social media links... </p>
                    }
                    <div className='flex'>
                        <AppShop
                            className={'mr-4'}
                            href={'#'}
                            logo={require('../../assets/img/apple.png')}
                            theme={'white'}
                            name={'App Store'}
                            description={'Download on the'}
                            isBordered={theme === 'white'}
                        />
                        <AppShop
                            href={'#'}
                            logo={require('../../assets/img/google-play.png')}
                            theme={'black'}
                            name={'Google Play'}
                            description={'Get it on'}
                        />
                    </div>
                </div>
            </section>
            <hr className='border-none h-[1px] opacity-20' style={{ backgroundColor: themes[theme].lineColor }} />
            <section className={'p-4 min-sm:flex justify-around items-center'}>
                <p className={'text-sm font-normal'}> © 2022 Sanliurfa MMC. All Rights Reserved. </p>
                <div className={'flex items-center'}>
                    <p className={'font-normal text-sm mr-6'}> Designed by: </p>
                    <TheJavaChipLogo className='w-[167px] h-[56px]' />
                </div>
            </section>
        </footer >
    );
});

export default Footer;