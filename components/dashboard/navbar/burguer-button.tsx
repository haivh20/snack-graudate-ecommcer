import React from "react";
import { StyledBurgerButton } from "./navbar.styles";
import useCollapsed from "@/hooks/useCollapsed";

export const BurguerButton = () => {
  const { collapsed, setCollapsed } = useCollapsed();

  return (
    <div
      className={StyledBurgerButton()}
      // open={collapsed}
      onClick={() => setCollapsed}
    >
      <div />
      <div />
    </div>
  );
};
