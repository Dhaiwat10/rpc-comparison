import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import {
  createAlchemyProvider,
  createAnkrProvider,
  createInfuraProvider,
} from '../utils';

type RpcProvider = 'ankr' | 'alchemy' | 'infura';

export const useProvider = (rpcProvider: RpcProvider) => {
  const [provider, setProvider] = useState<ethers.providers.Provider>();

  useEffect(() => {
    switch (rpcProvider) {
      case 'ankr':
        setProvider(createAnkrProvider());
        break;
      case 'alchemy':
        setProvider(createAlchemyProvider());
        break;
      case 'infura':
        setProvider(createInfuraProvider());
        break;
      default:
        break;
    }
  }, [rpcProvider]);

  return provider;
};
