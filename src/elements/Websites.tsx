import { useState, useEffect } from "react";
import CardSwap, { Card } from "@/components/CardSwap"

interface websiteProps {
  websiteURL: string[];
  websiteTitle: string;
  iFrameClassNameOverride?: string | null;
  websiteDescription: React.ReactNode;
}

function onCardClickWebsiteOpen(URL: string){
  window.open(URL, "_blank")
}

export default function Websites(props: websiteProps) {
  const [_isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Set initial value
    setIsLargeScreen(mediaQuery.matches);

    // Listen for changes
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
{/* <div className="relative z-10 text-stone-50 grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2 gap-4"> */}
<div className="relative z-10 text-stone-50 grid flex lg:flex-row md:flex-col gap-4">
  <CardSwap
    cardDistance={20}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={true}
    width={_isLargeScreen? 1000: 500}
    height={_isLargeScreen? 600: 300}
    skewAmount={0}
    onCardClick={(idx) => onCardClickWebsiteOpen(props.websiteURL[idx])}
  >
   {props.websiteURL.map(URL=>(
      <Card>
      <h3 className="p-2 text-2xl">Burnt Chapter's Website</h3>
      <div className="overflow-hidden w-full h-full">
                  <iframe
                src={URL}
                title={props.websiteTitle}
                loading={URL.includes("photos")?"lazy":"eager"}
                // height={isLargeScreen ? "600" : "300"}
                // width={isLargeScreen ? "600" : "300"}
                sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-scripts allow-same-origin"
                className={
                  props.iFrameClassNameOverride ||
                  " rounded-lg border border-stone-700 shadow-lg w-full h-8/10"
                }
              />
        </div>
    </Card>
   ))} 
  </CardSwap>
  <div className="flex flex-col p-6 text-xl md:max-w-[40vw] text-clip">
    {props.websiteDescription}
  </div>
</div>
    </>
  );
}
