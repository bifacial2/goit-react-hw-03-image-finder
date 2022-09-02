import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '25227705-6f342d76bfe2d74a8bfd40d48';

async function fetchImages(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}

export default fetchImages;
