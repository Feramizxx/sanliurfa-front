import { useContext, useEffect } from "react";
import { LinkContext } from "../contexts/LinkContext";

const useResetLink = () => {
    const { setValue } = useContext(LinkContext)

    useEffect(() => {
        setValue(0);
    }, [])

    return {};
}

export default useResetLink;