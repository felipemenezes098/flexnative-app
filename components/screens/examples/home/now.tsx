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

export function MusicNow() {
  const data = [
    {
      id: 1,
      title: "React Rendezvous",
      artist: "Ethan Byte",
      image:
        "https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Async Awakenings",
      artist: "Nina Netcode",
      image:
        "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?q=80&w=1825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "The Art of Reusability",
      artist: "Lena Logic",
      image:
        "https://images.unsplash.com/photo-1486092642310-0c4e84309adb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Stateful Symphony",
      artist: "Beth Binary",
      image:
        "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    height: 300,
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
