import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { StyleSheet } from "react-native";
import { ScrollView } from "@/components/ui/scroll-view";
import { Button } from "@/components/ui/button";

import Feather from "@expo/vector-icons/Feather";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Home } from "../../components/screens/examples/home";
import { Podcasts } from "../../components/screens/examples/podcasts";

export default function Examples() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>
            {activeTab === "Home"
              ? "Welcome to Music App"
              : activeTab === "Podcasts"
              ? "New Episodes"
              : "Search"}
          </Text>
          <Text style={styles.headerDescription}>
            {activeTab === "Home"
              ? "Your personal music assistant"
              : activeTab === "Podcasts"
              ? "Listen to your favorite podcasts"
              : activeTab}
          </Text>
        </View>
        <Button
          style={{
            borderRadius: 100,
          }}
          icon={<Feather name="plus" size={16} />}
          size="icon"
        />
      </View>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        <TabsList style={styles.tabList}>
          <TabsTrigger value="Home" style={styles.tabTrigger}>
            Home
          </TabsTrigger>
          <TabsTrigger value="Podcasts" style={styles.tabTrigger}>
            Podcasts
          </TabsTrigger>
          <TabsTrigger value="Search" style={styles.tabTrigger} disabled>
            Live
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Home">
          <Home />
        </TabsContent>
        <TabsContent value="Podcasts">
          <Podcasts />
        </TabsContent>
      </Tabs>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    gap: 16,
    paddingVertical: 16,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headerTitleContainer: {
    flex: 1,
    gap: 4,
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerDescription: {
    fontSize: 14,
  },
  tabList: {
    marginHorizontal: 16,
    gap: 8,
    width: "auto",
    alignSelf: "flex-start",
  },
  tabTrigger: {
    flex: 0,
  },
});
