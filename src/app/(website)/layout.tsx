import { Navbar, BottomBar } from "@/components/layout/website"

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
            <Navbar />
                <main>    
                    {children}
                </main>
            <BottomBar />
        </>
    )
}