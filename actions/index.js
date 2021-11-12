import { useState } from 'react';
export const fetcher = (url) =>
  fetch(url).then(async res => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    } else {
      return result;
    }
  });
export function useApiHandler(ApiCall) {
  const [reqState, setReqState] = useState({
    error: null,
    dataport: null,
    loading: false
  });

  const Handler = async (...data) => {
    setReqState({error: null, data: null, loading: true});
    try {
      const json = await ApiCall(...data);
      setReqState({error: null, data: json.data, loading: false});
      return json.data;
    } catch(e) {
      const message = (e.response && e.response.data) || 'Ooops, something went wrong...';
      setReqState({error: message, data: null, loading: false});
      return Promise.reject(message);
    }
  }

  return [Handler, {...reqState}]
}