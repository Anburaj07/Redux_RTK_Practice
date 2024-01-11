import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const doctorApi = createApi({
  reducerPath: "doctorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65967cfd6bb4ec36ca02b8c6.mockapi.io/",
  }),
  tagTypes: ["Doctors"],
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => "/Doctors",
      providesTags: ["Doctors"],
    }),
  }),
});

export const { useGetDoctorsQuery } = doctorApi;
