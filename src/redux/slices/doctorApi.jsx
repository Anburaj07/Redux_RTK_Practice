import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const doctorApi = createApi({
  reducerPath: "doctorApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://65967cfd6bb4ec36ca02b8c6.mockapi.io/",
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["Doctors"],
  endpoints: (builder) => ({
    getDoctors: builder.query({
      //   query: () => "/Doctors",
      query: () => ({
        url: "/doctors",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }),
      providesTags: ["Doctors"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/user/login",
        method: "POST",
        body: user,
      }),
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/doctors/delete/${id}`,
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }),
      invalidatesTags: ["Doctors"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetDoctorsQuery,
  useDeleteDoctorMutation,
} = doctorApi;
