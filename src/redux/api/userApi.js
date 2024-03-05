import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const URL = "/users";
const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    users: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",
        };
      },

      providesTags: [tagTypes.user],
    }),

    user: build.query({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    updateUser: build.mutation({
      query: (data) => ({
        url: `${URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useUsersQuery,
  useUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
