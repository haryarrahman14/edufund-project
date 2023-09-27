import client from './apiClient';

export const getTestimonials = () => {
  return client.get('testimonials');
};
