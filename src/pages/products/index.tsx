import {
  Text,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Spinner,
  Link,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";
import Pagination from "../../components/Pagination";
import NextLink from "next/link";
import { useProducts } from "../../services/hooks/useProducts";
import { useState } from "react";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
interface ProductProps {
  id: string;
  name: string;
  description: string;
  category: string;
  barcode?: string;
  code: string;
}

export default function ProductsList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useProducts(page);

  async function handlePrefetchProduct(productId: string) {
    await queryClient.prefetchQuery(
      ["product", { id: productId }],
      async () => {
        const response = await api.get(`/products/${productId}`);
        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10,
      }
    );
  }
  return (
    <Box>
      <Header />
      <Flex w="100%" mx="auto" my="6" maxWidth="1480px">
        <Sidebar />

        <Box flex="1" bg="green.900" p="8" borderRadius="8">
          <Flex justify="space-between" align="center">
            <Heading color="green.50" size="lg" fontWeight="normal">
              Produtos
              {!isLoading && isFetching && (
                <Spinner size="sm" ml="4" color="green.100" />
              )}
            </Heading>

            <NextLink href="/products/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="orange"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>
          <Divider my="4" borderColor="green.700" />
          {isLoading ? (
            <Flex justify="center">
              <Spinner color="green.100" />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Não foi possível obter a lista de produtos</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha" color="whiteAlpha.700">
                <Thead>
                  <Tr>
                    <Th w="400px" color="whiteAlpha.800">
                      Produto
                    </Th>
                    <Th w={48} color="whiteAlpha.800">
                      Categoria
                    </Th>
                    <Th w={48} color="whiteAlpha.800">
                      Código de Barra
                    </Th>
                    <Th w={40} textAlign="center" color="whiteAlpha.800">
                      Código Simples
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.products.map((item: ProductProps) => (
                    <Tr key={item.code}>
                      <Td w="340px">
                        <Box>
                          <Link
                            color="white"
                            onMouseEnter={() => handlePrefetchProduct(item.id)}
                          >
                            <Text fontWeight="bold">{item.name}</Text>
                          </Link>
                          <Text fontSize="sm">{item.description}</Text>
                        </Box>
                      </Td>
                      <Td>{item.category}</Td>
                      <Td>{item.barcode}</Td>
                      <Td textAlign="center">{item.code}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
