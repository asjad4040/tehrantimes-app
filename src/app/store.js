import { configureStore } from '@reduxjs/toolkit'
import { newsFeedApi } from '../services/newsFeedApi'
import { warNewsApi } from '../services/warNewsQuery'
export const store = configureStore({
    reducer: {
        [newsFeedApi.reducerPath]: newsFeedApi.reducer,
        [warNewsApi.reducerPath]:warNewsApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            newsFeedApi.middleware,
            warNewsApi.middleware,
        ]),
})