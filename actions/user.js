import useSWR from 'swr';
import {fetcher} from '@/actions';

export const UseGetUser = () => {
  const {data, error, ...rest} = useSWR('/api/V1/me', fetcher);
  return {data, error, loading: !data && !error, ...rest};
};
