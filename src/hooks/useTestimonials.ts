import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { getTestimonials } from 'src/client/testimonialsClient';

export const useGetTestimonials = (options?: UseQueryOptions) => {
  const fetchData = () => {
    return getTestimonials();
  };

  return useQuery<any>(['testimonials'], fetchData, options);
};
