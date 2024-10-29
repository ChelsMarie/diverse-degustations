import { ColorSystemOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
    h6: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'optima'
    }
};

export const components = {
    MuiSwitch: {
        styleOverrides: {
            thumb: {
                // Controls default (unchecked) color for the thumb
                color: 'var(--mui-palette-secondary-dark) !important',
            },

            track: {
                backgroundColor: "var(--mui-palette-secondary-main) !important",
                opacity: "0.6 !important"
            }
        }
    }
};

export const light: ColorSystemOptions = {
    palette: {
        primary: {
            main: "#CBA55B",
            light: "#B98A2E",
            dark: "#D5B066",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#E7D1A7",
            light: "#ffffff",
            dark: "#CFAE6E",
            contrastText: "#ffffff"
        },
        text: {
            primary: "#6C4A09",
            secondary: "#5B3D04"
        },
        background: {
            default: "#E1C084",
            paper: "#C29948"
        },
        error: {
            main: "#6C4A09"
        },
        divider: "#846330" //border color
    }

};
export const dark: ColorSystemOptions = {
    palette: {
        primary: {
            main: "#301E0C",
            light: "#4B2D0B",
            dark: "#130D00",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#130D00",
            light: "#442F06",
            dark: "#000000",
            contrastText: "#ffffff"
        },
        text: {
            primary: "#C6AB75",
            secondary: "#A88541",
        },
        background: {
            default: "#3A230D",
            paper: "#301E0C"
        },
        divider: "#846330" //border color
    }
}


