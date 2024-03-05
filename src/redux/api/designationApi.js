import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/designation";

export const designationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    designations: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.designation],
    }),

    designation: build.query({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.designation]
    }),

    addDesignation: build.mutation({
        query: (data) => ({
          url : URL,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.designation]
      }),

    updateDesignation: build.mutation({
      query: (data) => ({
        url : `${URL}/${data.id}`,
        method: "PATCH",
        data:data.body
      }),
      invalidatesTags:[tagTypes.designation]
    }),

    
    deleteDesignation: build.mutation({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "DELETE"
       
      }),
      invalidatesTags:[tagTypes.designation]
    }),

  }),
});

export const { useDesignationsQuery,useDesignationQuery,useAddDesignationMutation,useUpdateDesignationMutation,useDeleteDesignationMutation, } = designationApi;