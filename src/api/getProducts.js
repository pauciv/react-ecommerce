const url = 'http://localhost:3001/products';
// const url =
//   'https://api.giphy.com/v1/gifs/search?api_key=9n97Krm5Q8sMwx8RjCd1Wv2pQj5AgUtB&q=basketball&limit=25&offset=0&rating=g&lang=en';

const getProducts = async () => {
  const response = await fetch(url);
  //console.log(response); // status: 200

  const json = await response.json();
  console.log(json); // response.json is not a function (porque falta el async)

  const data = json.data;
  console.log(data);
};

export default getProducts;
