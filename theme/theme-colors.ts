import Colors from "@/constants/colors";
import { useColorScheme } from "@/hooks/theme/use-color-scheme";

export function getThemeColors() {
  const theme = useColorScheme() ?? "light";
  return Colors[theme];
}
