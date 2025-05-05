import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../../lib/api/productApi';

function Product() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Product not found</p>;

  return (
    <div>
      <Link to='/'>Home</Link>
      <p>
        {data.title}
      </p>
    </div>
  );
}

export default Product;
