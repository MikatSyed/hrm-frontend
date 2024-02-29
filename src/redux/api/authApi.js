import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const AUTH_URL = '/auth'
const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url : `${AUTH_URL}/signin`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),
    addEmployee: build.mutation({
      query: (data) => ({
        url : `${AUTH_URL}/signup`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation,useAddEmployeeMutation } = authApi;