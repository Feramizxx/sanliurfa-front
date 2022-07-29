import React from 'react';
import Language from "./Language";

const LanguagePicker = () => {
    const [isCurrent, setIsCurrent] = React.useState(true);
    const [isVisible, setIsVisible] = React.useState({
        aze: true,
        eng: false
    });
    const [underFirstClick, setUnderFirstClick] = React.useState(true);

    const onClick = (currentState) => {
        if (underFirstClick) {
            setIsVisible({
                aze: true,
                eng: true
            });
        } else {
            setIsCurrent(currentState);
            setIsVisible({
                aze: currentState,
                eng: !currentState
            })
        }
        setUnderFirstClick(!underFirstClick);
    }

    return (
        <div>
            {isCurrent?
                <>
                    <Language isCurrent={isCurrent} language={'aze'} isVisible={isVisible.aze} onClick={() => onClick(true)}/>
                    <Language isCurrent={!isCurrent} language={'en'} isVisible={isVisible.eng} onClick={() => onClick(false)}/>
                </> :
                <>
                    <Language isCurrent={!isCurrent} language={'en'} isVisible={isVisible.eng} onClick={() => onClick(false)}/>
                    <Language isCurrent={isCurrent} language={'aze'} isVisible={isVisible.aze} onClick={() => onClick(true)}/>
                </>
            }
        </div>
    );
};

export default LanguagePicker;