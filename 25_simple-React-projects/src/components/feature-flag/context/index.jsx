import { createContext, useEffect, useState } from 'react';
import featureFlagsDateServiceCall from '../data';

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setIsLoading(true);
      // original service call
      const response = await featureFlagsDateServiceCall();
      console.log(response);
      setEnableFlags(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ isLoading, enableFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
