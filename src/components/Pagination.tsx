import { Box, Button, HStack } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <HStack spacing={6} mt="8" justify="space-between" align="center">
      <Box color="whiteAlpha.600">
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="green"
          disabled
          _disabled={{
            bg: "green.600",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          color="whiteAlpha.600"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          color="whiteAlpha.600"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          color="whiteAlpha.600"
          _hover={{
            bg: "gray.500",
          }}
        >
          4
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          color="whiteAlpha.600"
          _hover={{
            bg: "gray.500",
          }}
        >
          5
        </Button>
      </HStack>
    </HStack>
  );
}
