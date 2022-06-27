import { ethers } from 'ethers';

export const createAnkrProvider = () => {
  return new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth');
};

export const createAlchemyProvider = () => {
  return new ethers.providers.JsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${import.meta.env.VITE_ALCHEMY_ID}`
  );
};

export const createInfuraProvider = () => {
  return new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_ID}`
  );
};

export interface EndpointWithTimeResponse {
  [key: string]: number;
  responseTime: number;
}

export const hitEndpointWithResponseTime = async (
  provider: ethers.providers.Provider,
  endpoint: string
): Promise<EndpointWithTimeResponse> => {
  const start = window.performance.now();
  // @ts-expect-error
  const blockNumber = await provider[endpoint]!();
  const end = window.performance.now();
  return {
    blockNumber,
    responseTime: Math.round(end - start),
  };
};

export const getBlockNumberWithResponseTime = async (
  provider: ethers.providers.Provider
) => {
  const start = window.performance.now();
  const blockNumber = await provider.getBlockNumber();
  const end = window.performance.now();
  return {
    blockNumber,
    responseTime: Math.round(end - start),
  };
};
