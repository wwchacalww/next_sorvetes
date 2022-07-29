import {
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  Box,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  FormControl,
  FormLabel,
  Button,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useMutation } from "react-query";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";
import { api } from "../../services/apiClient";
import { withSSRAuth } from "../../utils/withSSRAuth";
import { setupAPIClient } from "../../services/api";

type CreateProductFormData = {
  name: string;
  category: string;
  description: string;
  barcode?: string;
  code: string;
  price: number;
};

const createProductFormSchema = yup.object().shape({
  name: yup.string().required("Nome do produto é obrigatório"),
  category: yup.string().required("Tipo do produto é obrigatória"),
  description: yup.string().required("Descrição do produto é obrigatória"),
  barcode: yup.string(),
  code: yup
    .string()
    .max(10, "O Código do produto deve ter no máximo 10 caracteres")
    .required("Código do produto é obrigatório"),
});

export default function ProductCreate() {
  const router = useRouter();

  const createProduct = useMutation(
    async (product: CreateProductFormData) => {
      const response = await api.post("products", {
        ...product,
      });

      return response.data.product;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
      },
    }
  );

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createProductFormSchema),
  });

  const { errors } = formState;

  const handleCreate: SubmitHandler<CreateProductFormData> = async (values) => {
    await createProduct.mutateAsync(values);
    router.push("/products");
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" mx="auto" my="6" maxWidth="1480px" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          bg="green.900"
          p={["6", "8"]}
          borderRadius="8"
          onSubmit={handleSubmit(handleCreate as any)}
        >
          <Flex justify="space-between" align="center">
            <Heading color="green.50" size="lg" fontWeight="normal">
              Novo Produto
            </Heading>
          </Flex>
          <Divider my="4" borderColor="green.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                type="text"
                label="Nome do Produto"
                error={errors.name as any}
                {...register("name")}
              />
              <Input
                type="text"
                label="Tipo do Produto"
                error={errors.category as any}
                {...register("category")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                type="text"
                label="Descrição do Produto"
                error={errors.description as any}
                {...register("description")}
              />
              <Input
                type="text"
                label="Código de barra"
                error={errors.barcode as any}
                {...register("barcode")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <FormControl>
                <FormLabel htmlFor="price" color="white">
                  Preço
                </FormLabel>
                <NumberInput
                  defaultValue={0}
                  precision={2}
                  step={0.2}
                  focusBorderColor="purple.500"
                  bg="green.50"
                  variant="filled"
                  color="green.700"
                  _hover={{
                    bgColor: "green.50",
                  }}
                  _focus={{
                    bgColor: "green.50",
                  }}
                  name="price"
                  rounded={8}
                >
                  <NumberInputField bg="green.50" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <Input
                {...register("code")}
                error={errors.description as any}
                type="text"
                label="Código simples"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/products" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="orange"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get("/users/me");

    console.log("SSRAuth: ", response.data);
    return {
      props: {},
    };
  },
  {
    permissions: ["users.create"],
    roles: ["administrator"],
  }
);
