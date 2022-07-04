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
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";
import Pagination from "../../components/Pagination";
import Link from "next/link";
import { useQuery } from "react-query";
interface ProductProps {
  name: string;
  description: string;
  category: string;
  barcode?: string;
  code: string;
}

export default function ProductsList() {
  const { data, isLoading, error } = useQuery(
    "products",
    async () => {
      const response = await fetch("https://localhost:3000/api/products");
      const data = await response.json();
      return data.products.map((product: ProductProps) => {
        return {
          name: product.name,
          description: product.description,
          category: product.category,
          barcode: product.barcode,
          code: product.code,
        };
      });
    },
    {
      staleTime: 1000 * 10,
    }
  );

  return (
    <Box>
      <Header />
      <Flex w="100%" mx="auto" my="6" maxWidth="1480px">
        <Sidebar />

        <Box flex="1" bg="green.900" p="8" borderRadius="8">
          <Flex justify="space-between" align="center">
            <Heading color="green.50" size="lg" fontWeight="normal">
              Produtos
            </Heading>

            <Link href="/products/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="orange"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Divider my="4" borderColor="green.700" />
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
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
                  {data.map((item: ProductProps) => (
                    <Tr key={item.code}>
                      <Td w="340px">
                        <Box>
                          <Text fontWeight="bold">{item.name}</Text>
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
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
