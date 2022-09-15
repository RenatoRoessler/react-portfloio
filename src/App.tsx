import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultLightTheme, defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./@types/global";
import { Conteudo } from "./pages/conteudo";
import { ThemeProvider as ThemeProviderM5 } from "@mui/material/styles";
import { theme, themeLight } from "./styles/theme/theme";
import { ToggleTheme } from "./pages/ToggleTheme/ToggleTheme";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? defaultTheme : defaultLightTheme}>
      <ThemeProviderM5 theme={darkMode ? theme : themeLight}>
        <GlobalStyle />
        <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
        <Conteudo />
      </ThemeProviderM5>
    </ThemeProvider>
  );
}

export default App;
