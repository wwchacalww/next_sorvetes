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
import Input from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function ProductCreate() {
  return (
    <Box>
      <Header />
      <Flex w="100%" mx="auto" my="6" maxWidth="1480px">
        <Sidebar />

        <Box flex="1" bg="green.900" p="8" borderRadius="8">
          <Flex justify="space-between" align="center">
            <Heading color="green.50" size="lg" fontWeight="normal">
              Novo Produto
            </Heading>
          </Flex>
          <Divider my="4" borderColor="green.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" type="text" label="Nome do Produto" />
              <Input name="category" type="text" label="Tipo do Produto" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input
                name="description"
                type="text"
                label="Descrição do Produto"
              />
              <Input name="barcode" type="text" label="Código de barra" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
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

              <Input name="code" type="text" label="Código simples" />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="orange">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
