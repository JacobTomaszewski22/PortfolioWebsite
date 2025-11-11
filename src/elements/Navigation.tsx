import StaggeredMenu from "./../components/StaggeredMenu";
import { useState } from "react";

export default function Navigation() {
  //watching if the button has been clicked or not
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    {
      label: "My Websites",
      ariaLabel: "See my previous webpages",
      link: "/websites",
    },
    { label: "CV", ariaLabel: "View my CV", link: "/cv" }
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
