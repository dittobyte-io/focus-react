import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { response } from 'express';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return{
          url: "/userservice/login/",
          method: "post",
          body,
        };
      }
    }),
  }),
})


export const { useLoginUserMutation } = authApi