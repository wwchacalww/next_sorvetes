import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import {
  FaBatteryQuarter,
  FaBuilding,
  FaCalendarAlt,
  FaCartPlus,
  FaCashRegister,
  FaFolderPlus,
  FaListAlt,
  FaSortNumericUp,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing={12} align="flex-start">
        <Box>
          <Text fontWeight="bold" fontSize="small" color="green.800">
            PRODUTOS
          </Text>
          <Stack spacing={4} mt={8} align="stretch">
            <Link display="flex" alignContent="center">
              <Icon as={FaFolderPlus} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Registrar
              </Text>
            </Link>
            <Link display="flex" alignContent="center">
              <Icon as={FaListAlt} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Listar
              </Text>
            </Link>
            <Link display="flex" alignContent="center">
              <Icon as={FaCartPlus} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Lista de Compras
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="small" color="green.800">
            ESTOQUE
          </Text>
          <Stack spacing={4} mt={8} align="stretch">
            <Link display="flex" alignContent="center">
              <Icon as={FaBuilding} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Atual
              </Text>
            </Link>
            <Link display="flex" alignContent="center">
              <Icon as={FaCalendarAlt} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Fluxo Mensal
              </Text>
            </Link>
            <Link display="flex" alignContent="center">
              <Icon as={FaBatteryQuarter} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Em Falta
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize="small" color="green.800">
            RELATÓRIOS
          </Text>
          <Stack spacing={4} mt={8} align="stretch">
            <Link display="flex" alignContent="center">
              <Icon as={FaCashRegister} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Caixa
              </Text>
            </Link>
            <Link display="flex" alignContent="center">
              <Icon as={FaSortNumericUp} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Mais Vendidos
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
