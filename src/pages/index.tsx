import { Flex, Button, Stack } from "@chakra-ui/react";
import Input from "../components/Form/Input";

function SignIn() {
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
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </Stack>

        <Button type="submit" mt={6} colorScheme="purple" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

export default SignIn;
