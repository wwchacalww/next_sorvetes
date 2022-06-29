import { Icon, Text } from "@chakra-ui/react";
import { FaIceCream } from "react-icons/fa";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      color="green.500"
      w="64"
    >
      Sorveteria
      <Icon as={FaIceCream} fontSize={24} color="orange.400" />
    </Text>
  );
}
