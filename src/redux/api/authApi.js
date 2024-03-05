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
    signup: build.mutation({
      query: (data) => ({
        url : `${AUTH_URL}/signup`,
        method: "POST",
        data
      }),
      invalidatesTags:[tagTypes.user]
    }),
    employees: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.user],
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation,useSignupMutation } = authApi;