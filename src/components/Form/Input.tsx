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
        bg="green.900"
        variant="filled"
        color="white"
        _hover={{
          bgColor: "green.900",
        }}
        _focus={{
          bgColor: "green.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}
