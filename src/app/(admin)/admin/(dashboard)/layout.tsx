"use client"

import {
  AdminSidebar,
  NavUser
} from "@/components/layout/admin"
import { ThemeProvider } from "@/providers/theme-provider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  Separator
} from "@/components/ui"
import { ThemeSwitcher } from "@/components/ui"
import RouteGuard from "@/components/guards/route-guard"
import AdminBreadcrumb from "@/components/layout/admin/admin-breadcrumb";
import React from "react";
import {NavbarDataType, UserDataType} from "@/types";
import {usePathname} from "next/navigation";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {

  const [menus, setMenus] = React.useState<NavbarDataType>([]);
  const [user, setUser] = React.useState<UserDataType>();

  React.useEffect(() => {
    const menusData = localStorage.getItem("menus");
    if(menusData) {
      setMenus(JSON.parse(menusData))
    }

    const userData = localStorage.getItem("user")
    if(userData) {
      setUser(JSON.parse(userData))
    }
  }, []);

  const pathname: string = usePathname();

  return (  
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <AdminSidebar sideBarDatas={menus} />

          <SidebarInset>
            <header className="sticky rounded-t-xl top-0 z-10 bg-background/90 backdrop-blur-2xl flex py-1.5 border-b shrink-0 drop-shadow-2xl items-center gap-2">
              <div className="flex items-center justify-between w-full px-4">
                <div className="flex items-center gap-2">
                  <SidebarTrigger />
                  
                  <Separator
                    orientation="vertical"
                    className="mr-2"
                  />

                  <AdminBreadcrumb
                    menus={menus}
                    pathname={pathname}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <ThemeSwitcher />
                  <Separator
                    orientation="vertical"
                  />
                  {user && <NavUser user={user} />}
                </div>
              </div>
            </header>

            <main className="p-4">
              <RouteGuard >
                {children}
              </RouteGuard>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
      
    </>
  )
}

