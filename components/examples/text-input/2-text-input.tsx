import { TextInput } from "@/components/ui/text-input";

export function TextInputExample2() {
  return (
    <TextInput
      placeholder="Disabled"
      editable={false}
      selectTextOnFocus={false}
    />
  );
}
