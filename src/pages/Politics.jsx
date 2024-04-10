import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Politics = () => {
    const [politicsNews, setPoliticsNews] = useState([]);
    const [electionNews, setElectionNews] = useState([]);

    useEffect(() => {
        const geoPoliticsNews = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news', {
                    params: {
                        apikey: 'pub_396298ebf999821b2d868fe8d1c8bbf5429f8',
                        language: 'en',
                        image: '1',
                        q: 'politics',
                        country: 'us,gb,ru,il,cn',
                        category: 'politics',
                    }
                })
                const { data: { results } } = response
                setPoliticsNews(results);

            } catch (error) {
                console.error(error.message);
            }
        }

        const electionNews = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news', {
                    params: {
                        apikey: 'pub_396298ebf999821b2d868fe8d1c8bbf5429f8',
                        language: 'en',
                        image: '1',
                        q: 'elections',
                        country: 'us,gb,ru',
                        category: 'politics',
                    }
                })
                const { data: { results } } = response
                setElectionNews(results);

            } catch (error) {
                console.error(error.message);
            }
        }
        geoPoliticsNews();
        electionNews();

    }, [])
    if (!politicsNews.length) return <div>Loading...</div>
    if(!electionNews.length) return <div>Loading...</div>
    return (
        <main>
            <section>
                <h1 className='font-bold text-3xl font-montserrat underline text-primary my-5'>Politics</h1>
                <div className='flex justify-between gap-4 items-start'>
                    <div className='flex flex-wrap gap-4'>
                        {politicsNews.slice(0, 6).map((news) => (
                            <a href={news.link} target='blank'>
                                <div className='flex flex-col items-start w-[400px] gap-2'>
                                    <img src={news.image_url} alt="" className='object-cover w-full h-60' />
                                    <h2 className='text-xl font-newsCycle font-semibold'>{news.title}</h2>
                                    <p className='text-lg font-roboto'>{news.description && news.description.length>100?`${news.description.slice(0,100)}...`:news.description}</p>
                                    <p className='text-base underline font-roboto'>{news.source_id}</p>
                                    <p className='text-sm font-roboto'>{news.pubDate}</p>
                                </div>
                            </a>

                        ))}

                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-3xl font-montserrat underline'>
                            Recent News
                        </h2>
                        <div >
                            {politicsNews.slice(6).map((news) => (
                                <a href={news.link} target='blank'>
                                    <div className='flex items-start gap-3 w-[600px] my-4'>
                                        <img src={news.image_url} alt="" className='object-cover w-64 h-32' />
                                        <div className='flex flex-col'>
                                            <h2 className='text-xl font-newsCycle font-semibold'>{news.title}</h2>
                                            <p className='text-base font-roboto underline'>{news.source_id}</p>
                                        </div>
                                    </div>

                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <h1 className='font-bold text-3xl font-montserrat underline text-primary my-5'>Elections</h1>
                <div className='flex justify-between gap-4 items-start'>
                    <div className='flex flex-wrap gap-4'>
                        {electionNews.slice(0, 6).map((news) => (
                            <a href={news.link} target='blank'>
                                <div className='flex flex-col items-start w-[400px] gap-2'>
                                    <img src={news.image_url} alt="" className='object-cover w-full h-60' />
                                    <h2 className='text-xl font-newsCycle font-semibold'>{news.title}</h2>
                                    <p className='text-lg font-roboto'>{news.description && news.description.length>100?`${news.description.slice(0,100)}...`:news.description}</p>
                                    <p className='text-base underline font-roboto'>{news.source_id}</p>
                                    <p className='text-sm font-roboto'>{news.pubDate}</p>
                                </div>
                            </a>

                        ))}

                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-3xl font-montserrat underline'>
                            Recent News
                        </h2>
                        <div >
                            {electionNews.slice(6).map((news) => (
                                <a href={news.link} target='blank'>
                                    <div className='flex items-start gap-3 w-[600px] my-4'>
                                        <img src={news.image_url} alt="" className='object-cover w-64 h-32' />
                                        <div className='flex flex-col'>
                                            <h2 className='text-xl font-newsCycle font-semibold'>{news.title}</h2>
                                            <p className='text-base font-roboto underline'>{news.source_id}</p>
                                        </div>
                                    </div>

                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Politics
