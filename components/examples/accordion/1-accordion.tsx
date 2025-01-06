import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  AccordionRoot,
} from "@/components/ui/accordion";
import { Text } from "@/components/ui/text";

export function AccordionExample1() {
  return (
      <AccordionRoot multiple>
        <AccordionItem value="item1">
          <AccordionTrigger>
            <Text>Is it accessible?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger>
            <Text>Is it styled?</Text>
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
            <Text>Is it animated?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
  );
}
