import axios from 'axios';
import useSWR from 'swr';
import {useApiHandler} from '@/actions'
import { fetcher } from '@/actions';

function createPortfolio(data) {
  return axios.post('/api/V1/portfolios', data);
}
function updatePortfolio(id, data) {
  return axios.patch(`/api/V1/portfolios/${id}`, data);
}

function deletePortfolio(id) {
  return axios.delete(`/api/V1/portfolios/${id}`);
}

export const useCreatePortfolio = () => useApiHandler(createPortfolio);
export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);
export const useDeletePortfolio = () => useApiHandler(deletePortfolio);

export const useGetPortfolio = (id) => {
  const { data, error, ...rest} = useSWR(id ? `/api/V1/portfolios/${id}` : null, fetcher);
  return { data, error, loading: !data && !error, ...rest};
}