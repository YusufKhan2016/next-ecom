"use client";

import { navbarDataType } from "@/types";
import { usePathname } from "next/navigation";
import React from "react";

function findMenuByRoute(menus: any[], pathname: string): any {
  for (const menu of menus) {
    if (menu.route === pathname) {
      return menu;
    }

    if (menu.children?.length) {
      const found = findMenuByRoute(menu.children, pathname);

      if (found) {
        return found;
      }
    }
  }

  return null;
}

export default function RouteGuard({
  children,
}: {
  children: React.ReactNode;
  }) {
  const [menus, setMenus] = React.useState<navbarDataType>([]);
  const [permissions, setPermissions] = React.useState<string[]>([]);
  const pathname = usePathname();

  React.useEffect(() => {
    const data = localStorage.getItem("menus");
    const permissionDatas = localStorage?.getItem("permissions") || "[]"
    
    if (permissionDatas) {
      setPermissions(JSON.parse(permissionDatas))
    }
    if (data) {
      setMenus(JSON.parse(data));
    }
  }, []);

  const currentMenu = findMenuByRoute(menus, pathname);

  if (!currentMenu) {
    return <>you are forbidden</>
  }

  if (
    currentMenu.permission &&
    !permissions.includes(currentMenu.permission)
  ) {
    return <>you are forbidden</>
  }

  return <>{children}</>;
}