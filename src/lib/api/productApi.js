import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const producrApi = createApi({
  reducerPath: "producrApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    getProductsById: builder.query({
      query: (id) => `product/${id.replace(":", "")}`,
    }),

    // 🔽 Qo'shilgan endpointlar:
    addToCart: builder.mutation({
      query: (product) => ({
        url: "/carts/add",
        method: "POST",
        body: {
          userId: 1, // dummyjson uchun required
          products: [
            {
              id: product.id,
              quantity: 1
            }
          ]
        },
      }),
    }),

    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/carts/${productId}`, // dummyjson DELETE bilan ishlamaydi real remove uchun
        method: "DELETE", // Faqat ko‘rsatma sifatida
      }),
    }),

    getCart: builder.query({
      query: () => "/carts/user/1", // userId 1 uchun cartni olish
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductsByIdQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartQuery,
} = producrApi;

export default producrApi;
