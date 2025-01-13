import {
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";

export function AccordionExample1() {
  return (
    <Accordion type="multiple" collapsible defaultValue={["item1"]}>
      <AccordionItem value="item1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <View>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </View>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It comes with default styles that match the other components'
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
