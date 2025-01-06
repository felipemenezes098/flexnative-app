import React, { createContext, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getThemeColors } from "@/theme/theme-colors";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField deve ser usado dentro de <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = { id: string };

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  View,
  React.ComponentPropsWithoutRef<typeof View>
>(({ style, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <View ref={ref} style={[styles.formItem, style]} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  Text,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ style, ...props }, ref) => {
  const { error } = useFormField();
  const colors = getThemeColors();

  return (
    <Text
      ref={ref}
      style={[
        styles.formLabel,
        error ? { color: colors.destructive } : { color: colors.text },
        style,
      ]}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  View,
  React.ComponentPropsWithoutRef<typeof View>
>(({ style, ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <View
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      style={[styles.formControl, style]}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  Text,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ style, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <Text
      ref={ref}
      id={formDescriptionId}
      style={[styles.formDescription, style]}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  Text,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ style, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const colors = getThemeColors(); // Pegamos as cores
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <Text
      ref={ref}
      id={formMessageId}
      style={[styles.formMessage, { color: colors.destructive }, style]}
      {...props}
    >
      {body}
    </Text>
  );
});
FormMessage.displayName = "FormMessage";

const styles = StyleSheet.create({
  formItem: {
    marginBottom: 16,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  formControl: {},
  formDescription: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
  },
  formMessage: {
    fontSize: 12,
    marginTop: 4,
  },
});

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};