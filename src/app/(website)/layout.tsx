import BottomBar from "@/components/layout/website/bottom-bar"
import NavBar from "@/components/layout/website/nav-bar"

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