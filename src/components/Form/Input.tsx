import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <FormLabel htmlFor={name} color="white">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
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
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage color="red.100" fontWeight="bold">
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
