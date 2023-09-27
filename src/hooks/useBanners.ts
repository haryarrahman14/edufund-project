import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { getBanners } from 'src/client/bannersClient';

export const useGetBanners = (options?: UseQueryOptions) => {
  const fetchData = () => {
    return getBanners();
  };

  return useQuery<any>(['banners'], fetchData, options);
};
