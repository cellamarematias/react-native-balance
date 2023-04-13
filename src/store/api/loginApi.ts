import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API = 'https://node-api-mysql-cellamarematias.vercel.app/api/users/auth';

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (body) => ({
                url: API,
                method: 'POST',
                body,
                headers: {
                    'Content-Type': 'application/json'
                },
                providesTags: ['Users'],
            }),
        })
    })
});

export const { useLazyGetUserQuery } = loginApi;