import { apiSlice } from "../../app/api/apiSlice";

const goalsSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getGoals: builder.query({
			query: (goalId) => "/goals/${goalId}",
		}),
		getConsultantGoals: builder.query({
			query: (ownerConsultantId) =>
				"/goals/goallist_consultant/${ownerConsultantId}",
		}),
		getCustomerGoals: builder.query({
			query: (ownerCustomerId) => "/goals/goallist_customer/${ownerCustomerId}",
		}),
		getAccountGoals: builder.query({
			query: (accountId) => "/goals/goallist_account/${accountId}",
		}),
		getVendorGoals: builder.query({
			query: (vendorAccountId) => "/goals/goallist_vendor/${vendorAccountId}",
		}),
		getGoalsByStage: builder.query({
			query: (userId) => "/goals/goalstage/${userId}",
		}),
		overrideExisting: false,
	}),
});

export const {
	useGetGoalsQuery,
	useGetConsultantGoalsQuery,
	useGetCustomerGoalsQuery,
	useGetAccountGoalsQuery,
	useGetVendorGoalsQuery,
	useGetGoalsByStateQuery,
} = goalsSlice;
