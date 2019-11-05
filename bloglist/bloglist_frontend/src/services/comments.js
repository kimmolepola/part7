import axios from 'axios';

const baseUrl = '/api/blogs';

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/comments`  );
  return response.data;
};

const post = async (blogId, comment) => {
  const response = await axios.post(`${baseUrl}/${blogId}/comments`, { comment });
  return response.data;
};

export default { post, getAll };
