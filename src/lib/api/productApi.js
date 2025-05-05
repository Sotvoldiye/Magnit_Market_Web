import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const producrApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getProductsById: builder.query({
      query: (id) => `product/${id.replace(":", "")}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductsByIdQuery } = producrApi;
export default producrApi;
