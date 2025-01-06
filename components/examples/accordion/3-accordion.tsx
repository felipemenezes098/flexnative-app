import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Text } from "@/components/ui/text";
import { getThemeColors } from "@/theme/theme-colors";

export function AccordionExample3() {
  const colors = getThemeColors();

  return (
      <AccordionRoot multiple>
        <AccordionItem value="item1">
          <AccordionTrigger>
            {({ isExpanded }) => (
              <Text style={{ color: isExpanded ? "green" : colors.text }}>
                Is it accessible?
              </Text>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger>
            {({ isExpanded }) => (
              <Text style={{ color: isExpanded ? "orange" : colors.text }}>
                Is it styled?
              </Text>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              Yes. It comes with default styles that matches the other
              components' aesthetic.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item3">
          <AccordionTrigger>
            {({ isExpanded }) => (
              <Text style={{ color: isExpanded ? "blue" : colors.text }}>
                Is it animated?
              </Text>
            )}
          </AccordionTrigger>
          <AccordionContent>
            {({ isExpanded }) => (
              <Text style={{ fontWeight: isExpanded ? "bold" : "normal" }}>
                Yes. It's animated by default, but you can disable it if
              </Text>
            )}
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
  );
}
