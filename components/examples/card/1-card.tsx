import { Text } from "@/components/ui/text";
import { StyleSheet, View } from "react-native";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TextInput } from "@/components/ui/text-input";
import { Button } from "@/components/ui/button";

export function CardExample1() {
  return (
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent style={styles.cardContent}>
          <View style={styles.cardContentRow}>
            <Text style={styles.cardContentTitle}>Name</Text>
            <TextInput placeholder="Name of your project" />
          </View>
          <View style={styles.cardContentRow}>
            <Text style={styles.cardContentTitle}>Description</Text>
            <TextInput placeholder="Description of your project" />
          </View>
        </CardContent>
        <CardFooter style={styles.cardFooter}>
          <Button variant="outline" label="Cancel" size="sm" />
          <Button label="Deploy" size="sm" />
        </CardFooter>
      </Card>
  );
}

const styles = StyleSheet.create({
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
});
