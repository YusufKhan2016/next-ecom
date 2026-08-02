"use client"

import * as React from "react"

import { NavMain, NavUser } from "@/components/layout/admin"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Button
} from "@/components/ui"
import { TerminalIcon, Globe, ExternalLink } from "lucide-react";

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const datas = localStorage?.getItem('menus');

  let sideBarDatas;

  if (datas) {
    sideBarDatas = JSON.parse(datas);
  } else {
    sideBarDatas = null;
  }
  
  return (
    <Sidebar variant="inset"  {...props}>
      <SidebarHeader >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <TerminalIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={sideBarDatas} />
      </SidebarContent>
      
      <SidebarFooter >
        <Button variant={'ghost'} asChild>
          <a href="/" target="_blank" className="flex gap-10 items-center text-sm" >
            <span className="flex items-center gap-2">
              <Globe/>
              Visit Next Ecom
            </span>

            <ExternalLink/>
          </a>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
