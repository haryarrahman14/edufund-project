import axios from 'axios';

const client = axios.create({
  baseURL: 'https://6319bfa08e51a64d2beb602d.mockapi.io/mock/v1/',
  headers: {
    Accept: 'application/json'
  }
});

client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default client;
