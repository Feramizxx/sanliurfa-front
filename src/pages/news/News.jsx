import React, { memo, useContext } from "react";
import useFetchNews from "../../hooks/useFetchNews";
import { LanguageContext } from "../../contexts/LanguageContext";
import PageLoader from './../../components/PageLoader';
import NewsCard from './../../components/NewsCard';

const News = memo(() => {
  const { value } = useContext(LanguageContext);
  const { news, newsAreLoading, newsError } = useFetchNews(value);

  if (newsAreLoading) return <PageLoader />

  const gridNewsLength = news.length <= 4 ? news.length : 4;
  const gridNews = news.slice(0, gridNewsLength);

  return (
    <>
      {!newsError ?
        <div className={'pt-40 bg-red pb-10 flex justify-center'}>
          <div className="w-full max-w-[80vw] flex flex-col items-center">
            <div className="news-grid">
              {gridNews.map((gn, index) => {
                return (
                  <div key={gn.id} className={`news-grid-item-${index + 1} relative`}>
                    <NewsCard id={gn.id} title={gn.translations[0].title} img={gn.imageUrl} />
                  </div>
                )
              })}
            </div>
            {news.length > 4 &&
              <div className="flex justify-center w-full">
                <div className="max-w-[1310px] w-full">
                  <h1 className="text-white text-2xl my-12">Ən son xəbərlərimiz</h1>
                  <div className="flex flex-col items-center min-sm:grid grid-cols-2 min-md:grid-cols-3 gap-6">
                    {news.slice(4).map(singleNews => {
                      return (
                        <div key={singleNews.id} className="mt-2 min-h-[260px] sm:max-w-[400px] min-sm:mt-0 relative w-full min-sm:min-h-[35vh]">
                          <NewsCard id={singleNews.id} title={singleNews.translations[0].title} img={singleNews.imageUrl} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            }
          </div>
        </div> :
        <div className="w-full h-screen flex items-center justify-center bg-red pt-40 pb-10">
          <p className="text-white font-bold text-xl"> Could not load news... </p>
        </div>
      }
    </>
  );
})

export default News;
