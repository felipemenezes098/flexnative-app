import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Text } from "@/components/ui/text";
import { getThemeColors } from "@/theme/theme-colors";
import { useState } from "react";

export function AccordionExample3() {
  const colors = getThemeColors();
  const [isExpanded, setIsExpanded] = useState<string[]>([]);

  const handlePress = (value: string) => {
    setIsExpanded((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }
      return [...prev, value];
    });
  };

  return (
    <Accordion type="multiple" collapsable>
      <AccordionItem value="item-1">
        <AccordionTrigger onPress={() => handlePress("item-1")}>
          <Text
            style={{
              color: isExpanded.includes("item-1") ? "green" : colors.text,
            }}
          >
            Is it accessible?
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger onPress={() => handlePress("item-2")}>
          <Text
            style={{
              color: isExpanded.includes("item-2") ? "orange" : colors.text,
            }}
          >
            Is it styled?
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger onPress={() => handlePress("item-3")}>
          <Text
            style={{
              fontWeight: isExpanded.includes("item-3") ? "bold" : "normal",
            }}
          >
            Is it possible to redesign?
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text
            style={{
              fontWeight: isExpanded.includes("item-3") ? "bold" : "normal",
            }}
          >
            Yes. You can use it to design your own accordion.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
