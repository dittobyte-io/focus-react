import { apiSlice } from "../../app/api/apiSlice";

const initiativesSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getInitiatives: builder.query({
			query: (initiativeId) => "/initiatives/${initiativeId}",
		}),
		getConsultantInitiatives: builder.query({
			query: (ownerConsultantId) => "/initiatives/intiative_consultant/${ownerConsultantId}",
		}),
		getCustomerInitiatives: builder.query({
			query: (ownerCustomerId) => "/initiatives/initiative_customer/${ownerCustomerId}",
		}),
		getAccountInitiatives: builder.query({
			query: (accountId) => "/intiatives/initiative_account/${accountId}",
		}),
		getVendorInitiatives: builder.query({
			query: (vendorAccountId) => "/initiatives/initiative_vendor/${vendorAccountId}",
		}),
        getGoalInitiatives: builder.query({
			query: (goalId) => "/initiatives/initiative_goal/${goalId}",
		}),
		getInitiativesByStage: builder.query({
			query: (userId) => "/intiatives/initiativeliststage/${userId}",
		}),
		overrideExisting: false,
	}),
});

export const {
	useGetInitiativesQuery,
	useGetConsultantInitiativesQuery,
	useGetCustomerInitiativesQuery,
	useGetAccountInitiativesQuery,
	useGetVendorInitiativesQuery,
	useGetInitiativesByStageQuery,
    useGetGoalInitiativesQuery,
} = initiativesSlice;
