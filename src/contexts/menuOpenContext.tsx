import * as React from "react";
//We are using menu Opened instead to show if the menu has finished closing

interface MenuContextType {
  menuOpened: boolean;
  setMenuOpened: (opened: boolean) => void;
}

const MenuContext = React.createContext<undefined | MenuContextType>(undefined);

// Create a provider component
export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuOpened, setMenuOpened] = React.useState(false);

  return (
    <MenuContext.Provider value={{ menuOpened, setMenuOpened }}>
      {children}
    </MenuContext.Provider>
  );
}

// Create a custom hook for easy access
export function useMenu() {
  const context = React.useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}
