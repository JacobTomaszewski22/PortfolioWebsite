
interface WebsitesProps{
    websites: string[]
}

export default function WebsiteGrid(websitesProps: WebsitesProps){
    const iframeStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        border: "solid 1px white",
    }

    return(
        <div className="grid grid-cols-3 grid-rows-3 gap-y-[4vh] gap-x-[2vw] justify-items-center">
            {websitesProps.websites.map((website) => (
                <div
                    key={website}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 w-[26vw] h-[26vh]"
                    onClick={() => window.open(website, '_blank')}
                >
                    <iframe
                        src={website}
                        // height={isLargeScreen ? "600" : "300"}
                        // width={isLargeScreen ? "600" : "300"}
                        className="hover:cursor-pointer pointer-events-none"
                        style={iframeStyle}
                        sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-scripts allow-same-origin"
                        // onClick={() => window.open('https://example.com', '_blank')}
                    >
                    </iframe>
                </div>
            ))}
        </div>
    )
}