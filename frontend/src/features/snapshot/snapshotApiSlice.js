
import { apiSlice } from '../../app/api/apiSlice'

const snapshotApiSlice = apiSlice.injectEndpoints({

    endpoints: (builder) => ({
        getOverallGoals: builder.query({
            query: () => 'goals/overallstate',
        }),
        getOverallImpacts: builder.query({
            query: () => 'impacts/overallstate',
        }),
        getOverallInitiatives: builder.query({
            query: () => '/initiatives/overallstate'
        }),
        overrideExisting: false,
    })
});

export const { useGetOverallGoalsQuery, useGetOverallImpactsQuery, 
    useGetOverallInitiativesQuery } = snapshotApiSlice;
