import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { View } from "@/components/ui/view";
import { Linking, StyleSheet } from "react-native";
import { FlatList } from "react-native";

import { router } from "expo-router";

import { Image } from "expo-image";

export function Item({ data }: { data: any }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            isTouchable
            activeOpacity={0.8}
            onPress={() => {
              if (item.external) {
                Linking.openURL(item.route);
              } else {
                router.push(item.route as any);
              }
            }}
          >
            <Image
              style={styles.image}
              source={item.image}
              contentFit="cover"
              transition={1000}
            />
            <CardHeader style={styles.cardHeader}>
              <CardTitle style={styles.cardTitle}>{item.name}</CardTitle>
              <CardDescription style={styles.cardDescription}>
                {item.description}
              </CardDescription>
            </CardHeader>
          </Card>
        )}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  listContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    gap: 16,
    paddingBottom: 16,
  },
  image: {
    height: 200,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  card: {
    backgroundColor: "transparent",
    shadowColor: "transparent",
    minWidth: 200,
    borderWidth: 0,
  },
  cardHeader: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  cardTitle: {
    fontSize: 14,
  },
  cardDescription: {
    fontSize: 12,
  },
});
