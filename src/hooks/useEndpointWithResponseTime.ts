import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import {
  EndpointWithTimeResponse,
  hitEndpointWithResponseTime,
} from '../utils';

export const useEndpointWithResponseTime = (
  provider: ethers.providers.Provider,
  endpoint: string
) => {
  const [response, setResponse] = useState<EndpointWithTimeResponse>({
    responseTime: 0,
  });

  const fetchAndSet = () => {
    if (provider && endpoint) {
      hitEndpointWithResponseTime(provider, endpoint).then(setResponse);
    }
  };

  useEffect(() => {
    fetchAndSet();
  }, [provider, endpoint]);

  return { ...response, refetch: fetchAndSet };
};
