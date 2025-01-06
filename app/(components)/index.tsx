import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { TextInput } from "@/components/ui/text-input";
import { View } from "@/components/ui/view";
import { getThemeColors } from "@/theme/theme-colors";
import { StyleSheet, Keyboard, FlatList } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { ScrollView } from "@/components/ui/scroll-view";
import { components } from "@/data/components";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Components() {
  const [search, setSearch] = useState("");
  const colors = getThemeColors();

  const filteredComponents = components.filter(
    (component) =>
      component.name.toLowerCase().includes(search.toLowerCase()) &&
      component.name !== "All"
  );

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.mainTitle}>Components</Text>
        <Text
          style={[styles.description, { color: colors["muted-foreground"] }]}
        >
          Select a component to see the examples.
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search component"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View style={styles.componentsContainer}>
        <FlatList
          keyExtractor={(item) => item.name}
          horizontal={false}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={2}
          scrollEnabled={false}
          contentContainerStyle={styles.componentsList}
          data={filteredComponents}
          renderItem={({ item }) => (
            <Card
              key={item.name}
              isTouchable
              style={styles.card}
              onPress={() => {
                Keyboard.dismiss();
                router.push(item.route as any);
              }}
            >
              <CardHeader style={styles.cardHeader}>
                <View style={styles.cardTitleContainer}>
                  <MaterialCommunityIcons
                    name="shape-square-rounded-plus"
                    size={24}
                    color={colors["primary"]}
                  />
                  <CardTitle>{item.name}</CardTitle>
                </View>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          )}
        />
        {filteredComponents.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResults}>No results found</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    gap: 16,
  },
  infoContainer: {
    gap: 5,
  },
  searchContainer: {
    gap: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  componentsContainer: {
    gap: 10,
  },
  componentsList: {
    gap: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    maxWidth: "48%",
    minHeight: 100,
    shadowColor: "transparent",
  },
  cardHeader: {
    gap: 3,
  },
  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
    padding: 16,
  },
  noResults: {
    fontSize: 16,
    textAlign: "center",
  },
});
