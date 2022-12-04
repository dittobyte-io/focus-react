import { apiSlice } from "app/api";

export const newsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNews: builder.query({
			query: () => "/whateverTheRealOneIs",
		}),
	}),
});

export const { useGetNewsQuery } = newsApiSlice;
