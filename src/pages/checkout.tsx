import {
  Button,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Text,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
interface ItemProps {
  name: string;
  quantity: number;
  price: number;
  category: string;
  total: number;
}

interface OrderProps {
  items: ItemProps[];
  total: number;
  payment_method: string;
}
export default function Checkout() {
  const items: ItemProps[] = [
    {
      name: "Picolé de Morango - Tradicional",
      quantity: 2,
      price: 6.5,
      category: "Picolé",
      total: 13,
    },
    {
      name: "Sorvete Self-service - 100g R$ 6,20",
      quantity: 235,
      price: 6.2,
      category: "Sorvete no peso",
      total: 14.57,
    },
  ];
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Flex w="100%">
          <Box>
            <Text fontSize="20" fontWeight="bold" ml="4" my="4">
              Ordem de Pagamento
            </Text>
            <TableContainer
              w="100%"
              maxW="880px"
              bg="white"
              p="4"
              rounded="20"
              borderWidth={2}
              borderColor="green.200"
            >
              <Table colorScheme="green">
                <Thead>
                  <Tr>
                    <Th width="2">#</Th>
                    <Th>Produto</Th>
                    <Th isNumeric>Qnt</Th>
                    <Th isNumeric>Preço</Th>
                    <Th>Tipo</Th>
                    <Th isNumeric>Total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {items.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.name}</Td>
                      <Td isNumeric>{item.quantity}</Td>
                      <Td isNumeric>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.price)}
                      </Td>
                      <Td>{item.category}</Td>
                      <Td isNumeric>
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.total)}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th>
                      <Select
                        name="paymentMethod"
                        placeholder="Forma de pagamento"
                      >
                        <option value="cash">Dinheiro</option>
                        <option>Pix</option>
                        <option>Cartão de crédito</option>
                        <option>Cartão de débito</option>
                      </Select>
                    </Th>
                    <Th></Th>
                    <Th></Th>
                    <Th>Total</Th>
                    <Th isNumeric>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(
                        items.reduce((acc, item) => acc + item.total, 0)
                      )}
                    </Th>
                  </Tr>
                </Tfoot>
                <TableCaption textAlign="right">
                  <Button size="lg" colorScheme="green" variant="outline">
                    Salvar
                  </Button>
                </TableCaption>
              </Table>
            </TableContainer>
          </Box>

          <Box ml={4} w="100%" maxW={400}>
            <Text fontSize="20" fontWeight="bold" ml="4" my="4">
              Consulta{" "}
            </Text>
            <Box
              bg="white"
              p="4"
              rounded="20"
              borderWidth={2}
              borderColor="green.200"
            >
              <FormControl>
                <FormLabel htmlFor="code">Código do Produto</FormLabel>
                <Input name="code" id="code" placeholder="Código do Produto" />
              </FormControl>
              <Text fontWeight="bold" mt="2">
                Produto
              </Text>
              <Text>Picolé de Manga - Tradicional</Text>
              <Text fontSize="small">
                Saboroso picolé de manga tipo tradicional com o gosto da fruta.
              </Text>
              <Text fontWeight="bold" mt="2">
                Valor
              </Text>
              <Text align="right">R$ 6,50</Text>
              <FormControl my="4">
                <FormLabel htmlFor="quantity">Quantidade</FormLabel>
                <NumberInput min={1} w="40" ml="auto">
                  <NumberInputField id="quantity" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <Flex justify="right" my="8">
                <Button size="lg" colorScheme="green" variant="outline">
                  Enviar
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
