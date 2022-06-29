import { Icon, Text, useMediaQuery } from "@chakra-ui/react";
import { FaIceCream } from "react-icons/fa";

export function Logo() {
  const [isMobileVersion] = useMediaQuery("(min-width: 400px)");

  return (
    <Text
      fontSize={{ md: "2xl", lg: "3xl" }}
      fontWeight="bold"
      letterSpacing="tight"
      color="green.500"
      w="64"
    >
      {isMobileVersion && "Sorveteria"}

      <Icon
        as={FaIceCream}
        fontSize={{ sm: "24", md: "20", lg: "24" }}
        color="orange.400"
      />
    </Text>
  );
}
