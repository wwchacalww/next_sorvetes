import { Icon, Text, Link as ChakraLink } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps {
  children: string;
  icon: ElementType;
}
export function NavLink({ children, icon }: NavLinkProps) {
  return (
    <ChakraLink display="flex" alignContent="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  );
}
