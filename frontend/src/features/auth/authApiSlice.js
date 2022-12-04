import { apiSlice } from "app/api";

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		loginUser: builder.mutation({
			query: (body) => {
				return {
					url: "/userservice/login/",
					method: "post",
					body,
				};
			},
		}),
	}),
	overrideExisting: false,
});

export const { useLoginUserMutation } = authApiSlice;
