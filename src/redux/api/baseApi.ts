import { axiosBaseQuery } from '@/axios/axiosBaseQuery';
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL }),
//   endpoints: () => ({}),
// });


import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from '../tagtype';
// import { axiosBaseQuery } from "@/axios/axiosBaseQuery";
// import { tagTypesList } from "./tag-types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL as string,
  }),

  tagTypes: tagTypesList,

  endpoints: () => ({}),
  
  
});

export const {} = baseApi;
