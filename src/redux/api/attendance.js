import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const  URL = "/attendance";

export const attendanceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    attendances: build.query({
      query: () => {
        return {
          url: URL,
          method: "GET",      
        };
      },
    
      providesTags: [tagTypes.attendance],
    }),

    attendance: build.query({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "GET"
       
      }),
      providesTags:[tagTypes.attendance]
    }),

    addAttendance: build.mutation({
        query: (data) => ({
          url : `${URL}`,
          method: "POST",
          data
        }),
        invalidatesTags:[tagTypes.attendance]
      }),

    updateAttendance: build.mutation({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "PATCH",

      }),
      invalidatesTags:[tagTypes.attendance]
    }),

    
    deleteAttendance: build.mutation({
      query: (id) => ({
        url : `${URL}/${id}`,
        method: "DELETE"
       
      }),
      invalidatesTags:[tagTypes.attendance]
    }),

  }),
});

export const { useAddAttendanceMutation,useAttendancesQuery,useUpdateAttendanceMutation,useDeleteAttendanceMutation,useAttendanceQuery } = attendanceApi;