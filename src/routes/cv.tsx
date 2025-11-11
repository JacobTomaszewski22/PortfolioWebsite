import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from "react";
import { useMenu } from "@/contexts/menuOpenContext";

export const Route = createFileRoute('/cv')({
  component: RouteComponent,
})

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

  return(
    <div className={`w-full min-h-screen absolute top-10 left-0 p-4 md:p-8 ${divClassNames}`}>
  <div className="max-w-6xl mx-auto">
    <div className="rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#00FFFF] text-stone-800 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">My CV</h2>
        <a 
          href="/files/Jacob Tomaszewski CV.pdf" 
          download
          className="text-stone-800 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          Download PDF
        </a>
      </div>
      <iframe
        src="/files/Jacob Tomaszewski CV.pdf"
        className="w-full h-[600px] md:h-[800px] lg:h-[1000px] border-0"
        title="PDF Viewer"
      />
    </div>
  </div>
</div>
    
  )
}
