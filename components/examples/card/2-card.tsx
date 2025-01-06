import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TextInput } from "@/components/ui/text-input";
import { Button } from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export function CardExample2() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Task</CardTitle>
        <CardDescription>
          Fill in the form to create a new task.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent style={[styles.cardContent, { paddingTop: 15 }]}>
        <View style={styles.cardContentRow}>
          <Text style={styles.cardContentTitle}>Name</Text>
          <TextInput placeholder="Name of your task" />
        </View>
        <View style={styles.cardContentRow}>
          <Text style={styles.cardContentTitle}>Description</Text>
          <TextInput placeholder="Description of your task" />
        </View>
        <View style={styles.cardContentRow}>
          <Text style={styles.cardContentTitle}>Objective</Text>
          <TextInput placeholder="Objective of your task" />
        </View>
      </CardContent>
      <CardFooter style={styles.cardFooter}>
        <Button
          label="Create"
          size="sm"
          style={styles.button}
          icon={<Ionicons name="add" />}
        />
      </CardFooter>
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    gap: 15,
  },
  cardContentRow: {
    gap: 5,
  },
  cardContentTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
  },
});
