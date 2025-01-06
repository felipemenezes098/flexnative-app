import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { StyleSheet } from "react-native";
import { getThemeColors } from "@/theme/theme-colors";
import { Button } from "@/components/ui/button";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const Podcasts = () => {
  const colors = getThemeColors();

  return (
    <View style={[styles.container, { borderColor: colors.border }]}>
      <View style={styles.infoContainer}>
        <MaterialCommunityIcons
          name="record-circle-outline"
          size={30}
          color={colors["muted-foreground"]}
        />
        <Text style={styles.titleContainer}>No episodes added</Text>
        <Text style={styles.descriptionContainer}>
          You have not added any podcasts. Add one below.
        </Text>
        <View style={styles.buttonContainer}>
          <Button label="Add Podcast" size="sm" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    height: 350,
    borderStyle: "dashed",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  infoContainer: {
    gap: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionContainer: {
    fontSize: 14,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
  },
});
