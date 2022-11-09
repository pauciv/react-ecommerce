export const url = 'http://localhost:3001/products';

//TODO: implementar useCallback a esta función

export const getProducts = async (setProducts, setError, setLoading) => {
  try {
    const response = await fetch(url);
    console.log(response); // status: 200

    const json = await response.json();
    console.log('json = ', json); // response.json is not a function (porque falta el async)

    setProducts(json);
  } catch (error) {
    setError(true);
  }
  setLoading(false);
};

// const url = 'http://localhost:3001/products';

// const getProducts = async () => {
//   const response = await fetch(url);
//   console.log(response); // status: 200

//   const json = await response.json();
//   console.log(json); // response.json is not a function (porque falta el async)
// };

// export default getProducts;
