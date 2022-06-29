import { Flex, Input, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="purple.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px={4}
        mr={4}
        placeholder="Código do produto"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={FaSearch} fontSize={20} />
    </Flex>
  );
}
