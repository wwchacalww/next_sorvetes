import { Box, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export default function Pagination() {
  return (
    <HStack spacing={6} mt="8" justify="space-between" align="center">
      <Box color="whiteAlpha.600">
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        <PaginationItem number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} isCurrent />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </HStack>
    </HStack>
  );
}
