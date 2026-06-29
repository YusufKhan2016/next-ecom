"use client"
import AccountSidebar from '@/components/layout/website/accountSidebar'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Box, LucideProps, MapPinned, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { ForwardRefExoticComponent } from 'react'

interface sidebarLinksType {
  label: string,
  link: string,
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>,
  isActive: boolean
}

const sidebarLinks: sidebarLinksType[] = [
  { label: 'Account Details', link: '/account', icon: User, isActive: false },
  { label: 'Orders', link: '/account/orders', icon: Box, isActive: false },
  { label: 'Address', link: '/account/address', icon: MapPinned, isActive: false },
]

export default function AccountLayout({
    children
  }: {
  children: React.ReactNode
  }) {
  
  const pathName = usePathname();
  const currentPageData = sidebarLinks.find((data) => data.link === pathName);

  return (
    <>
      <section>
        <div className='flex container gap-4 px-4 py-12 mx-auto'>
          <AccountSidebar 
            sidebarLinks={sidebarLinks} 
            pathName={pathName}
          />
          
          <Card className='flex-1 p-5'>
            <CardTitle className='mb-4'>{ currentPageData?.label }</CardTitle>
            {children}
          </Card>
        </div>
      </section>
    </>
  )
} 
