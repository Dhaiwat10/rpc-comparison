import {
  Button,
  Container,
  Heading,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useEndpointWithResponseTime } from './hooks/useEndpointWithResponseTime';
import { useProvider } from './hooks/useProvider';

function App() {
  const alchemyProvider = useProvider('alchemy');
  const ankrProvider = useProvider('ankr');
  const infuraProvider = useProvider('infura');
  const { responseTime: alchemyResponseTime, refetch: refetchAlchemy } =
    useEndpointWithResponseTime(
      alchemyProvider as ethers.providers.Provider,
      'getBlockNumber'
    );
  const { responseTime: ankrResponseTime, refetch: refetchAnkr } =
    useEndpointWithResponseTime(
      ankrProvider as ethers.providers.Provider,
      'getBlockNumber'
    );
  const { responseTime: infuraResponseTime, refetch: refetchInfura } =
    useEndpointWithResponseTime(
      infuraProvider as ethers.providers.Provider,
      'getBlockNumber'
    );

  const refetch = async () => {
    refetchAlchemy();
    refetchAnkr();
    refetchInfura();
  };

  return (
    <VStack paddingY='20'>
      <Heading>RPC latency comparison</Heading>

      <TableContainer>
        <Table variant='striped'>
          <TableCaption>eth_getBlockNumber endpoint</TableCaption>
          <Thead>
            <Tr>
              <Th>RPC provider</Th>
              <Th isNumeric>Response time (in ms)</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>Ankr</Td>
              <Td isNumeric>{ankrResponseTime}</Td>
            </Tr>
            <Tr>
              <Td>Alchemy</Td>
              <Td isNumeric>{alchemyResponseTime}</Td>
            </Tr>
            <Tr>
              <Td>Infura</Td>
              <Td isNumeric>{infuraResponseTime}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Button onClick={refetch}>🔁 Refresh</Button>

      <Container>
        <Text fontSize='xs' color='gray'>
          You can verify these results in your browser's network tab. The
          response times showing up on this page currently are a bit slower than
          they actually are, but they are slower for all three providers so this
          still gives you an accurate picture about the order of the providers
          in terms of speed. Working on a fix!
        </Text>
      </Container>

      <Link
        isExternal
        href='https://github.com/dhaiwat10/rpc-comparison'
        textDecoration='underline'
      >
        Source code
      </Link>
    </VStack>
  );
}

export default App;
