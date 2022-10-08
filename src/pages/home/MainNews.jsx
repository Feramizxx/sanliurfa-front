import { useContext } from "react";
import PageLoader from "../../components/PageLoader";
import { LanguageContext } from '../../contexts/LanguageContext';
import useFetchNews from './../../hooks/useFetchNews';
import { useNavigate } from 'react-router-dom';
import { STORAGE_BASE_URL } from "../../api/config";
import { LinkContext } from '../../contexts/LinkContext';


const MainNews = () => {
  const { value } = useContext(LanguageContext);
  const { setValue } = useContext(LinkContext)
  const { news, newsAreLoading, newsError } = useFetchNews(value, 3);
  const navigate = useNavigate();

  if (newsAreLoading) return <PageLoader />

  const onButtonClick = (id) => {
    setValue(3);
    navigate(`/inline-news/${id}`);
  }

  let count = 0;
  return (<>
    {
      !newsError ?
        <section className="m-0 p-0">
          {
            news.map((singleNews) => {
              count += 1;
              const isEven = count % 2 === 0;
              return (
                <div
                  key={singleNews.id}
                  style={{ backgroundImage: `linear-gradient(${isEven ? 270 : 90}deg, #BB2025 0%, rgba(255, 255, 255, 0.6) 100%), url(${STORAGE_BASE_URL + singleNews.imageUrl})` }}
                  className="h-96 bg-cover relative bg-center"
                >
                  <div className={`flex w-full h-full ${isEven ? 'pr-10' : 'pl-10'}  flex-col ${isEven ? 'items-end' : 'items-start'} justify-around`} >
                    <h1 className={`text-white xl:w-full w-3/5 lg:text-[28px] sm:text-[20px] text-5xl ${isEven ? 'text-end' : 'text-start'}`}>
                      {singleNews.title}
                    </h1>
                    <p className="text-white text-xl lg:text-[16px] sm:text-[12px] xl:w-full w-1/2 text-ellipsis overflow-hidden">
                      {singleNews.description}
                    </p>
                    <button onClick={() => onButtonClick(singleNews.id)} className="text-red font-bold lg:mt-0 mt-7 bg-white rounded-xl px-10 py-1">Ətraflı</button>
                  </div>
                </div>
              )
            })
          }
        </section> :
        <div className="w-screen h-[60vh] bg-white text-red font-bold text-xl flex items-center justify-center">
          <p> Could not load news... </p>
        </div>
    }
  </>
  );
};

export default MainNews;
