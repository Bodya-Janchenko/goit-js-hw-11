import axios from 'axios';

export const getImagesByQuery = query => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '50285738-1ed6c89d653294dbf28cfa2b7',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
};
