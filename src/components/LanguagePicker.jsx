import React from 'react';
import Language from "./Language";

const LanguagePicker = () => {
    const _isCurrent = localStorage.getItem('isCurrent');
    const [isCurrent, setIsCurrent] = React.useState(_isCurrent !== undefined? _isCurrent === 'true' : true);
    const [isVisible, setIsVisible] = React.useState({
        aze: isCurrent,
        eng: !isCurrent
    });
    const [underFirstClick, setUnderFirstClick] = React.useState(true);

    window.onbeforeunload = () => {
        localStorage.setItem('isCurrent',String(isCurrent));
    }

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
            });
        }
        setUnderFirstClick(!underFirstClick)
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