import { apiSlice } from "../../app/api/apiSlice";

const impactsSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getImpacts: builder.query({
			query: (impactId) => "/impacts/${impactId}",
		}),
		getConsultantImpacts: builder.query({
			query: (ownerConsultantId) =>
				"/impacts/impactlist_consultant/${ownerConsultantId}",
		}),
		getCustomerImpacts: builder.query({
			query: (ownerCustomerId) =>
				"/impacts/impactlist_customer/${ownerCustomerId}",
		}),
		getAccountImpacts: builder.query({
			query: (accountId) => "/impacts/impactlist_account/${accountId}",
		}),
		getVendorImpacts: builder.query({
			query: (vendorAccountId) =>
				"/impacts/impactlist_vendor/${vendorAccountId}",
		}),
		getGoalImpacts: builder.query({
			query: (goalId) => "/impacts/impactlist_goal/${goalId}",
		}),
		getInitiativeImpacts: builder.query({
			query: (Id) => "/impacts/impactlist_initiative/${Id}",
		}),
		getImpactsByStage: builder.query({
			query: (goalId) => "/impacts/impactlist_goal/${goalId}",
		}),
		overrideExisting: false,
	}),
});

export const {
	useGetImpactsQuery,
	useGetConsultantImpactsQuery,
	useGetCustomerImpactsQuery,
	useGetAccountImpactsQuery,
	useGetVendorImpactsQuery,
	useGetGoalImpactsQuery,
	useGetInitiativeImpactsQuery,
	useGetImpactsByStageQuery,
} = impactsSlice;
