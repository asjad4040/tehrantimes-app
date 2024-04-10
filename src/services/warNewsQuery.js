import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl=`https://newsdata.io/api/1/news?apikey=pub_396298ebf999821b2d868fe8d1c8bbf5429f8&`

export const warNewsApi=createApi({
    reducerPath:'warNewsApi',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>({
        getWarNews:builder.query({
            query:(key)=>`q=${key}`
        }),
    })
})

export const {useGetWarNewsQuery} = warNewsApi