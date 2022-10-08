import React, { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import Language from "./Language";
import { sortLanguages } from "../helpers";

const LanguagePicker = () => {
    const languageContext = useContext(LanguageContext);
    const [firstClick, setFirstClick] = React.useState(true);
    const [displayAll, setDisplayAll] = React.useState(false);
    const languages = languageContext.languages;
    const currentLanguage = languageContext.value;
    let mt = -25;

    const onClick = (language) => {
        if (firstClick) {
            setDisplayAll(true);
        } else {
            languageContext.setValue(language);
            setDisplayAll(false);
        }
        setFirstClick(!firstClick)
    }

    return (
        <ul>
            {sortLanguages(languages, currentLanguage).map((language) => {
                const isCurrent = language === currentLanguage;
                if (!isCurrent) {
                    mt += 26;
                }
                return (
                    <li key={language}>
                        <Language
                            mt={mt}
                            display={!isCurrent && displayAll}
                            isCurrent={isCurrent}
                            language={language}
                            flag={require(`../assets/img/flags/${language}-flag.png`)}
                            onClick={() => onClick(language)}
                            key={language}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default LanguagePicker;