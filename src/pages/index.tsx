import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="green.600"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email" color="white">
              E-mail
            </FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              bg="green.900"
              focusBorderColor="purple.500"
              variant="filled"
              color="white"
              _hover={{
                bgColor: "green.900",
              }}
              _focus={{
                bgColor: "green.900",
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" color="white">
              Senha
            </FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              bg="green.900"
              focusBorderColor="purple.500"
              variant="filled"
              color="white"
              _hover={{
                bgColor: "green.900",
              }}
              _focus={{
                bgColor: "green.900",
              }}
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt={6} colorScheme="purple" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default Home;
