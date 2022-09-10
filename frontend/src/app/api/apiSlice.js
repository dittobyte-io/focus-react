import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { setCredentials, logOut } from "features/auth/authSlice";

const baseQuery = fetchBaseQuery({
	baseURL: "https://www.focuscores.com",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		if (token) {
			headers.set("authorization", `Token ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.originalStatus == 403) {
		const refreshResult = await baseQuery("/refresh", api, extraOptions);
	}
};
