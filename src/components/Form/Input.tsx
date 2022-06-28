import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {label && (
        <FormLabel htmlFor={name} color="white">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name="name"
        id="name"
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
        {...rest}
      />
    </FormControl>
  );
}
