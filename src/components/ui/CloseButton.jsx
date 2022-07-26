import React from "react";
import CloseIconBlack from "../../assets/icons/buttons/closeIconBlack.svg";
import CloseIconWhite from "../../assets/icons/buttons/closeIconWhite.svg";

const CloseButton = (props) => {
    return (
        <div className={'absolute top-0 right-0 -translate-x-6 translate-y-6 cursor-pointer'} onClick={props.close}>
            <div className={`rounded-full bg-white w-8 h-8 relative ${props.theme === 'red' ? 'bg-red' : ''}`}>
                <img src={props.theme === 'red' ? CloseIconWhite : CloseIconBlack}
                     className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}/>
            </div>
        </div>
    )
}

// =======
// import React from 'react';
//
// const CloseButton = ({theme, onClick}) => {
//     const themes = {
//         default: {
//             circle: '#BB2025',
//             x: 'white'
//         },
//         white: {
//             circle: 'white',
//             x: '#BB2025'
//         }
//     }
//
//     return (
//         <svg onClick={onClick} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="16" cy="16" r="16" fill={themes[theme].circle}/>
//             <path d="M20.9258 10.194L16.0006 15.1197L11.0754 10.194C10.957 10.0856 10.8013 10.027 10.6407 10.0306C10.4802 10.0342 10.3272 10.0995 10.2137 10.2131C10.1001 10.3266 10.0348 10.4796 10.0312 10.6402C10.0277 10.8007 10.0862 10.9564 10.1946 11.0749L15.1173 16.0006L10.1933 20.9251C10.1332 20.9824 10.0851 21.0512 10.0519 21.1274C10.0187 21.2036 10.0011 21.2857 10 21.3688C9.99902 21.4519 10.0146 21.5343 10.0459 21.6113C10.0772 21.6883 10.1236 21.7583 10.1823 21.8171C10.241 21.8759 10.3109 21.9223 10.3878 21.9538C10.4648 21.9852 10.5472 22.0009 10.6303 22C10.7134 21.9991 10.7955 21.9815 10.8717 21.9484C10.9479 21.9154 11.0168 21.8674 11.0742 21.8073L16.0006 16.8828L20.9258 21.8085C21.0443 21.9169 21.2 21.9755 21.3605 21.9719C21.5211 21.9683 21.674 21.903 21.7876 21.7894C21.9011 21.6759 21.9665 21.5229 21.97 21.3623C21.9736 21.2018 21.9151 21.0461 21.8067 20.9276L16.8815 16.0019L21.8067 11.0749C21.8668 11.0176 21.9149 10.9488 21.9481 10.8726C21.9813 10.7964 21.9989 10.7143 22 10.6312C22.001 10.5481 21.9854 10.4657 21.9541 10.3887C21.9228 10.3117 21.8764 10.2417 21.8177 10.1829C21.759 10.1241 21.6891 10.0777 21.6122 10.0462C21.5352 10.0148 21.4528 9.99913 21.3697 10C21.2866 10.0009 21.2045 10.0185 21.1283 10.0516C21.0521 10.0846 20.9832 10.1326 20.9258 10.1927V10.194Z" fill={themes[theme].x}/>
//         </svg>
//     );
// };
// >>>>>>> 82d0e28da332a7b233e461f565ac7b749822bbaa

export default CloseButton;