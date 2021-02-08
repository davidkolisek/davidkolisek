import { Direction, PaletteType } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import common from "@material-ui/core/colors/common";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { Shadows } from "@material-ui/core/styles/shadows";
import { mergeRight } from "ramda";
import { softShadows, strongShadows } from "./shadows";
import { blue, green, yellow } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import { customTypography } from "./typography";

export enum ThemeVariant {
  light = "light",
  dark = "dark",
}

export type Theme = any;

export function createTheme(
  themeToUse: ThemeVariant = ThemeVariant.light,
  useResponsiveFontSizes = true
): Theme {
  let themeConfig = themeConfigs.find((theme) => theme.name === themeToUse);

  if (!themeConfig) {
    console.warn(new Error(`The theme ${themeToUse} is not valid`));
    [themeConfig] = themeConfigs;
  }

  const merged = mergeRight(baseConfig, themeConfig);
  let theme = createMuiTheme(merged);

  if (useResponsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return { ...theme, variant: themeToUse };
}

// base config for any future themes, specifying only the basics
const baseConfig = {
  direction: "ltr" as Direction,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
  },
  palette: {
    background: {
      active: blueGrey[600],
      hover: blueGrey[900],
      selected: "rgba(255, 255, 255, 0.08)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: "#fff",
    },
    warning: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700],
      contrastText: "#fff",
    },
    info: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      contrastText: "#fff",
    },
    success: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: "#fff",
    },
    text: {
      light: common.white,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 991,
      xl: 1199,
    },
  },
  typography: customTypography,
};

const themeConfigs = [
  {
    name: ThemeVariant.light,
    palette: {
      type: "light" as PaletteType,
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.02)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.13,
        activatedOpacity: 0.12,
      },
      background: {
        default: "#f7f7f7",
        dark: "#203141",
        light: "#fff",
        card:
          "linear-gradient(132deg, rgba(59,142,244,1) 0%, rgba(66,205,229,1) 100%)",
        cardInverted: "#282C34",
        paper: common.white,
        header: "#272727",
        footer: "#131313",
        navbar: "#fff",
        content: "#ebebeb",
        quotes: "#ff9000"
      },
      primary: {
        main: "#131313",
        // light: '#00afff',
        // dakr: '#006999',
      },
      secondary: {
        main: "#5518b8",
        // light: '#ffa130',
        // dark: '#ce5818'
      },
      text: {
        primary: "#272727",
        secondary: "#fff",
        contrast: "#3d30ea",
        footer: "#878787",
        social: "#5e6872",
        light: common.white,
        subNavActive: "#009de5",
        unimportant: "#efefef",
      },
    },
    shadows: softShadows as Shadows,
  },
  {
    name: ThemeVariant.dark,
    palette: {
      type: "dark" as PaletteType,
      action: {
        active: common.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        light: "#000",
        paper: "#000",
        default: "#090a0a",
        card: "#000",
        cardInverted: "#282C34",
        dark: "#1c2025",
        header: "#272727",
        footer: "#000",
        tabNav: "#282C34",
        content: "#1c2025",
        quotes: "#1c2025"
      },
      primary: {
        main: common.white,
      },
      secondary: {
        main: "#5518b8",
      },
      text: {
        primary: "#fff",
        secondary: "#272727",
        contrast: "#00f2ff",
        light: common.white,
        footer: "#fff",
        social: "#fff",
        subNavActive: "#3d30ea",
      },
    },
    shadows: strongShadows as Shadows,
  },
];
