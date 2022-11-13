import { useState } from "react";

export function useMenu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hiddenMenu = () => {
    setShowMenu(false);
  };

  return {
    showMenu,
    toggleMenu,
    hiddenMenu,
  };
}
