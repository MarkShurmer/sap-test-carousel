
const fetchImages = () => {

  // check for cacheed version first
  const cachedImages = localStorage.getItem('images');

  if(cachedImages) {
    return Promise.resolve(JSON.parse(cachedImages));
  }

  return fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo')
  .then(resp => {
    return resp.json();
  })
  .then(json => {
    localStorage.setItem('images', JSON.stringify(json));
    return json;
  })
  .catch(err => {
    return Promise.reject(err.message);
  });

};

export default fetchImages;
