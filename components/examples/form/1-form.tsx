"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TextInput } from "@/components/ui/text-input";
import { View } from "@/components/ui/view";
import { StyleSheet } from "react-native";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function FormExample1() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <View style={styles.formContainer}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <TextInput
                  placeholder="Enter your username"
                  value={field.value}
                  onChangeText={field.onChange}
                />
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button label="Submit" onPress={form.handleSubmit(onSubmit)} />
      </View>
    </Form>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
});
