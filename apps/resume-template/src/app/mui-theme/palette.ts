import { ThemeOptions } from "@mui/material";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import createPalette from "@mui/material/styles/createPalette";

const palette: ThemeOptions["palette"] = createPalette({
  primary: {
    main: red[500],
    light: red[300],
    dark: red[700],
    contrastText: "#ffffff"
  },
});

export default palette;