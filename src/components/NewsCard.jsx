import { useNavigate } from "react-router";
import { STORAGE_BASE_URL } from "../api/config";
import useHover from './../hooks/useHover';

const NewsCard = ({ img, title, id }) => {
    const navigate = useNavigate();
    const [hover, onMouseEnter, onMouseLeave] = useHover();

    const onClick = () => {
        navigate(`/inline-news/${id}`);
    }

    return (
        <>
            <div
                onClick={onClick}
                className="hover:cursor-pointer bg-cover bg-center absolute w-full h-full"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{
                    backgroundImage: `url(${STORAGE_BASE_URL + img})`
                }}
            />
            {hover &&
                <p
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className="absolute bottom-0 bg-black w-full p-6 text-white bg-opacity-40 hover:cursor-pointer">
                    {title}
                </p>
            }
        </>
    );
}

export default NewsCard;