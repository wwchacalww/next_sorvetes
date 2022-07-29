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
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {
  RiAddLine,
  RiEditBoxLine,
  RiMoneyDollarCircleFill,
} from "react-icons/ri";
import Pagination from "../../components/Pagination";
import NextLink from "next/link";
import { useProducts } from "../../services/hooks/useProducts";
import { useState } from "react";
import { api } from "../../services/apiClient";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { queryClient } from "../../services/queryClient";
import { useMutation } from "react-query";
import { SubmitHandler, useForm } from "react-hook-form";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  category: string;
  barcode?: string;
  code: string;
  price: number;
}

interface SetPriceProps {
  product_id: string;
  price: number;
  cost: number;
}

const setPriceFormSchema = yup.object().shape({
  cost: yup.number().required("Preço de custo é obrigatório"),
  price: yup.number().required("Preço de venda é obrigatório"),
});

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

  const [productEntity, setProductEntity] = useState<ProductProps>();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleSetPrice = (entity: ProductProps) => {
    setProductEntity(entity);
    onOpen();
  };

  const setPriceMutation = useMutation(async (props: SetPriceProps) => {
    const response = await api.post("/products/set-price", props);
    return response.data.product;
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(setPriceFormSchema),
  });

  const { errors } = formState;

  const handleSetPriceSubmit: SubmitHandler<{
    price: string;
    cost: string;
  }> = async (data) => {
    const result = await setPriceMutation.mutateAsync({
      product_id: productEntity.id,
      cost: Number(data.cost),
      price: Number(data.price),
    });
    console.log(result);
    onClose();
    reset();
  };

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
                    <Th w={30} textAlign="center" color="whiteAlpha.800">
                      Preço
                    </Th>
                    <Th w="1"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.products.map((item: ProductProps) => (
                    <Tr key={item.id}>
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
                      <Td textAlign="center">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.price)}
                      </Td>
                      <Td>
                        <HStack>
                          <Link href={`/products/edit/?id=${item.id}`}>
                            <Icon as={RiEditBoxLine} />
                          </Link>
                          <Button
                            variant="unstyled"
                            size="md"
                            onClick={() => handleSetPrice(item)}
                          >
                            <Icon
                              color="orange"
                              as={RiMoneyDollarCircleFill}
                              fontSize="25"
                            />
                          </Button>
                        </HStack>
                      </Td>
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

      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
        <ModalOverlay />
        <ModalContent>
          <Box as="form" onSubmit={handleSubmit(handleSetPriceSubmit as any)}>
            {productEntity ? (
              <>
                <ModalHeader>{productEntity.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb="6">
                  <Text>{productEntity.description}</Text>
                  <FormControl label="Custo" py="4">
                    <FormLabel htmlFor="cost">Preço de custo</FormLabel>
                    <Input type="text" w="sm" {...register("cost")} />
                  </FormControl>
                  <FormControl label="Preço" py="2">
                    <FormLabel htmlFor="price">Preço de venda</FormLabel>
                    <Input type="text" w="sm" {...register("price")} />
                  </FormControl>
                </ModalBody>
              </>
            ) : (
              <ModalHeader>Carregando...</ModalHeader>
            )}

            <ModalFooter>
              <Button type="submit" colorScheme="green" mr={3}>
                Salvar
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
}
