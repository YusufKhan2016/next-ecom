"use client"
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui"
import { NavbarDataType } from "@/types"
import { ChevronRightIcon, LayoutDashboard, LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import * as LucideIcons from "lucide-react";


export function NavMain({ items }: { items: NavbarDataType }) {
  
  const [id, setId] = useState<number | null>(null);

  const route = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items?.map((item) => {
          const Icon = LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon;
          
        return (
          <Collapsible key={item?.title} asChild>
            <SidebarMenuItem>  
              {(item?.children?.length ?? 0) > 0 ? (
                <>
                  
                  <CollapsibleTrigger asChild>
                    <div className="group my-1">
                      <SidebarMenuButton isActive={item?.id === id} tooltip={item?.title}>
                        
                          {Icon && <Icon className="size-4" />}
                          <span>{item?.title}</span>
                        
                      </SidebarMenuButton>

                      <SidebarMenuAction className="group-data-[state=open]:rotate-90 my-1">
                        <ChevronRightIcon />
                      </SidebarMenuAction>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item?.children?.map((subItem) => {
                        const Icon = LucideIcons[subItem.icon as keyof typeof LucideIcons] as LucideIcon;
                        return (
                        <SidebarMenuSubItem key={subItem?.title}>
                          <SidebarMenuSubButton 
                            isActive={`${subItem?.route}` === route}
                            onClick={()=> setId(subItem?.parent_id)}
                            asChild
                          >
                            <Link href={subItem?.route}>
                              {Icon && <Icon className="size-4" />}
                              <span>{subItem?.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )})}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                  
                </>
              ) : (
                  <>
                    <SidebarMenuButton isActive={`${item?.route}` === route} onClick={() => setId(null)} asChild>
                      <Link href={item.route}>
                        {Icon && <Icon className="size-4" />}
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
