import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
});

export function ColorModeProvider(props) {
  console.log(props, "aqui");
  return (
    <ColorModeContext.Provider value={{mode: props.initialMode }}>
    {props.children}
    </ColorModeContext.Provider>
  )
};
