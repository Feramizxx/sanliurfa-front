import { useState } from 'react';

const useHover = () => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    }

    const onMouseLeave = () => {
        setHover(false);
    }

    return [hover, onMouseEnter, onMouseLeave];
}

export default useHover;