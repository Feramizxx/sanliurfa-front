import AuthContextProvider from "./AuthContext"
import LinkContextProvider from "./LinkContext";
import CartContextProvider from "./CartContext"
import LanguageContextProvider from "./LanguageContext";
import SearchContextProvider from './SearchContext';

const GlobalContextProvider = ({ children }) => {
    return (
        <AuthContextProvider>
            <LinkContextProvider>
                <CartContextProvider>
                    <LanguageContextProvider>
                        <SearchContextProvider>
                            {children}
                        </SearchContextProvider>
                    </LanguageContextProvider >
                </CartContextProvider >
            </LinkContextProvider >
        </AuthContextProvider >
    );
}

export default GlobalContextProvider;