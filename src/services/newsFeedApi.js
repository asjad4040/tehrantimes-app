import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = 'https://news67.p.rapidapi.com/v2';


const feedHeaders = {
    'X-RapidAPI-Key': '6cce424e0cmsh256a05418128245p13495bjsn877e0c2c1ec4',
    'X-RapidAPI-Host': 'news67.p.rapidapi.com'
}

const createRequest = (url) => ({ url, headers: feedHeaders })

export const newsFeedApi=createApi({
    reducerPath:'newsFeedApi',
    baseQuery:fetchBaseQuery({baseUrl:url}),
    endpoints:(builder)=>({
        getNewsFeed:builder.query({
            query:(languages)=>createRequest(`/feed?languages=${languages}`)
        }),
        getTrendingNews:builder.query({
            query:(languages)=> createRequest(`/trending?languages=${languages}`)
        }),
    })
})

export const {useGetNewsFeedQuery, useGetTrendingNewsQuery} = newsFeedApi;