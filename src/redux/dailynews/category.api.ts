import { baseApi } from "../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder:any) => ({
    getAllCategories: builder.query({
      query: () => "/caegories",
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
