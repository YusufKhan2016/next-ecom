"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { ChevronRightIcon, LayoutDashboard, LucideIcon } from "lucide-react"
import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    id: number
    title: string
    route: string
    icon: LucideIcon
    isActive?: boolean
    children?: {
      title: string
      route: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          console.log(item)
          const Icon = item?.icon

          console.log(typeof Icon)
        return (
          <Collapsible key={item.title} asChild defaultOpen={item.id}>
            <SidebarMenuItem>  
              {item?.children?.length > 0 ? (
                <>
                  
                  <CollapsibleTrigger asChild>
                    <div className="group">
                      <SidebarMenuButton tooltip={item.title}>
                        
                          <LayoutDashboard className="size-4" />
                          <span>{item.title}</span>
                        
                      </SidebarMenuButton>

                      <SidebarMenuAction className="group-data-[state=open]:rotate-90">
                        <ChevronRightIcon />
                      </SidebarMenuAction>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.route}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                  
                </>
              ) : (
                  <>
                    <SidebarMenuButton asChild>
                      <Link href={item.route}>
                        <LayoutDashboard className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </>
              )}
            </SidebarMenuItem>
          </Collapsible>
        )})}
      </SidebarMenu>
    </SidebarGroup>
  )
}
