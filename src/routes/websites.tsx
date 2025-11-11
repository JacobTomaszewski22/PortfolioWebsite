import { createFileRoute } from "@tanstack/react-router";
import Websites from "@/elements/Websites";
import { useState, useEffect } from "react";
import { useMenu } from "@/contexts/menuOpenContext";

export const Route = createFileRoute("/websites")({
  component: RouteComponent,
});

function RouteComponent() {
  const [divClassNames, setDivClassNames] = useState("z-1");
  const { menuOpened } = useMenu();

  useEffect(() => {
    if (menuOpened) {
      setDivClassNames("z-1");
    } else {
      setDivClassNames("z-10");
    }
  }, [menuOpened]);
  return (
    <>
      <div className={`absolute top-0 left-0 translate-y-[35vh] w-full ${divClassNames}`}>
        
        <Websites
          websiteURL={["https://www.burntchapter.com","https://www.burntchapter.com/tickets", "https://www.burntchapter.com/photos"]}
          websiteTitle="Burnt Chapter's Website"
          websiteDescription={
          <div className={`translate-y-[-10vh] translate-x-[15vw] ${divClassNames} max-w-3xl`}>
            <h1 className="text-4xl text-[#00FFFF] font-bold mb-5">Burnt Chapter's Band Website</h1>
            <a className={`text-2xl mb-4 text-stone-500 cursor-pointer ${divClassNames} hover:text-cyan-50 underline`} 
            href="https://www.burntchapter.com"
            target="_blank"
            rel="noopener noreferrer">
              https://www.burntchapter.com
            </a>
            <p className="mb-3 leading-relaxed text-sm md:text-base">Burnt Chapter is a React web application built with Vite and hosted on Vercel. The site uses custom middleware to handle API calls to an external database, keeping sensitive operations secure and separate from the client side. It also integrates with the Bandsintown API to fetch and display live music event data.</p>
            <p className="mb-3 text-base md:text-lg font-semibold">Tech stack: </p>
              <ul className="list-disc list-inside text-sm md:text-base">
                <li className="pb-1">
                React for the UI
                </li>
                <li>
                Vite for fast builds and development
                </li>
                <li>
                Vercel for deployment and hosting
                </li>
                <li>
                Custom middleware layer for secure database communication
                </li>
                <li>
                Bandsintown API integration for real-time event information
                </li>
              </ul>
          </div>}
        />
      </div>
    </>
  );
}