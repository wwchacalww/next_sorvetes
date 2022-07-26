type User = {
  permissions: string[];
  roles: string[];
};

type validateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: validateUserPermissionsParams) {
  if (permissions && permissions.length > 0) {
    console.log("permissions aqui:", permissions);
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  } else if (roles && roles.length > 0) {
    console.log("roles aqui:", roles.length);

    const hasAllroles = roles.some((role) => user.roles.includes(role));
    if (!hasAllroles) {
      return false;
    }
  } else {
    return false;
  }

  return true;
}
