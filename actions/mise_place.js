import axios from 'axios';
import useSWR from 'swr';
import {useApiHandler} from '@/actions';
import {fetcher} from '@/actions';

function updateMise_place(id, data) {
  console.log(id, 'and data is from action ', data);
  return axios.patch(`/api/V1/mise_place/${id}`, data);
}

export const useUpdateMisePlace = () => useApiHandler(updateMise_place);

function createMiseenplace(data) {
  return axios.post('/api/V1/mise_place', data);
}

export const useCreateMise_Place = () => useApiHandler(createMiseenplace);

export const useGetMise = id => {
  const {data, error, ...rest} = useSWR(
    id ? `/api/V1/mise_place/${id}` : null,
    fetcher
  );
  return {data, error, loading: !data && !error, ...rest};
};
