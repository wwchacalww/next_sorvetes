import {
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  Box,
  Button,
  HStack,
  Checkbox,
  Text,
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
import { useProduct } from "../../services/hooks/useProduct";

type UpdateProductFormData = {
  id: string;
  name: string;
  category: string;
  description: string;
  barcode?: string;
  code: string;
};

const updateProductFormSchema = yup.object().shape({
  name: yup.string().required("Nome do produto é obrigatório"),
  category: yup.string().required("Tipo do produto é obrigatória"),
  description: yup.string().required("Descrição do produto é obrigatória"),
  barcode: yup.string(),
  code: yup
    .string()
    .max(10, "O Código do produto deve ter no máximo 10 caracteres")
    .required("Código do produto é obrigatório"),
});

export default function ProductEdit() {
  const router = useRouter();

  const { id } = router.query;

  const { data } = useProduct(id as string);

  const updateUser = useMutation(
    async (product: UpdateProductFormData) => {
      const response = await api.put("products", {
        id,
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
    resolver: yupResolver(updateProductFormSchema),
  });

  const { errors } = formState;

  const handleUpdate: SubmitHandler<UpdateProductFormData> = async (values) => {
    await updateUser.mutateAsync(values);
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
          onSubmit={handleSubmit(handleUpdate as any)}
        >
          <Flex justify="space-between" align="center">
            <Heading color="green.50" size="lg" fontWeight="normal">
              Editar Produto
            </Heading>
          </Flex>
          <Divider my="4" borderColor="green.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Nome do Produto"
                type="text"
                error={errors.email as any}
                {...register("name")}
                defaultValue={data?.name}
              />
              <Input
                label="Tipo do Produto"
                type="text"
                error={errors.category as any}
                {...register("category")}
                defaultValue={data?.category}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                type="text"
                label="Descrição do Produto"
                error={errors.description as any}
                {...register("description")}
                value={data?.description}
              />
              <Input
                type="text"
                label="Código de barra"
                error={errors.barcode as any}
                {...register("barcode")}
                defaultValue={data?.barcode}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                {...register("code")}
                error={errors.description as any}
                type="text"
                label="Código simples"
                defaultValue={data?.code}
              />
              <Checkbox isChecked={data?.isActive}>
                <Text color="white">Produto em estoque?</Text>
              </Checkbox>
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
