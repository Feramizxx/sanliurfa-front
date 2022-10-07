import AuthContextProvider from "./AuthContext"
import LinkContextProvider from "./LinkContext";
import CartContextProvider from "./CartContext"
import LanguageContextProvider from "./LanguageContext";

const GlobalContextProvider = ({ children }) => {
    return (
        <AuthContextProvider>
            <LinkContextProvider>
                <CartContextProvider>
                    <LanguageContextProvider>
                        {children}
                    </LanguageContextProvider >
                </CartContextProvider >
            </LinkContextProvider >
        </AuthContextProvider >
    );
}

export default GlobalContextProvider;