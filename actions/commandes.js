import axios from 'axios';
import useSWR from 'swr';
import {useApiHandler} from '@/actions';
import {fetcher} from '@/actions';

function updateCommande(id, data) {
  return axios.patch(`/api/V1/commandes/${id}`, data);
}

export const useUpdateCommande = () => useApiHandler(updateCommande);

export const useGetCommande = id => {
  const {data, error, ...rest} = useSWR(
    id ? `/api/V1/commandes/${id}` : null,
    fetcher
  );
  return {data, error, loading: !data && !error, ...rest};
};
