import { apiSlice } from "app/api";

const newsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
        getNewsFeed: builder.query({
			query: (userId) => `feeds/consultantfeeds/${userId}`,
		}),
		
	}),
	overrideExisting: false,
});

export const { useGetNewsFeedQuery } = newsApiSlice;
