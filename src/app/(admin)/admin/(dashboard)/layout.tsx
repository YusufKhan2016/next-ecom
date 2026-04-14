import AdminNavbar from "@/components/layout/admin/adminNavbar"
import AdminSidebar from "@/components/layout/admin/adminSidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <AdminSidebar />
            <AdminNavbar />
            {children}
        </section>
    )
}