import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { MusicNow } from "./now";
import { Popular } from "./popular";
import { MadeForYou } from "./made-for-you";
import { StyleSheet } from "react-native";
import { getThemeColors } from "@/theme/theme-colors";

export const Home = () => {
  const colors = getThemeColors();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleContainer}>Listen Now</Text>
          <Text
            style={[
              styles.descriptionContainer,
              { color: colors["muted-foreground"] },
            ]}
          >
            Top picks for you. Updated daily.
          </Text>
        </View>
        <Separator />
      </View>
      <MusicNow />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleContainer}>Most Popular</Text>
          <Text
            style={[
              styles.descriptionContainer,
              { color: colors["muted-foreground"] },
            ]}
          >
            The most popular songs right now.
          </Text>
        </View>
        <Separator />
      </View>
      <Popular />
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.titleContainer}>Made for You</Text>
          <Text
            style={[
              styles.descriptionContainer,
              { color: colors["muted-foreground"] },
            ]}
          >
            Your personal playlists. Updated daily.
          </Text>
        </View>
        <Separator />
      </View>
      <MadeForYou />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 16,
  },
  infoContainer: {
    gap: 5,
  },
  titleContainer: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descriptionContainer: {
    fontSize: 14,
  },
});
