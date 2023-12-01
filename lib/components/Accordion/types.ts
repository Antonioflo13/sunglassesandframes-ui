export type AccordionProps = {
    accordion: Accordion[];
  }

type Accordion = {
    title: string;
    description: string;
    open: boolean;
  }