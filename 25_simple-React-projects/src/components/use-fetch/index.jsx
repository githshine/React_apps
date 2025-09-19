import { useEffect, useState } from 'react';

export default function useFetch({ url, options }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(url, options) {
    try {
      console.log('URl:', url);
      setLoading(true);
      const response = await fetch(url, { ...options });

      if (!response.ok) {
        setError(response.statusText);
        setLoading(false);
      }
      console.log('response:', response);

      const data = await response.json();

      console.log('result: ', error, data);
      setLoading(false);
      setData(data.products);
    } catch (error) {
      console.log('error:', error);

      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url, options);
  }, [url]); // options 是一个对象，如果依赖它的话，在不使用useMemo 保存参数的情况下，会导致组件一直重复渲染

  return { loading, error, data };
}
