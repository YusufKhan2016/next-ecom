import BottomBar from "@/components/layout/website/bottomBar"
import NavBar from "@/components/layout/website/navBar"

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
                {children}
            <BottomBar />
        </>
    )
}