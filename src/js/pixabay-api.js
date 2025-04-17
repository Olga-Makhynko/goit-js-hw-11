import axios from 'axios';

export async function getImagesByQuery(query) {
  const ApiKey = '49778514-c989ee5c1575b477a31bb7b72';
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: ApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 100,
      },
    })
    .then(response => {
      return response.data.hits;
    })

    .catch(error => {
      console.error(error);
      throw error;
    });
}
