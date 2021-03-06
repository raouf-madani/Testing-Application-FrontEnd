import axios from 'axios';
import useSWR from 'swr';
import {useApiHandler} from '@/actions';
import {fetcher} from '@/actions';

function createTest(data) {
  return axios.post('/api/V1/tests', data);
}
// function updatePortfolio(id, data) {
//   return axios.patch(`/api/V1/portfolios/${id}`, data);
// }

// function deletePortfolio(id) {
//   return axios.delete(`/api/V1/portfolios/${id}`);
// }

export const useCreateTest = () => useApiHandler(createTest);
// export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);
// export const useDeletePortfolio = () => useApiHandler(deletePortfolio);

// export const useGetPortfolio = (id) => {
//   const { data, error, ...rest} = useSWR(id ? `/api/V1/portfolios/${id}` : null, fetcher);
//   return { data, error, loading: !data && !error, ...rest};
// }

function updateTest(id, data) {
  console.log(id, 'and data is from action of test ', data);
  return axios.patch(`/api/V1/mise_place/${id}`, data);
}
export const useUpdateTest = () => useApiHandler(updateTest);

export const useGetTest = id => {
  const {data, error, ...rest} = useSWR(
    id ? `/api/V1/tests/${id}` : null,
    fetcher
  );
  return {data, error, loading: !data && !error, ...rest};
};
