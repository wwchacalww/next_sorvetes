import { Flex, HStack, Icon } from "@chakra-ui/react";
import { FaRegBell, FaUserPlus } from "react-icons/fa";

export function NotificationsNav() {
  return (
    <Flex ml="auto" align="center">
      <HStack
        spacing={8}
        mx={8}
        pr={8}
        py={1}
        color="green.200"
        borderRightWidth={1}
        borderColor="green.200"
      >
        <Icon as={FaRegBell} fontSize={20} />
        <Icon as={FaUserPlus} fontSize={20} />
      </HStack>
    </Flex>
  );
}
