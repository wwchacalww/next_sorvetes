import { Stack } from "@chakra-ui/react";
import {
  FaFolderPlus,
  FaListAlt,
  FaCartPlus,
  FaBuilding,
  FaCalendarAlt,
  FaBatteryQuarter,
  FaCashRegister,
  FaSortNumericUp,
} from "react-icons/fa";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="PRODUTOS">
        <NavLink icon={FaFolderPlus}>Registrar</NavLink>
        <NavLink icon={FaListAlt}>Listar</NavLink>
        <NavLink icon={FaCartPlus}>Lista de Compras</NavLink>
      </NavSection>

      <NavSection title="ESTOQUE">
        <NavLink icon={FaBuilding}>Atual</NavLink>
        <NavLink icon={FaCalendarAlt}>Fluxo Mensal</NavLink>
        <NavLink icon={FaBatteryQuarter}>Em Falta</NavLink>
      </NavSection>

      <NavSection title="RELATÓRIOS">
        <NavLink icon={FaCashRegister}>Caixa</NavLink>
        <NavLink icon={FaSortNumericUp}>Mais Vendidos</NavLink>
      </NavSection>
    </Stack>
  );
}
