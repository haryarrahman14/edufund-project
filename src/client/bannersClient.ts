import client from './apiClient';

export const getBanners = () => {
  return client.get('banners');
};
