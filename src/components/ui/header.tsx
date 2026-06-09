type headerType = {
    firstPart: string,
    secondPart: string
}

function Header({

    firstPart,
    secondPart

} : headerType ) {
    return (
        <>
            <h1 className="text-4xl">
                {firstPart}

                <span className="text-gray-800 font-semibold italic">
                    {secondPart}
                </span>
            </h1>
        </>
    )
}

export { Header }
