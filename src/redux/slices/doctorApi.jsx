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
    getDoctorById: builder.query({
      query: (id) => ({
        url: `/doctors/${id}`,
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
    addDoctor: builder.mutation({
      query: (payload) => ({
        url: `/doctors/appointments`,
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: payload,
      }),
      invalidatesTags: ["Doctors"],
    }),
    editDoctor: builder.mutation({
      query: ({id,...payload}) => ({
        url: `/doctors/edit/${id}`,
        method: "PATCH",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: payload,
      }),
      invalidatesTags: ["Doctors"],
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
  useEditDoctorMutation,
  useAddDoctorMutation,
  useGetDoctorByIdQuery,
  useDeleteDoctorMutation,
} = doctorApi;
