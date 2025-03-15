import { useEffect, useState } from 'react';

// Custom Hook
function useLoalStorage({ key, value }) {
  const [theme, setTheme] = useState({ key: value });

  useEffect(() => {
    setTheme();
  }, []);
}
