import { ReactNode } from "react";
import { useCan } from "../services/hooks/useCan";

type CanProps = {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
};

export function Can({ children, permissions, roles }: CanProps) {
  const userCanSeeComponent = useCan({ permissions, roles });

  if (!userCanSeeComponent) {
    return null;
  }

  return <>{children}</>;
}
