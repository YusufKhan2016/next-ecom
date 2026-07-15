import { AdminSidebar } from "@/components/layout/admin/adminSidebar"
import { ThemeProvider } from "@/components/features/theme/themeProvider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeSwitcher } from "@/components/features/theme/themeSwitcher"
import { NavUser } from "@/components/layout/admin/navUser"

export default function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (  
    <>
      <section>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AdminSidebar />

            <SidebarInset>
              <header className="sticky rounded-t-xl top-0 z-10 bg-background/90 backdrop-blur-2xl flex py-1.5 border-b shrink-0 drop-shadow-2xl items-center gap-2">
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-2">
                    <SidebarTrigger />
                    
                    <Separator
                      orientation="vertical"
                      className="mr-2"
                    />
                    
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                          <BreadcrumbLink href="#">
                            Build Your Application
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>

                  <div className="flex items-center gap-3">
                    <ThemeSwitcher />
                    <Separator
                      orientation="vertical"
                    />
                    <NavUser user={{
                      name: "shadcn",
                      email: "m@example.com",
                      avatar: "/avatars/shadcn.jpg",
                    }} />
                  </div>
                </div>
              </header>

              <main className="p-4">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </section>
    </>
  )
}

