import StaggeredMenu from "./../components/StaggeredMenu";
import { useEffect, useState, useContext } from "react";
import { useMenu } from "@/contexts/MenuOpenContext";

export default function Navigation() {
  //controlling the context of if the animation has finished and the menu is now closed

  //watching if the button has been clicked or not
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  // function animationListenerApplyOnEnd(event){
  //   switch (event.type) {
  //     case "animationend":
  //       console.log("AnimationListernerApplyOnEnd: Animation Ended")
  //       setMenuOpened(false)
  //       break;
  //   }
  // }

  // useEffect(()=>{
  //   const thisElement = Array.from(document.getElementsByClassName("Navigation") as HTMLCollectionOf<HTMLElement>)[0]
  //   console.log(`Navigation Element`, thisElement)
  //   if(isMenuOpened){
  //     thisElement.removeEventListener("animationend", animationListenerApplyOnEnd);
  //     setMenuOpened(true);
  //   }else{
  //     thisElement.addEventListener("animationend", animationListenerApplyOnEnd);
  //   }
  // },[isMenuOpened])

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    {
      label: "My Websites",
      ariaLabel: "See my previous webpages",
      link: "/websites",
    },
    { label: "CV", ariaLabel: "View my CV", link: "/cv" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/JacobTomaszewski22" },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jacob-tomaszewski",
    },
  ];
  return (
    <div style={{ height: "100vh", background: "#1a1a1a" }}>
      <StaggeredMenu
        position="left"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#00FFFF"
        openMenuButtonColor="#00FFFF"
        changeMenuColorOnOpen={true}
        colors={["#f4aaff", "#e8a740"]}
        className="Navigation"
        //   logoUrl="/path-to-your-logo.svg"
        accentColor="#00FFFF"
        onMenuOpen={() => {
          setIsMenuOpened(true);
          console.log(`${isMenuOpened}`);
        }}
        onMenuClose={() => {
          setIsMenuOpened(false);
          console.log(`${isMenuOpened}`);
        }}
        isFixed={false}
      />
    </div>
  );
}
