function Header({ firstPart, secondPart }: { firstPart: string, secondPart: string }) {
    return (
        <>
            <h2 className="text-4xl">
                {firstPart} <span className="text-gray-800 font-semibold italic">{ secondPart }</span>
            </h2>
        </>
    )
}

export { Header }
