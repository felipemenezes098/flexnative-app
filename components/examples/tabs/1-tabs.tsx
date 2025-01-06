import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { View } from "@/components/ui/view";
import { Text } from "@/components/ui/text";
import { TextInput } from "@/components/ui/text-input";
import { Button } from "@/components/ui/button";
import { StyleSheet } from "react-native";

export default function TabsExample1() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent style={styles.cardContent}>
            <View style={styles.cardContentRow}>
              <Text style={styles.cardContentTitle}>Name</Text>
              <TextInput placeholder="Name" value="Felipe Menezes" />
            </View>
            <View style={styles.cardContentRow}>
              <Text style={styles.cardContentTitle}>Username</Text>
              <TextInput placeholder="Username" value="@felipemenezes" />
            </View>
          </CardContent>
          <CardFooter>
            <Button label="Save changes" size="sm" style={styles.cardButton} />
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent style={styles.cardContent}>
            <View style={styles.cardContentRow}>
              <Text style={styles.cardContentTitle}>Current password</Text>
              <TextInput secureTextEntry />
            </View>
            <View style={styles.cardContentRow}>
              <Text style={styles.cardContentTitle}>New password</Text>
              <TextInput secureTextEntry />
            </View>
          </CardContent>
          <CardFooter>
            <Button label="Save password" size="sm" style={styles.cardButton} />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
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
  cardButton: {
    width: "100%",
  },
});
