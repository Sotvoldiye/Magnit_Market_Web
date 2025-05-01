import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { defaultAllowedOrigins } from "vite";


const producrApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com"}),
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: ()=>'/products'
        }),
        getProductsById: builder.query({
            query:(id)=> `products/${id}`,
        })
    })
})

export const {useGetAllProductsQuery, useGetProductsByIdQuery}= producrApi
export default producrApi