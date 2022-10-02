import { useState, useEffect } from 'react';
import { getSliderImages } from '../api/getSliderImages';
import useFetch from './useFetch';

const useFetchSliderImages = () => {
    const [sliderImages, setSliderImages] = useState([]);

    const [fetchSliderImages, isSliderImagesLoading, sliderImagesError] = useFetch(async () => {
        const data = await getSliderImages();
        setSliderImages(data);
    });

    useEffect(() => {
        fetchSliderImages();
    }, [])

    return { sliderImages, isSliderImagesLoading, sliderImagesError };
}

export default useFetchSliderImages;