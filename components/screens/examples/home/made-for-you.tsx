import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { View } from "@/components/ui/view";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";

import { Image } from "expo-image";

export function MadeForYou() {
  const data = [
    {
      id: 1,
      title: "The Art of Reusability",
      artist: "Lena Logic",
      image:
        "https://images.unsplash.com/photo-1524650359799-842906ca1c06?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Async Awakenings",
      artist: "Nina Netcode",
      image:
        "https://images.unsplash.com/photo-1499743538388-7ccc7bf72492?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Stateful Symphony",
      artist: "Beth Binary",
      image:
        "https://images.unsplash.com/photo-1600481176401-167c434ae36c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://images.unsplash.com/photo-1707369707420-a1cde10f035a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card style={styles.card} isTouchable activeOpacity={0.8}>
            <Image
              style={styles.image}
              source={item.image}
              contentFit="cover"
              transition={1000}
            />
            <CardHeader style={styles.cardHeader}>
              <CardTitle style={styles.cardTitle}>{item.title}</CardTitle>
              <CardDescription style={styles.cardDescription}>
                {item.artist}
              </CardDescription>
            </CardHeader>
          </Card>
        )}
        keyExtractor={(item) => item.id.toString()}
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
    paddingTop: 8,
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
