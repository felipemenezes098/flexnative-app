import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Text } from "@/components/ui/text";

export function AccordionExample2() {
  return (
    <Accordion type="single" collapsible>
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
            Yes. It comes with default styles that matches the other components'
            aesthetic.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger>Is it possible to redesign?</AccordionTrigger>
        <AccordionContent>
          <Text>Yes. You can use it to design your own accordion.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
