import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../source/components/CSSReset";
// import ColorModeProvider, { ColorModeContext } from "../source/components/Menu/components/ColorMode";
import ColorModeProvider, {
  ColorModeContext,
} from "../source/components/Menu/components/ColorMode";
import RegisterVideo from "../source/components/RegisterVideo";

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>
      {props.children}
    </ColorModeProvider>
  );
}

function Root({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext);
  
  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <CSSReset />
      <Component {...pageProps} />
      <RegisterVideo/>
    </ThemeProvider>
  );
}

// export default MyApp;

export default function _App(props) {
  return (
   <ProviderWrapper>
     <Root {...props} />
   </ProviderWrapper>
  )
};
