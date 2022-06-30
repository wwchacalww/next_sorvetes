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
        <NavLink href="/products/create" icon={FaFolderPlus}>
          Registrar
        </NavLink>
        <NavLink href="/products" icon={FaListAlt}>
          Listar
        </NavLink>
        <NavLink href="/products" icon={FaCartPlus}>
          Lista de Compras
        </NavLink>
      </NavSection>

      <NavSection title="ESTOQUE">
        <NavLink href="/dashboard" icon={FaBuilding}>
          Atual
        </NavLink>
        <NavLink href="/dashboard" icon={FaCalendarAlt}>
          Fluxo Mensal
        </NavLink>
        <NavLink href="/dashboard" icon={FaBatteryQuarter}>
          Em Falta
        </NavLink>
      </NavSection>

      <NavSection title="RELATÓRIOS">
        <NavLink href="/dashboard" icon={FaCashRegister}>
          Caixa
        </NavLink>
        <NavLink href="/dashboard" icon={FaSortNumericUp}>
          Mais Vendidos
        </NavLink>
      </NavSection>
    </Stack>
  );
}
