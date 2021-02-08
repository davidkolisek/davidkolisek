import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { ThemeVariant } from "./index";

export function isNamedTheme(
  theme: any
): theme is Theme & { name: ThemeVariant } {
  if (theme.name != null) return true;
  return false;
}
