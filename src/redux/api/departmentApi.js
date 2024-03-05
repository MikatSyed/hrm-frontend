import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/department";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    departments: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.department],
    }),

    department: build.query({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.department]
    }),

    addDepartment: build.mutation({
        query: (data) => ({
          url : URL,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.department]
      }),

    updateDepartment: build.mutation({
      query: (data) => ({
        url : `${URL}/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.department]
    }),

    
    deleteDepartment: build.mutation({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "DELETE"
       
      }),
      invalidatesTags:[tagTypes.department]
    }),

  }),
});

export const { useDepartmentsQuery,useDepartmentQuery,useAddDepartmentMutation,useUpdateDepartmentMutation,useDeleteDepartmentMutation, } = departmentApi;