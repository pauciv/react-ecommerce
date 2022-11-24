import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getData, url } from '../../utilities/api/getProducts';

const ProductPage = ({ products }) => {
  console.log(products);

  const { id } = useParams();
  const navigate = useNavigate();

  const getProductById = (products, id) => {
    return products.find((product) => product.id === id);
  };

  const product = getProductById(products, parseInt(id));

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

export default ProductPage;
