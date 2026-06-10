import BottomBar from "@/components/layout/website/bottomBar"
import NavBar from "@/components/layout/website/navBar"

export const metadata = {
    title: 'Next Ecommerce',
    description: 'Nexjs Ecommerce website.'
}

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
                <main>    
                    {children}
                </main>
            <BottomBar />
        </>
    )
}