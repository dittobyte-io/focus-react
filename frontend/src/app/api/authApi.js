import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


//RTK Query
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://127.0.0.1:8000' ,
  prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
          headers.set("Authorization", `Token ${token}`)
      }
      return headers
  }
})

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
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


export const { useLoginUserMutation,uselogoutUserMutation } = authApi
