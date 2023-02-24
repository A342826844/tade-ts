import React from "react";
import useColorScheme from "./useColorScheme";

export function useExtendBaseTheme() {
  const colorScheme = useColorScheme();

  return React.useMemo(() => {
    return {
      config: {
        initialColorMode: colorScheme,
      },
      shadows: {
        16: {
          shadowColor: "#BFBFBF",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.6,
          shadowRadius: 16,
          elevation: 0,
        },
      },
    };
  }, []);
}
