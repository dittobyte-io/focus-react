import { apiSlice } from "app/api";

export const tasksApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMyTasks: builder.query({
			query: (userId) => `/tasks/assignedtasklist/${userId}`,
		}),
		getTasks: builder.query({
			query: (taskId) => `/tasks/${taskId}`,
		}),
		addTask: builder.mutation({
			query: (task) => ({
				url: `/tasks`,
				method: "POST",
				body: task,
			}),
		}),
		updateTask: builder.mutation({
			query: (task, taskId) => ({
				url: `/tasks/${taskId}`,
				method: "PATCH",
				body: task,
			}),
		}),
		deleteTask: builder.mutation({
			query: (taskId) => ({
				url: `/tasks/${taskId}`,
				method: "DELETE",
			}),
		}),
		getConsultantTasks: builder.query({
			query: (consultantId) => `/tasks/task_consultant/${consultantId}`,
		}),
		getCustomerTasks: builder.query({
			query: (customerId) => `/tasks/task_customer/${customerId}`,
		}),
		getAccountTasks: builder.query({
			query: (accountId) => `/tasks/task_account/${accountId}`,
		}),
		getVendorTasks: builder.query({
			query: (vendorAccountId) => `/tasks/task_vendor/${vendorAccountId}`,
		}),
		getGoalTasks: builder.query({
			query: (goalId) => `/tasks/task_goal/${goalId}`,
		}),
		getInitiativeTasks: builder.query({
			query: (initiativeId) => `/tasks/task_initiative.${initiativeId}`,
		}),
		getProjectTasks: builder.query({
			query: (projectId) => `/tasks/task_project/${projectId}`,
		}),
	}),
});

export const {
	useGetMyTasksQuery,
	useGetTasksQuery,
	useAddTaskMutation,
	useDeleteTaskMutation,
	useUpdateTaskMutation,
	useGetConsultantTasksQuery,
	useGetCustomerTasksQuery,
	useGetAccountTasksQuery,
	useGetVendorTasksQuery,
	useGetGoalTasksQuery,
	useGetInitiativeTasksQuery,
	useGetProjectTasksQuery,
} = tasksApiSlice;
