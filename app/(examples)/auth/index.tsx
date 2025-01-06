import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { getThemeColors } from "@/theme/theme-colors";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TextInput } from "@/components/ui/text-input";
import { View } from "@/components/ui/view";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function Auth() {
  const colors = getThemeColors();

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    values: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signinSchema>) {
    console.log(values);
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.mainTitle}>Sign in</Text>
          <Text
            style={[styles.description, { color: colors["muted-foreground"] }]}
          >
            Enter your credentials to sign in
          </Text>
        </View>
        <Form {...form}>
          <View style={styles.formContainer}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <TextInput
                      placeholder="Enter your email"
                      value={field.value}
                      onChangeText={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <TextInput
                      placeholder="Enter your password"
                      value={field.value}
                      onChangeText={field.onChange}
                      secureTextEntry
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </View>
          <Button label="Sign in" onPress={form.handleSubmit(onSubmit)} />
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    gap: 16,
  },
  infoContainer: {
    gap: 10,
  },
  formContainer: {
    gap: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});
