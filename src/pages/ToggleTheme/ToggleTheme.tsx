import React, { useState } from "react";
import { BaseStar, Input, Label, Moon, Start1, Start2 } from "./styles";

interface ToggleThemeProps {
  darkMode: boolean;
  setDarkMode: (a: boolean) => void
}

export const ToggleTheme = ({darkMode, setDarkMode}:ToggleThemeProps) => {

  console.log(`darkMode`,darkMode)
  return (
    <>
      {/* <Input type="checkbox" id="toggle_checkbox" /> */}

      <Label onClick={() => setDarkMode(!darkMode)} darkMode={darkMode}>
        <BaseStar darkMode={darkMode}>
          <Start1 darkMode={darkMode}>
            ★
          </Start1>
          <Start2 darkMode={darkMode}>
            ★
          </Start2>
        </BaseStar>
        <Moon darkMode={darkMode}></Moon>
      </Label>

    </>
  );
};
