"use client"

import { Card, CardContent } from '@/components/ui/card'
import { useUserStore } from '@/store/website/user'
import { Box, LogOut, LucideProps, MapPinned, User } from 'lucide-react'
import Link from 'next/link'
import React, { ForwardRefExoticComponent } from 'react'

interface sidebarLinksType {
  label: string,
  link: string,
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
  isActive: boolean
}

export default function AccountSidebar(
  { sidebarLinks, pathName }
  :
  {
    sidebarLinks: sidebarLinksType[],
    pathName: string
  }
  ) {
  
  const setUser = useUserStore((state) => state.setUser)

  return (
    <>
      <Card className='pt-3 pb-2 h-full'>
        <CardContent>
          <div className='flex flex-col'>
            
            {
              sidebarLinks.map((data, idx) => {
                const Icon = data.icon;
                
                if (pathName === data.link) {
                  data.isActive = true;
                } else {
                  data.isActive = false;
                }

                return (
                  <Link
                    key={idx}
                    href={data.link}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg duration-100 ${data.isActive? 'bg-foreground text-background': 'bg-background text-foreground'}`}
                  >
                    <Icon size={20} />
                    {data.label}
                  </Link>
                )
              })
            }
            <Link
              href={"/"}
              onClick={setUser}
              className='flex gap-2 py-2 px-4 cursor-pointer'
            >
              <LogOut size={20} />
              Log out
            </Link>

          </div>
        </CardContent>
      </Card>
    </>
  )
}
