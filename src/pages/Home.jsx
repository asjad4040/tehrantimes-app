import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
  const [newsFeed, setNewsFeed] = useState([]);
  const [warNews, setWarNews] = useState([]);

  useEffect(() => {
    const fetchFeedNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: 'pub_396298ebf999821b2d868fe8d1c8bbf5429f8',
            language: 'en',
            image: '1',
          }
        })
        const { data: { results } } = response
        setNewsFeed(results)
      } catch (error) {
        console.error(error.message);
      }
    }

    const fetchWarNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: 'pub_396298ebf999821b2d868fe8d1c8bbf5429f8',
            language: 'en',
            image: '1',
            q: 'gaza',
          }
        })
        const { data: { results } } = response
        setWarNews(results)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchFeedNews();
    fetchWarNews();
  }, [])
  if (!newsFeed.length) return <div>Loading...</div>
  if(!warNews.length) return <div>Loading...</div>
  return (
    <main>
      <section id='hero-section' className='flex flex-col gap-3' >
        <div>
          <h1 className='font-bold text-3xl font-montserrat underline'>Latest <span className='text-primary'>News</span></h1>
        </div>
        <div className='flex  w-full justify-between' >
          <div className='flex flex-col items-start gap-56'>
            <div className='w-[600px] h-[400px] '>
              <a href={newsFeed[0].link} className='flex flex-col gap-2'>
                <img src={newsFeed[0].image_url} alt="newsfeedImg" className='object-cover w-full h-60 ' />
                <h2 className='font-semibold text-3xl font-newsCycle'>{newsFeed[0].title}</h2>
                <p className='text-ellipsis text-lg font-roboto'>{newsFeed[0].description && newsFeed[0].description.length>100?`${newsFeed[0].description.slice(0,100)}...`:newsFeed[0].description}</p>
                <p className='text-lg font-roboto underline'>{newsFeed[0].source_id}</p>
              </a>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='flex flex-col items-start h-[400px] w-[300px]'>
                <a href={newsFeed[1].link} className='flex flex-col gap-2'>
                  <img src={newsFeed[1].image_url} alt="newsfeedImg" className='object-cover w-full h-40 block'/>
                  <h2 className='font-semibold text-2xl font-newsCycle'>{newsFeed[1].title}</h2>
                  <p className='text-lg font-roboto underline'>{newsFeed[1].source_id}</p>
                </a>
              </div>
              <div className='flex flex-col items-start h-[400px] w-[300px]'>
                <a href={newsFeed[2].link} className='flex flex-col gap-2'>
                  <img src={newsFeed[2].image_url} alt="newsfeedImg" className='object-cover w-full h-40 block'/>
                  <h2 className='font-semibold text-2xl font-newsCycle'>{newsFeed[2].title}</h2>

                  <p className='text-lg font-roboto underline'>{newsFeed[2].source_id}</p>
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start'>
            <h2 className='font-semibold text-lg font-montserrat underline'>Recent News</h2>
            {newsFeed.slice(3).map((news) => (
              <div className='flex flex-row w-[600px] h-[150px]' id={news.article_id}>
                <a href={news.link} className='flex items-center justify-start gap-4'>
                  <img src={news.image_url} alt="" className="block w-40 h-40 object-contain" />
                  <div className='flex flex-col'>
                    <h2 className='text-xl font-newsCycle font-semibold'>{news.title}</h2>
                    <p className='text-base font-roboto underline'>{news.source_id}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

      </section>
      <section id='World Trending' className='flex flex-col w-full gap-4'>
      <h1 className='font-bold text-3xl font-montserrat underline text-primary'>Israel-Gaza <span className='text-black'>Conflict</span></h1>
        <div className='flex w-full justify-between'>
          <div className='flex flex-wrap gap-5 w-full'>
            {warNews.slice(0,6).map((news) => (
              <a href={news.link}>
                <div className='flex flex-col items-start w-[300px] gap-2'>
                  <img src={news.image_url} alt="" className="object-cover w-full h-32 block" />
                  <h2 className='font-semibold text-lg font-newsCycle text-primary'>{news.title}</h2>
                  <p className='font-roboto text-base'>{news.description && news.description.length>100?`${news.description.slice(0,100)}...`:news.description}</p>
                  <p className='text-base font-roboto underline'>{news.source_id}</p>
                </div>
              </a>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
          <h2 className='font-semibold text-lg font-montserrat underline'>Recent News</h2>
            {warNews.slice(6).map((news) => (
              <div className='flex flex-row w-[600px] h-[150px]' id={news.article_id}>
                <a href={news.link} className='flex items-center justify-start gap-4'>
                  <img src={news.image_url} alt="" className="block w-36 h-36 object-contain" />
                  <div className='flex flex-col'>
                    <h2 className='text-xl font-newsCycle font-semibold'>{news.title}</h2>
                    <p className='text-base font-roboto underline'>{news.source_id}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

  )
}

export default Home
