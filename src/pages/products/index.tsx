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
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { RiAddLine } from "react-icons/ri";
import Pagination from "../../components/Pagination";
import Link from "next/link";
import { useEffect } from "react";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  category: string;
  barcode?: string;
  code: string;
}

const items: ProductProps[] = [
  {
    name: "Picolé de Abacate - Tradicional",
    description: "Picolé Tradicional de abacate com açúcar",
    category: "Picolé tradicional",
    barcode: "02980349802",
    code: "PA001",
    price: 6.5,
  },
  {
    name: "Picolé de Banana - Tradicional",
    description: "Picolé Tradicional de Banana com açúcar",
    category: "Picolé tradicional",
    barcode: "02980349802",
    code: "PB002",
    price: 6.5,
  },
  {
    name: "Picolé de Cajuzinho do Cerrado - Tradicional",
    description: "Picolé Tradicional de Cajuzinho do Cerrado com açúcar",
    category: "Picolé tradicional",
    barcode: "02980349802",
    code: "PC003",
    price: 6.5,
  },
  {
    name: "Picolé de Brigadeiro - Especial",
    description: "Picolé Especial de Brigadeiro com açúcar",
    category: "Picolé Especial",
    barcode: "02980349802",
    code: "PE004",
    price: 6.5,
  },
  {
    name: "Picolé de Doce de Leite - Especial",
    description: "Picolé Especial de Doce de Leite com açúcar",
    category: "Picolé Especial",
    barcode: "02980349802",
    code: "PE005",
    price: 6.5,
  },
  {
    name: "Picolé de Ninho com Abacaxi - Especial",
    description: "Picolé Especial de Ninho com Abacaxi com açúcar",
    category: "Picolé Especial",
    barcode: "02980349802",
    code: "PE006",
    price: 6.5,
  },
  {
    name: "Sorvete Self-Service - 100g",
    description: "Soverte Self-Service no peso",
    category: "Sorvete Self-Service",
    barcode: "02980349802",
    code: "SS001",
    price: 6.2,
  },
];

export default function ProductsList() {
  useEffect(() => {
    fetch("https://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

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
              {items.map((item, index) => (
                <Tr key={index}>
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
        </Box>
      </Flex>
    </Box>
  );
}
