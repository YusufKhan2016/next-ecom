import { AppSidebar } from "@/components/layout/admin/appSidebar"
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
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeSwitcher } from "@/components/features/theme/themeSwitcher"

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
            <AppSidebar />

            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-2">
                    <SidebarTrigger />
                    
                    <Separator
                      orientation="vertical"
                      className="mr-2 data-[orientation=vertical]:h-4"
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

                  <div>
                    <ThemeSwitcher/>

                  </div>
                </div>
              </header>

              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </section>
    </>
  )
}




